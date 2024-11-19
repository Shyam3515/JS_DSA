/**
 * Method2 :
 * Pseudo Code:
    1. Initialize slow pointer to the head of the list
    2. Initialize fast pointer to the head of the list
    3. Loop from 0 to k-1
    a. If fast pointer is null, return null (k is larger than the list length)
    b. Move fast pointer one step ahead in the list
    4. Loop while fast pointer is not null
    a. Move slow pointer one step ahead in the list
    b. Move fast pointer one step ahead in the list
    5. Return slow pointer (kth node from the end found)

 * Expected Time Complexity: O(N).
   Expected Auxiliary Space: O(1). 
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
    }

    nthNodeFromEnd(n){
        if(n < 0 || n >= this.length) return null;
        let temp = this.head;
        //subtract n from length and iterate you will get required node.
        for (let i = 0; i < this.length - n; i++) {
            temp = temp.next;
        };
        return temp;
    }

    method2(n){
        let fast = this.head;
        let slow = this.head;
        for (let i = 0; i < n-1; i++) {
            if (fast === null) {
                return null;
            }
            fast = fast.next;
        }

        while(fast.next !== null){
            fast = fast.next;
            slow = slow.next;
        };
        return slow;
    }
};
const myLinkedList = new LinkedList();
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.push(6);

let n = 5;
console.log(myLinkedList.nthNodeFromEnd(n));
console.log(myLinkedList.method2(n));