import { beforeEach, describe, expect, it, vi } from 'vitest'
import { screen } from '@solidjs/testing-library'
import { TanstackFormDevtoolsPanel } from '../src/TanstackFormDevtoolsPanel'

// Mock the Devtools component to avoid pulling in its real dependencies
vi.mock('./components', () => ({
  Devtools: () => <div data-testid="devtools">Devtools</div>,
}))

describe('TanstackFormDevtoolsPanel', () => {
  let panel: TanstackFormDevtoolsPanel
  let container: HTMLDivElement

  beforeEach(() => {
    panel = new TanstackFormDevtoolsPanel()
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  it('mounts Devtools into the container', () => {
    panel.mount(container)
    expect(screen.getByTestId('devtools')).toBeInTheDocument()
  })

  it('throws if mounted twice', () => {
    panel.mount(container)
    expect(() => panel.mount(container)).toThrowError(/already mounted/)
  })

  it('unmounts successfully', () => {
    panel.mount(container)
    panel.unmount()
    expect(screen.queryByTestId('devtools')).toBeNull()
  })

  it('throws if unmounted before mount', () => {
    expect(() => panel.unmount()).toThrowError(/not mounted/)
  })
})
