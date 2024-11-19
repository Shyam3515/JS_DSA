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

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
