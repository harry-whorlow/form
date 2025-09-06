import { useEffect, useRef } from 'react'
import { FormDevtoolsCore } from '@tanstack/form-devtools'

export function FormDevtools(): React.ReactElement | null {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const devtools = new FormDevtoolsCore()
    devtools.mount(ref.current)

    return () => {
      devtools.unmount()
    }
  }, [])

  return <div style={{ height: '100%' }} ref={ref}></div>
}
