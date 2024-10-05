# Recontent email renderer

> Render MJML templates with variables

## Getting started

```sh
yarn add @recontentapp/email-renderer

npm install @recontentapp/email-renderer
```

## Usage

```ts
import { renderEmail } from '@recontentapp/email-renderer'

const template = `<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-image width="100px" src="/assets/img/logo-small.png"></mj-image>
        <mj-divider border-color="#F45E43"></mj-divider>
        <mj-text font-size="20px" color="#F45E43" font-family="helvetica">{{ title }}</mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>`

// Injects variables & renders HTML content
const html = renderEmail(template, { title: 'Hello World' })
```
