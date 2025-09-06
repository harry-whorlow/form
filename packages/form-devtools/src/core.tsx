import { render } from 'solid-js/web'
import { Devtools } from './components'

export interface FormDevtoolsInit {}

class FormDevtoolsCore {
  #isMounted = false
  #dispose?: () => void

  constructor() {}

  mount<T extends HTMLElement>(el: T) {
    if (this.#isMounted) {
      throw new Error('Devtools is already mounted')
    }
    const dispose = render(() => {
      return <Devtools />
    }, el)
    this.#isMounted = true
    this.#dispose = dispose
  }

  unmount() {
    if (!this.#isMounted) {
      throw new Error('Devtools is not mounted')
    }
    this.#dispose?.()
    this.#isMounted = false
  }
}

export { FormDevtoolsCore }
