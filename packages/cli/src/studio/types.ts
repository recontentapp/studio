interface Preview {
  id: string
  html: string
}

export interface TemplateSnapshot {
  title: string | null
  path: string
  previews: Preview[]
  schemaInterface: string | null
  errorMessages: string[]
  warningMessages: string[]
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

export type Event = TemplateUpdatedEvent | TemplateDeletedEvent
