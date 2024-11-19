/**
 * Procedure:

    i. Create a new Stack instance

    ii. Loop through each character in the string

            1. Push the character onto the stack

    iii. Initialize an empty string named reversedString

    iv. Loop while the stack is not empty

            1. Pop the top character from the stack and append it to reversedString

    v. Return the reversedString
 */

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

};

//As we are declaring this function outside of the class we are using function KW.
// Here we are using the instance of the stack class inside the function.
function reverseString(string) {
    const stack = new Stack();
    let output = "";
    for (const c of string) {
        stack.push(c);
    }
    while (!stack.isEmpty()) {
        output += stack.pop()
    }

    return output;
};



const input = "Shyam";
console.log(reverseString(input));
