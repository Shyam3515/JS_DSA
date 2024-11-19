/**
 * In LL Shift and Unshift is O(1);
 * In LL Push is O(1) and POP is O(n);
 */
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
};

class LinkedList{
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    //Pushing to last
    push(value){
        const newNode = new Node(value);
        if(!this.head){//if head == null
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    };

    //Popping last value
    pop(){
        if(!this.head){ //if no nodes are there;
            return undefined;       
        };
        //For 2 or more number of nodes
        let temp = this.head;
        let pre = this.head;
        while(temp.next){
            pre = temp;
            temp = temp.next;
        };
        //this will be start of code for one element
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        //For single node implementation will be from here
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        };
        return temp;
    };

    //Adding to first
    unshift(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            newNode.next = this.head;
            this.head = newNode;
        };
        this.length++;
        return this;
    };

    //Removing from first
    shift(){
        if(!this.head){ //if no nodes are there;
            return undefined;       
        };
        //For 2 or more number of nodes
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--;
        //For single node
        if(this.length === 0){
            this.tail = null;
        };
        return temp;
    };

    //Get the value by index in a list
    get(index){
        if(index < 0 || index >= this.length){
            return undefined;
        };
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        };
        return temp;
    };

    //Setting[changing] the value by index
    set(index,value){
        let temp = this.get(index);
        if(temp){
            temp.value = value;
            return true;
        };
        return false;
    };

    //Inserting the node
    insert(index,value){
        if(index === 0){
            return this.unshift(value);
        }
        if(index === this.length){
            return this.push(value);
        };
        if(index < 0 || index >= this.length){
            return false;
        }
        const newNode = new Node(value);
        const temp = this.get(index - 1);
        newNode.next = temp.next;
        temp.next = newNode;
        this.length++;
        return true;
    };

    //Removing the node
    remove(index){
        if(index === 0){
            return this.shift();
        }
        if(index === this.length-1){
            return this.pop();
        };
        if(index < 0 || index >= this.length){
            return false;
        }
        const pre = this.get(index - 1);
        let temp = pre.next;
        pre.next = temp.next;
        temp.next = null;
        this.length--;
        return temp;
    };
};

let myLinkedList = new LinkedList(5);
myLinkedList.push(7);
console.log("Pop:",myLinkedList.pop());
myLinkedList.push(1);
console.log("List:",myLinkedList);
myLinkedList.unshift(0);
console.log("Shifted:",myLinkedList.shift());
console.log("Get:",myLinkedList.get(4));
console.log("Set:",myLinkedList.set(13,10));
console.log("Insert:",myLinkedList.insert(0,20));
console.log("Insert:",myLinkedList.insert(2,30));
//currently there are 4 elements, so we are inserting at last
console.log("Insert:",myLinkedList.insert(4,50));
console.log("List:",myLinkedList.remove(0));
console.log(myLinkedList)