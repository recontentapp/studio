interface Preview {
  id: string
  html: string
}

export interface TemplateSnapshot {
  title: string | null
  type: 'template' | 'layout'
  path: string
  previews: Preview[]
  schemaInterface: string | null
  errorMessages: string[]
  warningMessages: string[]
}

interface TemplateAddedEvent {
  type: 'template-added'
  template: TemplateSnapshot
}

interface TemplateUpdatedEvent {
  type: 'template-updated'
  template: TemplateSnapshot
}

interface TemplateDeletedEvent {
  type: 'template-deleted'
  template: {
    path: string
  }
}

export type Event =
  | TemplateAddedEvent
  | TemplateUpdatedEvent
  | TemplateDeletedEvent
