// @flow
import { CONFIG } from './config'

export class Foo {
  #bar = 1

  baz: string = 'baz'

  init: ({| a: number, b: number |}) => number = (props) => {
    if (CONFIG.HOGE === 100) {
      return this.#bar
    }
    return this.#bar + props.a + props.b
  }
}
