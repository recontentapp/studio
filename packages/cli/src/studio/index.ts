import chokidar, { FSWatcher } from 'chokidar'
import cors from 'cors'
import express, { Express } from 'express'
import path from 'path'
import { EventSourceListener } from './EventSourceListener'
import { Printer } from './Printer'
import { Template } from './Template'

export class Studio {
  private debugMode: boolean
  private workspacePath: string
  private webServer: ReturnType<Express['listen']>
  private fsWatcher: FSWatcher
  private printer: Printer
  private eventSourceListener: EventSourceListener
  private templates: Template[]

  constructor(workspacePath: string, port: number) {
    this.debugMode = process.env.NODE_ENV === 'development'
    this.workspacePath = workspacePath
    this.webServer = this.getWebServer(port)
    this.printer = new Printer()
    this.fsWatcher = this.getFileSystemWatcher(workspacePath)
    this.eventSourceListener = new EventSourceListener()
    this.templates = []
  }

  private getWebServer(port: number) {
    const app = express()
    app.use(cors())
    app.use(express.static('public'))

    app.get('/data', async (req, res) => {
      const templates = await Promise.all(
        this.templates.map(template => template.getSnapshot()),
      )

      res.json({
        workspacePath: this.workspacePath,
        templates,
      })
    })

    app.get('/sync', (req, res) => {
      const headers = {
        'Content-Type': 'text/event-stream',
        Connection: 'keep-alive',
        'Cache-Control': 'no-cache',
      }
      res.writeHead(200, headers)
      this.eventSourceListener.addConnection(req, res)
    })

    return app.listen(port, () => {
      this.printer.title(`Studio is running on http://localhost:${port}`)

      if (this.debugMode) {
        return
      }

      import('open').then(({ default: open }) =>
        open(`http://localhost:${port}`),
      )
    })
  }

  private getFileSystemWatcher(workspacePath: string) {
    return chokidar
      .watch(workspacePath, {
        persistent: false,
      })
      .on('add', async filePath => {
        if (filePath.endsWith('.mjml')) {
          const template = new Template(workspacePath, filePath)
          this.templates.push(template)
          const snapshot = await template.getSnapshot()
          this.eventSourceListener.send({
            type: 'template-updated',
            template: snapshot,
          })
          return
        }

        if (filePath.endsWith('.json')) {
          this.templates.forEach(async template => {
            if (template.isFileUpdateRelevant(filePath)) {
              const snapshot = await template.getSnapshot()
              this.eventSourceListener.send({
                type: 'template-updated',
                template: snapshot,
              })
            }
          })
        }
      })
      .on('change', filePath => {
        this.templates.forEach(async template => {
          if (template.isFileUpdateRelevant(filePath)) {
            const snapshot = await template.getSnapshot()
            this.eventSourceListener.send({
              type: 'template-updated',
              template: snapshot,
            })
          }
        })
      })
      .on('unlink', filePath => {
        if (filePath.endsWith('.mjml')) {
          this.templates.forEach(template => {
            if (filePath.includes(template.mjmPath)) {
              this.eventSourceListener.send({
                type: 'template-deleted',
                template: {
                  path: path.relative(this.workspacePath, template.mjmPath),
                },
              })
            }
          })
          this.templates = this.templates.filter(
            template => template.mjmPath !== filePath,
          )
          return
        }

        this.templates.forEach(async template => {
          if (template.isFileUpdateRelevant(filePath)) {
            const snapshot = await template.getSnapshot()
            this.eventSourceListener.send({
              type: 'template-updated',
              template: snapshot,
            })
          }
        })
      })
  }

  async terminate() {
    if (this.debugMode) {
      this.printer.info('Terminating studio')
    }

    this.webServer?.close()
    await this.fsWatcher.close()
  }
}
