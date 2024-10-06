import {
  Box,
  Button,
  Code,
  Dialog,
  Flex,
  Link,
  Tabs,
  Text,
} from '@radix-ui/themes'

const folderStructure = `.
├── layouts
│   └── default
│       ├── config.json
│       └── template.mjml
└── templates
    └── webinar-announcement
        ├── config.json
        ├── content.en.json
        ├── content.fr.json
        └── template.mjml`

const contentFilesExample = `// You can either use a single content file for all locales
.
├── config.json
├── content.json
└── template.mjml

// Or use a content file for each locale
.
├── config.json
├── content.en.json
├── content.fr.json
└── template.mjml
`

const layoutConfigFile = `{
  "title": "Default layout",
  "type": "layout"
}`

const layoutTemplateFile = `<mjml>
  <mj-head>
    <mj-attributes>
      <mj-all font-family="Helvetica, sans-serif" />
    </mj-attributes>
  </mj-head>

  <mj-body>
    <mj-wrapper>{{{ content }}}</mj-wrapper>
  </mj-body>
</mjml>`

const configFile = `{
  "name": "Welcome email",
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
}`

const contentExample = `<mj-text>{{{ callToAction }}}</mj-text>`

const schemaExample = `<mj-column>
  <mj-button href="{{ link }}">{{{ callToAction }}}</mj-button>
</mj-column>`

const emailRendererExample = `import { emailRenderer } from './generated/emailRenderer'

const sendEmail = async () => {
  const html = emailRenderer.webinarAnnouncement({
    locale: 'en',
    data: {
      link: 'https://example.com',
    },
  })

  // TODO: Send email
}
`

export const GettingStartedDialog = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button
          variant="surface"
          color="gray"
          style={{ width: '100%', height: 'inherit' }}
        >
          <Flex align="center" gap="2">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.69667 0.0403541C8.90859 0.131038 9.03106 0.354857 8.99316 0.582235L8.0902 6.00001H12.5C12.6893 6.00001 12.8625 6.10701 12.9472 6.27641C13.0319 6.4458 13.0136 6.6485 12.8999 6.80001L6.89997 14.8C6.76167 14.9844 6.51521 15.0503 6.30328 14.9597C6.09135 14.869 5.96888 14.6452 6.00678 14.4178L6.90974 9H2.49999C2.31061 9 2.13748 8.893 2.05278 8.72361C1.96809 8.55422 1.98636 8.35151 2.09999 8.2L8.09997 0.200038C8.23828 0.0156255 8.48474 -0.0503301 8.69667 0.0403541ZM3.49999 8.00001H7.49997C7.64695 8.00001 7.78648 8.06467 7.88148 8.17682C7.97648 8.28896 8.01733 8.43723 7.99317 8.5822L7.33027 12.5596L11.5 7.00001H7.49997C7.353 7.00001 7.21347 6.93534 7.11846 6.8232C7.02346 6.71105 6.98261 6.56279 7.00678 6.41781L7.66968 2.44042L3.49999 8.00001Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>

            <Flex direction="column" align="start" py="2">
              <Text align="left" size="1">
                How does it work?
              </Text>
              <Text align="left" size="1" style={{ color: 'var(--gray-9)' }}>
                Managing templates step-by-step
              </Text>
            </Flex>
          </Flex>
        </Button>
      </Dialog.Trigger>

      <Dialog.Content
        minHeight="520px"
        maxWidth="620px"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <Tabs.Root defaultValue="folder_structure" style={{ flexGrow: 1 }}>
          <Tabs.List>
            <Tabs.Trigger value="folder_structure">
              Folder structure
            </Tabs.Trigger>
            <Tabs.Trigger value="config">Config file</Tabs.Trigger>
            <Tabs.Trigger value="layout">Layout</Tabs.Trigger>
            <Tabs.Trigger value="content">Content</Tabs.Trigger>
            <Tabs.Trigger value="schema">Variables</Tabs.Trigger>
            <Tabs.Trigger value="compile">Compile</Tabs.Trigger>
          </Tabs.List>

          <Box pt="3">
            <Tabs.Content value="folder_structure">
              <Flex gap="3" direction="column">
                <Text size="2">
                  A typical folder structure includes one folder for each
                  template & layout. Each folder contains at least a{' '}
                  <Code>.mjml</Code> file & a <Code>config.json</Code> file.
                </Text>

                <pre
                  style={{
                    margin: 0,
                    fontSize: 'var(--font-size-1)',
                    backgroundColor: 'var(--accent-a3)',
                    color: 'var(--accent-a11)',
                    padding: 'var(--space-4) var(--space-3)',
                    borderRadius: 'var(--radius-2)',
                  }}
                >
                  {folderStructure}
                </pre>
              </Flex>
            </Tabs.Content>

            <Tabs.Content value="config">
              <Flex gap="3" direction="column">
                <Text size="2">
                  The <Code>config.json</Code> file contains information about
                  the template like its name. An optional layout & JSON schema
                  can be specified.
                </Text>

                <pre
                  style={{
                    margin: 0,
                    fontSize: 'var(--font-size-1)',
                    backgroundColor: 'var(--accent-a3)',
                    color: 'var(--accent-a11)',
                    padding: 'var(--space-4) var(--space-3)',
                    borderRadius: 'var(--radius-2)',
                  }}
                >
                  {configFile}
                </pre>
              </Flex>
            </Tabs.Content>

            <Tabs.Content value="layout">
              <Flex gap="3" direction="column">
                <Text size="2">
                  A layout template allows you to reuse the same structure
                  across multiple templates. Make sure to use{' '}
                  <Code>"type": "layout"</Code> in<Code>config.json</Code> &
                  specify <Code>{'{{{ content }}}'}</Code> in the template's
                  MJML file to render the content.
                </Text>

                <pre
                  style={{
                    margin: 0,
                    fontSize: 'var(--font-size-1)',
                    backgroundColor: 'var(--accent-a3)',
                    color: 'var(--accent-a11)',
                    padding: 'var(--space-4) var(--space-3)',
                    borderRadius: 'var(--radius-2)',
                  }}
                >
                  {layoutConfigFile}
                </pre>

                <pre
                  style={{
                    margin: 0,
                    fontSize: 'var(--font-size-1)',
                    backgroundColor: 'var(--accent-a3)',
                    color: 'var(--accent-a11)',
                    padding: 'var(--space-4) var(--space-3)',
                    borderRadius: 'var(--radius-2)',
                  }}
                >
                  {layoutTemplateFile}
                </pre>
              </Flex>
            </Tabs.Content>

            <Tabs.Content value="content">
              <Flex gap="3" direction="column">
                <Text size="2">
                  Content is stored using key/value pairs in{' '}
                  <Code>content.json</Code> files. To use a content key in your
                  template, use the <Code>{'{{{ callToAction }}}'}</Code>{' '}
                  syntax.
                </Text>

                <pre
                  style={{
                    margin: 0,
                    fontSize: 'var(--font-size-1)',
                    backgroundColor: 'var(--accent-a3)',
                    color: 'var(--accent-a11)',
                    padding: 'var(--space-4) var(--space-3)',
                    borderRadius: 'var(--radius-2)',
                  }}
                >
                  {contentFilesExample}
                </pre>

                <pre
                  style={{
                    margin: 0,
                    fontSize: 'var(--font-size-1)',
                    backgroundColor: 'var(--accent-a3)',
                    color: 'var(--accent-a11)',
                    padding: 'var(--space-4) var(--space-3)',
                    borderRadius: 'var(--radius-2)',
                  }}
                >
                  {contentExample}
                </pre>
              </Flex>
            </Tabs.Content>

            <Tabs.Content value="schema">
              <Flex gap="3" direction="column">
                <Text size="2">
                  For each template, you can specify a JSON schema in{' '}
                  <Code>config.json</Code> to render dynamic variables. It uses
                  the{' '}
                  <Link
                    href="https://mustache.github.io/mustache.5.html"
                    target="_blank"
                  >
                    Mustache syntax
                  </Link>{' '}
                  with two curly braces {'('}
                  <Code>{'{{ link }}'}</Code>
                  {')'} as opposed to content which uses three.
                </Text>

                <pre
                  style={{
                    margin: 0,
                    fontSize: 'var(--font-size-1)',
                    backgroundColor: 'var(--accent-a3)',
                    color: 'var(--accent-a11)',
                    padding: 'var(--space-4) var(--space-3)',
                    borderRadius: 'var(--radius-2)',
                  }}
                >
                  {schemaExample}
                </pre>
              </Flex>
            </Tabs.Content>

            <Tabs.Content value="compile">
              <Flex gap="3" direction="column">
                <Text size="2">
                  Using the <Code>recontent compile</Code> command, templates &
                  layouts are compiled into a Typescript email renderer object.
                  It can be used in your application to render emails.
                </Text>

                <pre
                  style={{
                    margin: 0,
                    fontSize: 'var(--font-size-1)',
                    backgroundColor: 'var(--accent-a3)',
                    color: 'var(--accent-a11)',
                    padding: 'var(--space-4) var(--space-3)',
                    borderRadius: 'var(--radius-2)',
                  }}
                >
                  {emailRendererExample}
                </pre>
              </Flex>
            </Tabs.Content>
          </Box>
        </Tabs.Root>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Close
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  )
}
