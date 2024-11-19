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

function isBalancedParentheses(string) {
    const stack = new Stack();
    for (const c of string) {
        if (c === "(") {
            stack.push(c);
        }

        // If current character is not opening
        // bracket, then it must be closing. So stack
        // cannot be empty at this point.
         else if (c === ')') {
            if (stack.isEmpty() || stack.pop() !== '(') {
                return false;
            }
         }
    }
    // Check Empty Stack
    return (stack.isEmpty());
};

function parenthesesChecker(string) {
    const stack = new Stack();
    for (const c of string) {
        if (c === "[" || c === "(" || c === "{") {
            stack.push(c);
        }

        // If current character is not opening
        // bracket, then it must be closing. So stack
        // cannot be empty at this point.
        if (!stack.isEmpty()) {
            let check;
            switch (c) {
                case "]":
                    check = stack.pop();
                    if (check === "{" || check === "(") {
                        return false;
                    }
                    break;

                case ")":
                    check = stack.pop();
                    if (check === "{" || check === "[") {
                        return false;                       
                    }
                    break;

                case "}":
                    check = stack.pop();
                    if (check === "(" || check === "[") {
                        return false;                       
                    }
                    break;
            };
        }
    }
    // Check Empty Stack
    return (stack.isEmpty());
};
const parans = "[({()})]";
const input = "((()))";
console.log(isBalancedParentheses(input));
console.log(parenthesesChecker(parans));
