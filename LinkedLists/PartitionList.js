/**video : https://www.youtube.com/watch?v=b4FeEwAGDtU */
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

    partitionNode(value){
        //created a node with small and high
        let small = new Node(0);
        let high = new Node(0);
        //just assigning variables to them as heads
        let smallHead = small, highHead = high;
        let current = this.head;
    
        while (current !== null){
            if(current.value < value){
                //connecting smallHead next to head
                smallHead.next = current;
                console.log(smallHead.next);
                //moving smallHead to next to it.
                smallHead = smallHead.next;
            }
            else{
                highHead.next = current;
                highHead =  highHead.next;
            }
            current = current.next;
        }
        //making the list to point to null
        highHead.next = null;
        //connecting small list to high after separating
        smallHead.next = high.next;

        return small.next;
    };
}
const myLinkedList = new LinkedList();
myLinkedList.push(1);
myLinkedList.push(4);
myLinkedList.push(3);
myLinkedList.push(2);
myLinkedList.push(2);
myLinkedList.push(6);
console.log(myLinkedList.partitionNode(3));