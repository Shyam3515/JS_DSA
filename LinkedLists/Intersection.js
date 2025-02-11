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
};

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = this.head;
        this.length = 0;
    };

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    intersection(l1, l2) {
        let h1 = l1.head;
        let h2 = l2.head;

        let length1 = myLinkedList.findLength(l1);
        let length2 = myLinkedList.findLength(l2);
        let diff = length1 > length2 ? length1 - length2 : length2 - length1;

        //Moving diff nodes in longer linked list.
        let flag = 0;
        let counter = 0;
        if (l1 > l2) {
            while (counter < diff) {
                h1 = h1.next;
                counter++;
            }
        }
        else {
            while (counter < diff) {
                h2 = h2.next;
                counter++;
            }
        }
        //checking intersection...
        while (h1 != null && h2 != null) {
            if (h1.value == h2.value) {
                console.log("Intersection Point is: " + h1.value);
                flag = 1;
                break;
            }
            h1 = h1.next;
            h2 = h2.next;
        }
        if (flag == 0) {
            console.log("There is no Intersection point...");
        }
    };
