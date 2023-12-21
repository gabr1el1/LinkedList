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
    If head is not null

    this._tail.next will be the new Node
    and now the this._tail is this new node 
    of this._tail.next

    */

    let newNode = new Node(value);
    if (this._head == null) {
      this._head = newNode;
      this._tail = newNode;
    } else {
      this._tail.next = new Node(value);
      this._tail = this._tail.next;

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
    if (index > this._size - 1 || index < 0) {
      return undefined;
    } else {
      let current = this._head;
      for (let i = 0; i < index + 1; i++) {
        if (i == index) {
          return current;
        }
        current = current.next;
      }
    }
  }

  pop() {
    if (this._head !== null) {
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
      this._size -= 1;
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

  insertAt(value, index) {
    if (index < 0) {
      return undefined;
    } else {
      let newNode = new Node(value);
      if (index == 0) {
        if (this._head == null) {
          this._head = newNode;
          this._tail = this._head;
        } else {
          let oldHead = this._head;
          this._head = newNode;
          this._head.next = oldHead;
        }
      } else if (index >= this._size - 1) {
        this._tail.next = newNode;
        this._tail = this._tail.next;
      } else if (index < this._size - 1) {
        let current = this._head.next;
        let beforeCurrent = this._head;

        for (let i = 1; i < index + 1; i++) {
          if (i == index) {
            beforeCurrent.next = newNode;
            beforeCurrent.next.next = current;
          }
          beforeCurrent = current;
          current = current.next;
        }
      }
    }
    this._size += 1;
  }

  removeAt(index) {
    if (this._head !== null) {
      if (index < 0 || index > this._size - 1) {
        return undefined;
      } else {
        if (index == 0) {
          if (this._size == 1) {
            this._head = null;
            this._tail = this._head;
          } else {
            this._head = this._head.next;
          }
        } else {
          let current = this._head.next;
          let beforeCurrent;
          for (let i = 1; i < index + 1; i++) {
            if (i == index && index !== this._size - 1) {
              beforeCurrent.next = current.next;
            } else if (i == index && index == this._size - 1) {
              beforeCurrent.next = current.next;
              this._tail = beforeCurrent;
            }
            beforeCurrent = current;
            current = current.next;
          }
        }
      }
      this._size -= 1;
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
list1.insertAt(44, 3);
list1.insertAt(55, 0);
list1.insertAt(66, 1);
list1.insertAt(88, 1000);
console.log(`The list is ${list1.toString()}`);
list1.removeAt(7);
console.log(`The tail of the list is ${list1._tail.value}`);
console.log(`The list is ${list1.toString()}`);
console.log(`The tail of the list is ${list1._tail.value}`);
list1.removeAt(7);
console.log(`The list is ${list1.toString()}`);
console.log(`The tail of the list is ${list1._tail.value}`);
