import { Box, Flex, SegmentedControl, Select, Text } from '@radix-ui/themes'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { TemplateSnapshot } from '../../../cli/src/studio/types'
import { useWindowResize } from '../hooks/useWindowResize'
import { ResizableIframe, Size } from './ResizableIframe'

interface Props {
  template: TemplateSnapshot
}

type SizeOption = 'custom' | 'mobile' | 'desktop'

const mobileSize = { width: 400 }
const desktopSize = { width: 800 }

const TOOLBAR_HEIGHT = 48

export const Editor = ({ template }: Props) => {
  const [size, setSize] = useState<Size>({
    width: mobileSize.width,
    height: window.innerHeight - TOOLBAR_HEIGHT - 60,
  })
  const [previewIndex, setPreviewIndex] = useState(0)

  const onWindowResize = useCallback(() => {
    setSize(size => ({
      ...size,
      height: window.innerHeight - TOOLBAR_HEIGHT - 60,
    }))
  }, [])

  useWindowResize(onWindowResize)

  const currentPreview =
    previewIndex >= template.previews.length
      ? template.previews[0]
      : template.previews[previewIndex]

  if (previewIndex >= template.previews.length) {
    setPreviewIndex(0)
  }

  useEffect(() => {
    setPreviewIndex(0)
  }, [template])

  const onPreviewChange = (value: string) => {
    const index = template.previews.findIndex(preview => preview.id === value)

    if (index !== -1) {
      setPreviewIndex(index)
    }
  }

  const currentSizeOption = useMemo(() => {
    if (size.width === mobileSize.width) {
      return 'mobile'
    }

    if (size.width === desktopSize.width) {
      return 'desktop'
    }

    return 'custom'
  }, [size])

  const onSizeOptionChange = (value: SizeOption) => {
    switch (value) {
      case 'mobile': {
        setSize(size => ({ ...size, ...mobileSize }))
        break
      }

      case 'desktop': {
        setSize(size => ({ ...size, ...desktopSize }))
        break
      }

      case 'custom': {
        setSize(size => {
          const randomMultiplier = Math.random() < 0.5 ? -1 : 1

          return {
            ...size,
            width: size.width + 100 * randomMultiplier,
          }
        })
        break
      }
    }
  }

  return (
    <Flex direction="column" width="100%" height="100vh" overflowY="auto">
      <Box
        width="100%"
        position="sticky"
        top="0"
        style={{
          height: TOOLBAR_HEIGHT,
          backgroundColor: 'var(--color-background)',
          borderBottom: '1px solid var(--gray-3)',
          zIndex: 5,
        }}
      >
        <Flex
          width="100%"
          py="3"
          px="4"
          justify="between"
          align="center"
          gap="3"
          direction="row"
        >
          <Text size="2" weight="medium">
            {template.title ?? template.path}
          </Text>

          <Flex gap="5" align="center">
            <Flex gap="2" align="center">
              <Text size="1" style={{ color: 'var(--gray-11)' }}>
                Preview
              </Text>

              <Select.Root
                size="1"
                onValueChange={onPreviewChange}
                value={currentPreview.id}
              >
                <Select.Trigger />
                <Select.Content>
                  <Select.Group>
                    {template.previews.map(preview => (
                      <Select.Item key={preview.id} value={preview.id}>
                        {preview.id}
                      </Select.Item>
                    ))}
                  </Select.Group>
                </Select.Content>
              </Select.Root>
            </Flex>

            <Flex gap="2" align="center">
              <Text
                size="1"
                style={{
                  minWidth: 64,
                  textAlign: 'right',
                  color: 'var(--gray-11)',
                }}
              >
                {size.width}x{size.height}
              </Text>
              <SegmentedControl.Root
                size="1"
                onValueChange={onSizeOptionChange}
                value={currentSizeOption}
              >
                <SegmentedControl.Item value="custom">
                  Custom
                </SegmentedControl.Item>
                <SegmentedControl.Item value="mobile">
                  Mobile
                </SegmentedControl.Item>
                <SegmentedControl.Item value="desktop">
                  Desktop
                </SegmentedControl.Item>
              </SegmentedControl.Root>
            </Flex>
          </Flex>
        </Flex>
      </Box>

      <ResizableIframe
        size={size}
        onSizeChange={setSize}
        srcDoc={currentPreview.html ?? ''}
      />
    </Flex>
  )
}
