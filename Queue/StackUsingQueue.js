class Queue{
    constructor() {
        this.queueList = [];
    }

    isEmpty(){
        return this.queueList.length === 0;
    }

    size() {
        return this.queueList.length;
    }

    enqueue(value){
        this.queueList.push(value)
    }

    dequeue(){
        if(this.queueList.length === 0){
            return null
        }
        else{
            return this.queueList.shift()
        }
    }
};

class Stack{
    constructor(){
        this.queue = new Queue();
    }

    isEmpty(){
        return this.queue.isEmpty();
    }

    //here we are deleting elements from first and adding to the queue again, so the last inserted element would come first which will help us in implementing the stack perfectly;
    push(value){
        if(this.queue.isEmpty()){
            this.queue.enqueue(value);
        }
        else{
            this.queue.enqueue(value);
            for (let i = 0; i < this.queue.size() -1; i++) {
               this.queue.enqueue(this.queue.dequeue())   
            }
        }
    }

    pop(){
        if(this.queue.size === 0){
            return null;
        }
        else{
            return this.queue.dequeue();
        }
    }
};

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());