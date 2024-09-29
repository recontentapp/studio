import { Flex, RadioCards, Spinner, Text } from '@radix-ui/themes'
import { useEffect, useMemo, useState } from 'react'
import { Container } from './components/Container'
import { Editor } from './components/Editor'
import { Placeholder } from './components/Placeholder'
import { Sidebar } from './components/Sidebar'
import { useStore } from './hooks/useStore'

export const App = () => {
  const { workspacePath, templates, initialized } = useStore()
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)

  useEffect(() => {
    if (templates.length > 0) {
      setCurrentIndex(null)
    }
  }, [templates.length])

  const currentTemplate = useMemo(() => {
    if (currentIndex === null) {
      return null
    }

    return templates[currentIndex]
  }, [templates, currentIndex])

  if (!initialized) {
    return (
      <Flex width="100%" height="100vh" align="center" justify="center">
        <Spinner />
      </Flex>
    )
  }

  if (templates.length === 0) {
    return <Placeholder hasTemplates={false} workspacePath={workspacePath} />
  }

  return (
    <Container>
      <Sidebar>
        <Flex direction="column" gap="3">
          {templates.map((template, index) => (
            <RadioCards.Root
              value={currentTemplate?.path ?? ''}
              size="1"
              key={template.path}
              variant="surface"
              onValueChange={() => setCurrentIndex(index)}
            >
              <RadioCards.Item value={template.path}>
                <Flex width="100%" direction="column">
                  <Text
                    weight="medium"
                    size="2"
                    style={{
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {template.title ?? 'Untitled'}
                  </Text>
                  <Text
                    size="1"
                    style={{
                      color: 'var(--gray-10)',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {template.path}
                  </Text>
                </Flex>
              </RadioCards.Item>
            </RadioCards.Root>
          ))}
        </Flex>
      </Sidebar>

      <Flex flexGrow="1" height="100%">
        {currentTemplate ? (
          <Editor template={currentTemplate} />
        ) : (
          <Placeholder hasTemplates={true} workspacePath={workspacePath} />
        )}
      </Flex>
    </Container>
  )
}
