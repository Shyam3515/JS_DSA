// Time Complexity: O(max(m, n)), where m and n represent the lengths of l1 and l2 respectively.
// Space Complexity: O(max(m, n)). The length of the new list is at most max(m,n)+1.

/****************************************************************************************************** */
//Your Node constructor only accepts one argument (value), so the second argument (next) is ignored.
// This means l1 and l2 are just single nodes (2 and 5), not full linked lists.
class Node {
  constructor(value, next = null) {
    // Add 'next' as a parameter with default 'null'
    this.value = value;
    this.next = next;
  }
}

const addTwoNumbers = (l1, l2) => {
  const dummyNode = new Node(0);
  let current = dummyNode;
  let carry = 0;
  while (l1 !== null || l2 !== null || carry > 0) {
    let p = l1 ? l1.value : 0;
    let q = l2 ? l2.value : 0;
    let sum = p + q + carry;
    carry = Math.floor(sum / 10); //if(sum > 9) carry = 1; else carry = 0;

    current.next = new Node(sum % 10); // here we are new node with the remainder of sum[if sum=14] then 4 will be the value of the node
    current = current.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  return dummyNode.next;
};

const l1 = new Node(2, new Node(4, new Node(3)));
const l2 = new Node(5, new Node(6, new Node(4)));

console.log(addTwoNumbers(l1, l2)); // 7 -> 0 -> 8
