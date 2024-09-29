import { useEffect } from 'react'

function debounce<T extends () => void>(
  func: T,
  timeout: number = 300,
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>

  return () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func()
    }, timeout)
  }
}

export const useWindowResize = (callback: () => void) => {
  useEffect(() => {
    const debouncedCallback = debounce(callback, 100)

    window.addEventListener('resize', debouncedCallback)

    return () => {
      window.removeEventListener('resize', debouncedCallback)
    }
  }, [callback])
}
