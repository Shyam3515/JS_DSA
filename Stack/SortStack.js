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

function stackToString(stack) {
    return JSON.stringify(stack.getStackList());
}


function sortStack(stack) {
    const additionalStack = new Stack();
 
    while (!stack.isEmpty()) {
        const temp = stack.pop();
        
        //loop continues until stack is empty and additional peek is less than temp
        while (!additionalStack.isEmpty() && additionalStack.peek() > temp) {
            stack.push(additionalStack.pop());
        }
 
        additionalStack.push(temp);
    }
 
    while (!additionalStack.isEmpty()) {
        stack.push(additionalStack.pop());
    }
}

const stack = new Stack();
stack.push(9);
stack.push(4);
stack.push(7);
stack.push(2);
console.log(stack);
const expected2 = JSON.stringify([9, 7, 4, 2]);
sortStack(stack);
const result2 = stackToString(stack);
console.log(`Test case 2 | Expected: ${expected2} | Result: ${result2}`);