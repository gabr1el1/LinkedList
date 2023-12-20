class LinkedList {
  constructor() {
    /*
    in the beginning both
    tail and head are the 
    same
    */
    this.head = null;
    this.tail = null;
    this.size = 0;
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
    this.size + 1;
    let newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
      this.tail = currentNode.next;
    }
  }

  prepend(value) {
    /*
    First increment the size of the list then 

    if the head is null just 
    assign it the new Node

    otherwise store the oldHead (this.head)
    update this.head with the newHead
    and then this.head.next will be oldHead
    */

    this.size + 1;
    let newHead = new Node(value);

    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let oldHead = this.head;
      this.head = newHead;
      this.head.next = oldHead;
    }
  }

  size() {
    return this.size;
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
list1.size();
