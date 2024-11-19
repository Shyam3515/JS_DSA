class Stack {
    constructor() {
        this.stackList = [];
    }

    getStackList() {
        return this.stackList;
    }

    printStack() {
        for (let i = this.stackList.length - 1; i >= 0; i--) {
            console.log(this.stackList[i]);
        }
    }

    isEmpty() {
        return this.stackList.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        } else {
            return this.stackList[this.stackList.length - 1];
        }
    }

    size() {
        return this.stackList.length;
    }

    push(value) {
        this.stackList.push(value);
    }

    pop() {
        if (this.isEmpty()) return null;
        return this.stackList.pop();
    }  
}

class MyQueue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }
    
    peek() {
        return this.stack1.peek();
    }

    isEmpty() {
        return this.stack1.isEmpty();
    }

    enqueue(val){
        this.stack1.push(val);
    }

    dequeue(){
        let popped;
        if(this.stack1.isEmpty()){
            return null;
        }else{
            while(!this.stack1.isEmpty()){
                this.stack2.push(this.stack1.pop());
            }
        
            popped = this.stack2.pop();
            while(!this.stack2.isEmpty()){
                this.stack1.push(this.stack2.pop());
            }
        }
        return popped;
    };
}


const queue = new MyQueue();

queue.enqueue(9);
queue.enqueue(4);
queue.enqueue(7);
queue.enqueue(2);

console.log(queue);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());