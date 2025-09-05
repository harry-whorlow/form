import { afterEach, describe, expect, it, vi } from 'vitest'
import { cleanup, render } from '@testing-library/react'
import { FormDevtools } from '../src'

const mountMock = vi.fn()
const unmountMock = vi.fn()

vi.mock('./TanstackFormDevtoolsPanel', () => {
  return {
    TanstackFormDevtoolsPanel: vi.fn().mockImplementation(() => ({
      mount: mountMock,
      unmount: unmountMock,
    })),
  }
})

describe('<FormDevtools />', () => {
  afterEach(() => {
    cleanup()
    mountMock.mockClear()
    unmountMock.mockClear()
  })

  it('mounts the devtools when rendered', () => {
    render(<FormDevtools />)
    expect(mountMock).toHaveBeenCalledTimes(1)

    const firstArg = mountMock.mock.calls[0]?.[0]
    expect(firstArg).toBeInstanceOf(HTMLDivElement)
  })

  it('unmounts the devtools when unmounted', () => {
    const { unmount } = render(<FormDevtools />)
    unmount()
    expect(unmountMock).toHaveBeenCalledTimes(1)
  })
})
