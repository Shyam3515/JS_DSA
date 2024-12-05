class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

function convertMirror(root) {
  if (root == null) return null;

  convertMirror(root.left);
  convertMirror(root.right);

  // Swap the left and right subtrees.
  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  return root;
}

// Representation of the input tree:
//     1
//    / \
//   2   3
//  / \
// 4   5
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

let root1 = convertMirror(root);

// Function to perform in-order traversal to display the tree.
function inOrderTraversal(root) {
  if (root === null) return;

  inOrderTraversal(root.left);
  console.log(root.value);
  inOrderTraversal(root.right);
}

// Representation of the input tree:
//     1
//    / \
//   2   3
//  / \
// 4   5

// mirror [inorder output]
//     1
//    / \
//   3   2
//      / \
//     5   4

console.log("Original Tree (In-Order Traversal):");
inOrderTraversal(root1);
