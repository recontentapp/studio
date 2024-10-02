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
│       ├── template.mjml
│       └── content.json
└── welcome
    ├── config.json
    ├── template.mjml
    ├── content.en.json
    └── content.fr.json`

const configFile = `{
  "name": "Welcome email",
  "layout": "../layouts/default/template.mjml",
  "schema": {
    "type": "object",
    "properties": {
      "name": {
        "type": "string",
        "example": "John Doe"
      }
    },
    "additionalProperties": false,
    "required": ["name"]
  }
}`

const contentExample = `<mj-text>{{{ name }}}</mj-text>`

const schemaTypescriptExample = `interface WelcomeEmail {
  name: string
  features: {
    name: string
  }[]
}`

const schemaExample = `<mj-section>
  <mj-column>
    <mj-text>{{ name }}</mj-text>

    {{ #features }}
      <mj-text>{{ name }}</mj-text>
    {{ /features }}
  </mj-column>
</mj-section>`

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
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <Tabs.Root defaultValue="folder_structure" style={{ flexGrow: 1 }}>
          <Tabs.List>
            <Tabs.Trigger value="folder_structure">
              Folder structure
            </Tabs.Trigger>
            <Tabs.Trigger value="config">Config file</Tabs.Trigger>
            <Tabs.Trigger value="content">Content</Tabs.Trigger>
            <Tabs.Trigger value="schema">Variables</Tabs.Trigger>
            <Tabs.Trigger value="compile">Compile</Tabs.Trigger>
          </Tabs.List>

          <Box pt="3">
            <Tabs.Content value="folder_structure">
              <Flex gap="3" direction="column">
                <Text size="2">
                  Templates & layouts are organized in folders. Content can be
                  localized.
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
                  Config files contain the template's metadata like the layout
                  to use or a JSON schema for data that can be passed to the
                  template.
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

            <Tabs.Content value="content">
              <Flex gap="3" direction="column">
                <Text size="2">
                  Content is stored in JSON files & can be used using the{' '}
                  <Code>{'{{{ name }}}'}</Code> syntax.
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
                  {contentExample}
                </pre>
              </Flex>
            </Tabs.Content>

            <Tabs.Content value="schema">
              <Flex gap="3" direction="column">
                <Text size="2">
                  The schema allows passing variables to the template. It uses{' '}
                  <Link
                    href="https://mustache.github.io/mustache.5.html"
                    target="_blank"
                  >
                    Mustache
                  </Link>{' '}
                  with the following <Code>{'{{ name }}'}</Code> syntax.
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
                  {schemaTypescriptExample}
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
                  {schemaExample}
                </pre>
              </Flex>
            </Tabs.Content>

            <Tabs.Content value="compile">
              <Text size="2">TO DO</Text>
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
