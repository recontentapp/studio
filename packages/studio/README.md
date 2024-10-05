# Recontent Studio

> A local environment to develop MJML email templates & layouts

![Recontent Studio](https://github.com/recontentapp/studio/blob/master/screenshot.png?raw=true)

- **Live responsive preview:** Check how your template looks for different screen sizes with hot reload
- **Localization:** Localize content & preview templates in multiple languages
- **JSON schemas:** Pass variables to templates & preview them with fake data
- **Reusable layouts:** Share the same structure across multiple templates
- **Typed email renderer:** Generate a Typescript email renderer for your templates

## Installation

Recontent Studio is a command-line interface (CLI) that can be installed globally or as a dev dependency of your project.

```sh
npm install -g @recontentapp/studio

npm install @recontentapp/studio --save-dev
```

## Using the studio

A recommended folder structure for MJML templates & layouts looks like this:

- Each `.mjml` template belongs to a dedicated folder with its associated files
- Reusable layouts are grouped in a separate folder

To learn more, launch the studio or check out [this example project](https://github.com/recontentapp/studio/tree/master/packages/example-app).

```sh
.
├── layouts
│   └── default
│       ├── config.json
│       ├── template.mjml
│       └── content.json
└── welcome
    ├── config.json
    ├── template.mjml
    ├── content.en.json
    └── content.fr.json
```

To launch the studio, run the following command with your folder's path.

```sh
recontent studio ./path/to/folder
```

## Generating a typed email renderer

To generate a typed email renderer, run the following command with your folder's path & the desired output folder. An `emailRenderer.ts` file will be generated in the output folder.

```sh
recontent compile ./path/to/folder --output ./src/emails
```

To use the email renderer, make sure to install `@recontentapp/email-renderer` as a dependency of your project. This package is used to render your email templates as HTML with passed variables.

```sh
npm install @recontentapp/email-renderer

yarn add @recontentapp/email-renderer
```

in your application code, you can then use your typed email renderer to send emails:

```ts
import { emailRenderer } from 'src/emails/emailRenderer'

const sendEmail = async () => {
  const html = emailRenderer.webinarAnnouncement({
    locale: 'en',
    data: {
      link: 'https://example.com',
      features: [
        { name: 'Feature 1' },
        { name: 'Feature 2' },
      ],
    },
  })

  // TODO: Send email
}
```
