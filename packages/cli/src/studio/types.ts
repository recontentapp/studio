interface Preview {
  id: string;
  html: string | null;
}

export interface TemplateSnapshot {
  title: string | null;
  path: string;
  previews: Preview[];
  errorMessages: string[];
}

interface TemplateUpdatedEvent {
  type: "template-updated";
  template: TemplateSnapshot;
}

interface TemplateDeletedEvent {
  type: "template-deleted";
  template: {
    path: string
  };
}

export type Event = TemplateUpdatedEvent | TemplateDeletedEvent
