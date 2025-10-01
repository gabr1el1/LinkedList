import LinkedList from "./linkedlist.js"

const list = new LinkedList()
list.append(10)
list.prepend(15)
list.append(30)
list.insertAt(1000,2)
list.insertAt(5000,1)
list.insertAt(4000,0)
list.removeAt(3)
list.removeAt(0)
list.insertAt(7000,3)
list.insertAt(9000,2)

console.log(list.toString());
console.log(list.find(9000));
console.log(list.find(131313));
console.log(list.contains(121212));
console.log(list.at(list.find(9000)));

list.pop()
console.log(list.toString());
console.log(list.head());
console.log(list.tail());








