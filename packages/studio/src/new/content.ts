export const layoutMjml = `<mjml>
  <mj-head>
    <mj-title>Stripe notification</mj-title>

    <mj-attributes>
      <mj-all font-family="Helvetica, sans-serif" />
      <mj-text
        font-weight="300"
        font-size="14px"
        color="#425466"
        line-height="20px"
        padding="0px"
      />
      <mj-section padding="0px" />
      <mj-image padding="0px" />
      <mj-column padding-top="0px" padding-bottom="0px" />
      <mj-wrapper padding-top="0px" padding-bottom="0px" />
      <mj-button
        background-color="#635BFF"
        border-radius="24px"
        font-weight="bold"
        inner-padding="12px 25px 12px 25px"
        font-size="14px"
      />
    </mj-attributes>
  </mj-head>

  <mj-body background-color="#F1F5F9">
    <mj-section padding="20px"></mj-section>

    <mj-wrapper background-color="#ffffff"> {{{ content }}} </mj-wrapper>

    <mj-section background-color="#F6F9FC" padding="40px 64px">
      <mj-column width="100%">
        <mj-image
          align="left"
          src="https://raw.githubusercontent.com/recontentapp/mjml-templates/master/templates/stripe-notification/assets/gray-logo.png"
          alt=""
          width="42px"
        />
      </mj-column>
    </mj-section>
    <mj-section padding="30px"></mj-section>
  </mj-body>
</mjml>
`

export const layoutConfig = `{
  "title": "Default layout",
  "type": "layout"
}
`

export const templateMjml = `<mj-section padding="50px 64px 30px 64px">
  <mj-column width="100%">
    <mj-image
      align="left"
      src="https://raw.githubusercontent.com/recontentapp/mjml-templates/master/templates/stripe-notification/assets/logo.png"
      alt=""
      width="86px"
    />
  </mj-column>
</mj-section>

<mj-section>
  <mj-column width="100%" padding="0px 64px 0px 64px">
    <mj-text align="left">
      <p>{{{ welcomeMessage }}}</p>
      <p>{{{ description }}}</p>
    </mj-text>
  </mj-column>
</mj-section>

<mj-section padding="16px 0px 0px 0px">
  <mj-column>
    <mj-button href="{{ link }}">{{{ callToAction }}}</mj-button>
  </mj-column>
</mj-section>

<mj-section padding="0px 64px 40px 64px">
  <mj-column>
    <mj-text><p>{{{ signature }}}</p></mj-text>
  </mj-column>
</mj-section>
`

export const templateConfig = `{
  "title": "Webinar announcement",
  "layout": "../../layouts/default/template.mjml",
  "schema": {
    "type": "object",
    "properties": {
      "link": {
        "type": "string",
        "example": "https://example.com"
      }
    },
    "additionalProperties": false,
    "required": ["link"]
  }
}
`

export const templateContentFrench = `{
  "welcomeMessage": "Bonjour,",
  "description": "Les équipes de Stripe ont récemment travaillé au développement de nouvelles fonctionnalités pour vous aider à gérer votre entreprise. Nous vous convions à découvrir ces nouveautés en avant-première.",
  "callToAction": "Inscrivez-vous dès maintenant"
}
`

export const templateContentEnglish = `{
  "welcomeMessage": "Hello,",
  "description": "The Stripe team has recently been working on new features to help you manage your business. We invite you to discover these new features in preview.",
  "callToAction": "Register now"
}
`
