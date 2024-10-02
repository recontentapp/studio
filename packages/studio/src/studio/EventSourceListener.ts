import { Request, Response } from 'express'
import { v4 } from 'uuid'
import { Event } from './types'

interface Connection {
  id: string
  httpResponse: Response
}

export class EventSourceListener {
  private connections: Connection[]

  constructor() {
    this.connections = []
  }

  addConnection(request: Request, response: Response) {
    const connection = { id: v4(), httpResponse: response }
    this.connections.push(connection)

    request.on('close', () => {
      this.connections = this.connections.filter(
        conn => conn.id !== connection.id,
      )
    })
  }

  send(event: Event) {
    this.connections.forEach(conn => {
      conn.httpResponse.write(`data: ${JSON.stringify(event)}\n\n`)
    })
  }
}
