//bar
import foo from 'bar';
var Leaf = function () {};
export default Leaf;
export var bar = 1;
var foo = 1;
export function pink() { }
var baz = 1;
export {
  foo,
  baz
}
// foo
import bar from 'foo';
import { red, green, yellow } from 'foo';
