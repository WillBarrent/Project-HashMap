import { HashMap } from "./hashMap.js";

let test = new HashMap();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.set('moon', 'silver')

console.log(test.get('apple'));
console.log(test.get('banana'));
console.log(test.get('carrot'));
console.log(test.get('dog'));
console.log(test.get('elephant'));
console.log(test.get('frog'));
console.log(test.get('grape'));
console.log(test.get('hat'));
console.log(test.get('ice cream'));
console.log(test.get('jacket'));
console.log(test.get('kite'));
console.log(test.get('lion'));
console.log(test.get('moon'));
