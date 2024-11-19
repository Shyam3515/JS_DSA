//Implementing Queue using LL...

/**
 * Queue works on the basic principle of FirstInFirstOut[FIFO].
 * 
 * In LL Shift and Unshift is O(1);
 * In LL Push is O(1) and POP is O(n);
 * 
 * So, here for Queue we are going to use Push[Enqueue] from LL and Shift[Dequeue] from LL as
 *  their Orders of pushing and shifting are 1;
 */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(value) {
        const newNode = new Node(value);
        this.first = newNode;
        this.last = newNode;
        this.length = 1;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {//if first and last == null
            this.first = newNode;
            this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    dequeue(){
        if(this.length === 0) return undefined;
        let temp = this.first;
        if(this.length === 1){
            this.first = null;
            this.last = null;
        }
        else{
            this.first = temp.next;
            temp.next = null;
        }

        this.length--;
        return temp;
    }
};
const myQueue = new Queue(11);
myQueue.enqueue(12); 
myQueue.enqueue(13);
myQueue.enqueue(14);
console.log(myQueue);
console.log(myQueue.dequeue());
console.log(myQueue);
