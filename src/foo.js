// @flow

import { CONFIG } from './config'
// $FlowExpectedError
import { A } from './sub/a'
import { B } from './sub/b'

export class Foo {
  #bar = 1

  baz: string = 'baz'

  init: ({| a: number, b: number |}) => number = (props) => {
    if (CONFIG.HOGE > A.B) {
      return this.#bar
    }
    if (CONFIG.HOGE > B.C) {
      return this.#bar + props.a
    }
    return this.#bar + props.a + props.b
  }
}
