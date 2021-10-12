// @flow
import { Foo } from './foo'
// $FlowExpectedError
import { Hoge } from './hoge'

const foo = new Foo()

console.log(foo.init({ a: 1, b: 2 }), foo.baz)

const hoge = new Hoge()

console.log(hoge.init({ a: 3, b: 4 }), hoge.baz)
