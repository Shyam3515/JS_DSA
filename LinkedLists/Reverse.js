/**
 * The reverse method should perform the following tasks:
   Swap the head and tail pointers.
   Iterate through the list, and for each node, set its next pointer to its previous node.
   To correctly iterate through the list, you should keep a reference to the next node before changing the next pointer.
   After you have iterated through all the nodes and reversed their next pointers, your reverse method is done.
 */
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
};

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = this.head;
        this.length = 0;
    };

    push(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    };

    reverse(){
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        let next;
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;   
        }
        return this;
    }
};
const myLinkedList = new LinkedList();
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.push(6);
// myLinkedList.push(7);
// myLinkedList.push(8);
// myLinkedList.push(9);
// myLinkedList.reverse();
