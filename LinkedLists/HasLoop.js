/**
 * My Approach:
 * 1) Check if length > 0 and tail.next !== null
 * 
 * Pseudo Code:
    1. Initialize slow pointer to the head of the list
    2. Initialize fast pointer to the head of the list
    3. Loop while fast pointer is not null and fast pointer's next node is not null
    a. Move slow pointer one step ahead in the list
    b. Move fast pointer two steps ahead in the list
    c. Check if slow pointer and fast pointer are the same
        i. If yes, return true (loop found)
    4. Return false (loop not found)
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

    hasLoop(){//passed all test cases
        if(this.length > 0  && this.tail.next!==null){
            return true;
        }
        else{
            return false;
        }
    };
    //Another approach according to Leetcode(Udemy);
    hasLoop1() {
        let slow = this.head;
        let fast = this.head;
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow === fast) {
                return true;
            }
        }
        return false;
    }
};
const myLinkedList = new LinkedList();
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
// Create a loop for testing purposes
myLinkedList.tail.next = myLinkedList.head.next; // Create a loop by linking tail to the second node
console.log(myLinkedList.hasLoop());
console.log(myLinkedList.hasLoop1());