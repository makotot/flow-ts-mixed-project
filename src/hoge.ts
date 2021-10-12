import { CONFIG } from './config'

export class Hoge {
  #bar = 1

  baz: string = 'baz'

  init = (props: { a: number; b: number }): number => {
    if (CONFIG.HOGE === 100) {
      return this.#bar
    }
    return this.#bar + props.a + props.b
  }
}
