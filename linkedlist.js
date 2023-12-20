class LinkedList {
  constructor() {
    /*
    in the beginning both
    tail and head are the 
    same
    */
    this._head = null;
    this._tail = null;
    this._size = 0;
  }
  append(value) {
    /*
    First increment the size of the list then 

    it the head is null just create a new Node 
    and assign it to head the tail will be the same

    otherwise start to traverse the list 
    by the head, as long as the next node 
    is not null keep advancing

    once we reach the end of the list 
    we assign the new Node to this last one
    and update the tail

    */
    this._size += 1;
    let newNode = new Node(value);
    if (this._head == null) {
      this._head = newNode;
      this._tail = newNode;
    } else {
      let currentNode = this._head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
      this._tail = currentNode.next;
    }
  }

  prepend(value) {
    /*
    First increment the size of the list then 

    if the head is null just 
    assign it the new Node

    otherwise store the oldHead (this._head)
    update this._head with the newHead
    and then this._head.next will be oldHead
    */

    this._size += 1;
    let newHead = new Node(value);

    if (this._head == null) {
      this._head = newNode;
      this._tail = newNode;
    } else {
      let oldHead = this._head;
      this._head = newHead;
      this._head.next = oldHead;
    }
  }

  get size() {
    return this._size;
  }
  get head() {
    return this._head;
  }
  get tail() {
    return this._tail;
  }

  at(index) {
    if (index > this._size) {
      return undefined;
    } else {
      let current = this._head;
      for (let i = 0; index < array.length + 1; index++) {
        if (i == index) {
          return current;
        }
        current = current.next;
      }
    }
  }
}

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

//let node1 = new Node();
//console.log(node1.value);

let list1 = new LinkedList();
list1.append(7);
list1.append(14);
list1.prepend(77);
console.log(`The size of the list is ${list1.size}`);
console.log(`The head of the list is ${list1.head.value}`);
console.log(`The tail of the list is ${list1.tail.value}`);
console.log(`The node at index 2 is ${list1.at(2)}`);
