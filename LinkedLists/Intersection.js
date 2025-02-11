/*
Algorithm :
     1) Calculate length of both LinkedLists as L1 and L2.
     2) Calculate the difference d=l1-l2.
     3) Move d nodes in longer linked list.
     4) Then move by both LinkedLists in one step till p==q(nodes in both LL)
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return newNode; // Return new node for intersection use
  }

  intersection(l1, l2) {
    let h1 = l1.head;
    let h2 = l2.head;

    let length1 = this.findLength(l1);
    let length2 = this.findLength(l2);
    let diff = Math.abs(length1 - length2);

    // Move the pointer of the longer list ahead by `diff` nodes
    if (length1 > length2) {
      for (let i = 0; i < diff; i++) {
        h1 = h1.next;
      }
    } else {
      for (let i = 0; i < diff; i++) {
        h2 = h2.next;
      }
    }

    // Move both pointers together until they meet
    while (h1 !== null && h2 !== null) {
      if (h1 === h2) {
        // Check reference, not value
        console.log("Intersection Point is: " + h1.value);
        return;
      }
      h1 = h1.next;
      h2 = h2.next;
    }

    console.log("There is no intersection point...");
  }

  //Finding the length
  findLength(ll) {
    let temp = ll.head;
    let counter = 0;
    while (temp) {
      temp = temp.next;
      counter++;
    }
    return counter;
  }
}
// Create first linked list
const myLinkedList1 = new LinkedList();
const node1 = myLinkedList1.push(1);
const node2 = myLinkedList1.push(2);
const node3 = myLinkedList1.push(3);
const node4 = myLinkedList1.push(4);
const node5 = myLinkedList1.push(5);

// Create second linked list
const myLinkedList2 = new LinkedList();
const node6 = myLinkedList2.push(7);
const node7 = myLinkedList2.push(8);

// Creating intersection: Link node7's `next` to node3 from myLinkedList1
node7.next = node3;

// Call intersection function
myLinkedList1.intersection(myLinkedList1, myLinkedList2); //Intersection Point is: 3
