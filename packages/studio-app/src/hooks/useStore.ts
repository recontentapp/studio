import { useEffect, useRef, useState } from 'react'
import { Event, TemplateSnapshot } from '../../../cli/src/studio/types'

const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:4242' : ''

export const useStore = () => {
  const [workspacePath, setWorkspacePath] = useState<string>('')
  const [templates, setTemplates] = useState<TemplateSnapshot[]>([])
  const oneOff = useRef(false)
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    if (oneOff.current) {
      return
    }

    oneOff.current = true

    fetch([baseURL, '/data'].join(''))
      .then(res => res.json())
      .then(data => {
        setTemplates(data.templates)
        setWorkspacePath(data.workspacePath)
        setInitialized(true)
      })

    const eventSource = new EventSource([baseURL, '/sync'].join(''))

    eventSource.addEventListener('error', () => {
      // TODO: Notify users
    })

    eventSource.onmessage = message => {
      const event: Event = JSON.parse(message.data)

      switch (event.type) {
        case 'template-added': {
          setTemplates(templates => {
            return [...templates, event.template]
          })

          break
        }

        case 'template-updated': {
          setTemplates(templates => {
            const updatedTemplate = event.template
            const index = templates.findIndex(
              template => template.path === updatedTemplate.path,
            )

            if (index === -1) {
              return templates
            }

            return [
              ...templates.slice(0, index),
              updatedTemplate,
              ...templates.slice(index + 1),
            ]
          })

          break
        }

        case 'template-deleted': {
          setTemplates(templates => {
            return templates.filter(t => t.path !== event.template.path)
          })

          break
        }
      }
    }
  }, [])

  return {
    initialized,
    workspacePath,
    templates,
  }
}
