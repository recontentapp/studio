import { Resizable } from 're-resizable'
import { ReactEventHandler, useCallback, useEffect, useRef } from 'react'

export interface Size {
  width: number
  height: number
}

interface Props {
  srcDoc: string
  size: Size
  onSizeChange: (size: Size) => void
}

const usePersistentScrollPosition = () => {
  const scrollY = useRef(0)

  const reset = useCallback(() => (scrollY.current = 0), [])

  const onLoad: ReactEventHandler<HTMLIFrameElement> = useCallback(e => {
    const t = e.target as HTMLIFrameElement

    if (scrollY.current > 0) {
      t.contentWindow?.scrollTo(0, scrollY.current)
    }

    t.contentWindow?.addEventListener('resize', () => {
      scrollY.current = t.contentWindow?.scrollY ?? 0
    })

    t.contentDocument?.addEventListener('scroll', () => {
      scrollY.current = t.contentWindow?.scrollY ?? 0
    })
  }, [])

  return {
    onLoad,
    reset,
  }
}

const Handle = () => (
  <div
    style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: 4,
      height: 64,
      borderRadius: 'var(--radius-2)',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'var(--gray-7)',
    }}
  />
)

export const ResizableIframe = ({ size, srcDoc, onSizeChange }: Props) => {
  const { onLoad, reset } = usePersistentScrollPosition()

  useEffect(() => {
    reset()
  }, [size, reset])

  return (
    <div
      style={{
        width: '100%',
        padding: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Resizable
        size={{ width: size.width, height: size.height }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        resizeRatio={[2, 1]}
        handleStyles={{
          topLeft: { display: 'none' },
          topRight: { display: 'none' },
          bottomLeft: { display: 'none' },
          bottomRight: { display: 'none' },
          left: { width: 24, left: -24 },
          right: { width: 24, right: -24 },
        }}
        handleComponent={{
          left: <Handle />,
          right: <Handle />,
        }}
        bounds="parent"
        onResizeStop={(_e, _direction, _ref, d) => {
          onSizeChange({
            width: size.width + d.width,
            height: size.height + d.height,
          })
        }}
      >
        <iframe
          srcDoc={srcDoc}
          style={{
            border: 'none',
            width: size.width,
            height: size.height,
            borderRadius: 'var(--radius-1)',
          }}
          onLoad={onLoad}
        />
      </Resizable>
    </div>
  )
}
