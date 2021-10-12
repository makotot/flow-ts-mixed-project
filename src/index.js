import { Foo } from './foo'
import { Hoge } from './hoge'

const foo = new Foo()

console.log(foo.init(), foo.baz)

const hoge = new Hoge()

console.log(hoge.init(), hoge.baz)
