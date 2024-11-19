/**
Output:
    Return the middle node of the linked list.
    If the list has an even number of nodes, return the second middle node (the one closer to the end).
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

    middle(){
        let temp = this.head;
        let prev = this.head;
        while(temp && temp.next){
            prev = prev.next;
            temp = temp.next.next;
        }
        return prev; 
    };

};
const myLinkedList = new LinkedList();
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.push(6);
console.log(myLinkedList.middle());
