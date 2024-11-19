//Implementing Stack using LL...
/*
=> Stack works on principle called LastInFirstOut(LIFO).
=> In stack we will have only top, here push means unshift in LL(means pushing to top);
=> As pushing we pop from top only(shift in LL).

 * In LL Shift and Unshift is O(1);[These are our stack operations]
 * In LL Push is O(1) and POP is O(n);
*/
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(value){
        const newNode = new Node(value);
        this.top = newNode;
        this.length = 1;
    }

    push(value){
        const newNode = new Node(value);
        if(this.length === 0){
            this.top = newNode; 
        }
        else{
            newNode.next  = this.top;
            this.top = newNode;
        }
        this.length++;
        return this;
    };

    pop(){
        if(this.length === 0) return undefined;

        let temp = this.top;
        this.top = temp.next;
        temp.next = null;

        this.length--;
        return temp;
    }
};


const myStack = new Stack(11);
myStack.push(12);
myStack.push(13);
myStack.push(14);
myStack.push(15);
console.log(myStack);
console.log(myStack.pop()); 
console.log(myStack.pop()); 
console.log(myStack);