import { CONFIG } from './config'
import { A } from './sub/a'
import { B } from './sub/b'

export class Hoge {
  #bar = 1

  baz: string = 'baz'

  init = (props: { a: number; b: number }): number => {
    if (CONFIG.HOGE > A.B) {
      return this.#bar
    }
    if (CONFIG.HOGE > B.C) {
      return this.#bar + props.a
    }
    return this.#bar + props.a + props.b
  }
}
