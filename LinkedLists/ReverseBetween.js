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

    reverseBetween(start,end){
        if(this.head == null || start == end) return;

        //Create a dummy node and set its next pointer to the head of the linked list. This dummy node simplifies the manipulation of pointers, especially at the beginning of the list.
        let dummy = new Node(0);
        dummy.next = this.head;
        let prev = dummy;

        //using -1 because as prev starts from head and as it moves to next each time
        for (let i = 0; i < start; i++) { 
            prev = prev.next;
        }

        let current = prev.next;
        for (let i = 0; i < end-start; i++) {
            let temp = current.next;
            current.next = temp.next;
            temp.next = prev.next;
            prev.next = temp; 
        };

        this.head = dummy.next;// as dummy.next pints to head;
    }

}
const myLinkedList = new LinkedList();
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.push(6);
myLinkedList.reverseBetween(0,5);
console.log(myLinkedList)