import { Flex, Spinner } from '@radix-ui/themes'
import { useEffect, useMemo, useState } from 'react'
import { Container } from './components/Container'
import { Editor } from './components/Editor'
import { Placeholder } from './components/Placeholder'
import { Sidebar } from './components/Sidebar'
import { useStore } from './hooks/useStore'

export const App = () => {
  const { workspacePath, templates, initialized } = useStore()
  const [currentTemplatePath, setCurrentTemplatePath] = useState<string | null>(
    null,
  )

  useEffect(() => {
    if (templates.length > 0) {
      setCurrentTemplatePath(null)
    }
  }, [templates.length])

  const currentTemplate = useMemo(() => {
    if (currentTemplatePath === null) {
      return null
    }

    return templates.find(t => t.path === currentTemplatePath) ?? null
  }, [templates, currentTemplatePath])

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
      <Sidebar
        data={templates}
        onChange={setCurrentTemplatePath}
        currentTemplatePath={currentTemplate?.path}
      />

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
