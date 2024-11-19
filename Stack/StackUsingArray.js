/**
 * The push() method of the Stack class adds a new element to the top of the stack.
 * Here's a step-by-step explanation of the logic:
     Receive a value to be added to the stack as an argument.
     Use the built-in push() method of the JavaScript array to add the value to the end of the stackList array.

 * By adding elements to the end of the stackList array, the method maintains the   Last-In-First-Out (LIFO) order of the stack, allowing the most recently added element to be accessed or removed first.
 */

//Here we are just adding at end and removing from end the method maintains the Last-In-First-Out (LIFO) order of the stack.

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

    push(value){
        this.stackList.push(value);
    }

    pop(){
        if(this.stackList.length === 0){
            return null;
        }
        else{
            return this.stackList.pop()
        }
    }
    
};
const StackArr = new Stack();
StackArr.push(11);
StackArr.push(12);
StackArr.push(13);
StackArr.pop();
console.log(StackArr);
