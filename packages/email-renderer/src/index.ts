import mjml2html from 'mjml'
import mustache from 'mustache'

interface RenderEmailParams {
  template: string
  data: Record<string, unknown>
}

export const renderEmail = ({
  template,
  data,
}: RenderEmailParams): string | null => {
  try {
    const mjmlTemplateWithData = mustache.render(
      template,
      data,
      {},
      {
        // Disable HTML escaping
        escape: val => val,
        tags: ['{{', '}}'],
      },
    )

    return mjml2html(mjmlTemplateWithData).html
  } catch (error) {
    return null
  }
}
