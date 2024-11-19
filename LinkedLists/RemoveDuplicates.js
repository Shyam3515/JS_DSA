/** Vivekananda video 
 * 
 * The function has a time complexity of O(n), where n is the number of nodes in the list, as it traverses the list only once. The space complexity is also O(n), as it uses a set to store unique node values.
*/

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
};

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = this.head;
        this.length = 0;
    };

    push(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    };

    removeDuplicates1(){
        let p = this.head;
        let q = null;
        while(p != null && p.next != null){//checking condition for single and null(zero) nodes.
            if(p.value == p.next.value){
                q = p.next.next;
                if(q == null){
                    p.next = null;
                    this.length--;
                    break;
                };
                p.next = q;
                this.length--;
            }
            if(p.value != p.next.value){
                p = p.next;
            }
        };
        return this.length;
    }

    removeDuplicates() {
        // Create a Set to store unique values
        const values = new Set();
        // Initialize previous pointer as null
        let previous = null;
        // Initialize current pointer at head
        let current = this.head;
     
        // Iterate through the list
        while (current !== null) {
            // If value already exists in the set
            if (values.has(current.value)) {
                // Remove the duplicate node by updating previous' next
                previous.next = current.next;
                // Decrement list length
                this.length -= 1;
            } else {
                // Add unique value to the set
                values.add(current.value);
                // Update previous pointer to current node
                previous = current;
            }
            // Move current pointer to the next node
            current = current.next;
        }
    }
};
const myLinkedList = new LinkedList();
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(4);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.push(5);
// console.log(myLinkedList.removeDuplicates());
console.log(myLinkedList);
