/*
* Algorithm:
  		1) A first node is always the root, inserted with help of class node.
 		2) Second element value will be compared, if greater right side recursive call will be called.
  		3) Otherwise, left side recursive call will be called.
  		
 * Time Complexity/Space Complexity
 * O(n)/O(1)
 * 
 * An insert into a Binary Search Tree is typically (log n). Pushing an item onto the end of a Linked List is O(1).
 * Divide and Conquer is what makes lookup so much faster than with data structures like Linked Lists.		
*/

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        let temp = this.root;
        while(true){
            if(newNode.value === temp.value) return undefined;
            if(newNode.value < temp.value){
                if(temp.left === null){
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            }
            else{
                if(temp.right === null){
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
            }
        }
    }

    contains(value){
        if(this.root === null) return undefined;
        let temp = this.root;
        while(temp){
            if(value < temp.value){
                temp = temp.left;
            }else if(value > temp.value){
                temp = temp.right;
            }
            else{
                return true;
            }
        }
        return false;
    }

    minValueNode(currentNode){
        while(currentNode.left !== null){
            currentNode = currentNode.left;
        }
        return currentNode;
    }

    BFS(){
        let currentNode = this.root;
        let queue = [];
        let results = [];
        queue.push(currentNode)

        while(queue.length){
            currentNode = queue.shift();
            results.push(currentNode.value);
            if(currentNode.left) queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);
        };
        return results;
    }
};

let myTree = new BST();
myTree.insert(47);
myTree.insert(21);
myTree.insert(76);
myTree.insert(18);
myTree.insert(27);
myTree.insert(52);
myTree.insert(82);
console.log(myTree);
console.log(myTree.contains(33));
console.log(myTree.minValueNode(myTree.root.right));
console.log((myTree.BFS()));