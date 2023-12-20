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

      /*
      Things to notice: 
      In JavaScript, When you assign an object to a variable 
      or pass it as an argument to a function, you're working 
      with a reference to the object. 

      This means that when you assign an object to a variable, 
      you're not copying the entire object; instead, 
      you're creating a reference to the same object in memory. 

      For example here, let's say head is already assigned
      an object of type Node(). When currentNode = this._head
      when we do currentNode.next we are affecting the original 
      property next of this._head.
      */
    }
    this._size += 1;
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

    let newHead = new Node(value);

    if (this._head == null) {
      this._head = newNode;
      this._tail = newNode;
    } else {
      let oldHead = this._head;
      this._head = newHead;
      this._head.next = oldHead;
    }

    this._size += 1;
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
    /*
    When index is less than 0 or more than 
    maximum index we return undefined 
    else we do a for loop to traverse the list
    with next until its index(i) is equal to 
    index(parameter) then we return the node

    */
    let current = this._head;
    for (let i = 0; i < index + 1; i++) {
      if (i == index) {
        return current;
      }
      current = current.next;
    }
  }

  pop() {
    if (this._head !== null) {
      this._size -= 1;
      if (this._size == 1) {
        this._head = null;
      } else {
        let current = this._head,
          beforeCurrent;
        while (current.next !== null) {
          beforeCurrent = current;
          current = current.next;
        }
        beforeCurrent.next = null;
        this._tail = beforeCurrent;
      }
    }
  }

  contains(value) {
    if (this._head !== null) {
      let current = this._head;
      for (let i = 0; i < this._size; i++) {
        if (current.value == value) {
          return true;
        }
        if (current.next == null) {
          return false;
        }
        current = current.next;
      }
    }
    return false;
  }

  find(value) {
    if (this._head !== null) {
      let current = this._head;
      for (let i = 0; i < this._size; i++) {
        if (current.value == value) {
          return i;
        }
        if (current.next == null) {
          return null;
        }
        current = current.next;
      }
    }
    return null;
  }

  toString() {
    if (this._head !== null) {
      let current = this._head;
      let listString = "";
      for (let i = 0; i < this._size; i++) {
        if (i == this._size - 1) {
          listString += `(${current.value})`;
        } else {
          listString += `(${current.value}) -> `;
        }
        current = current.next;
      }
      return listString;
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
list1.append(21);
list1.append(28);
list1.prepend(77);
console.log(`The size of the list is ${list1.size}`);
console.log(`The head of the list is ${list1.head.value}`);
console.log(`The tail of the list is ${list1.tail.value}`);
console.log(`The node at index 2 is ${list1.at(2).value}`);
console.log(`The list contains 7? ${list1.contains(7)}`);
console.log(`The list contains 99? ${list1.contains(99)}`);
console.log(`The value 28 is at index ${list1.find(28)}`);
console.log(`The list is ${list1.toString()}`);
