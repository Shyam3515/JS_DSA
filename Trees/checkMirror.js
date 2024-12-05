class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

function areMirrors(tree1, tree2) {
  // Base case: both nodes are null.
  if (tree1 === null && tree2 === null) return true;

  // If only one is null, they are not mirrors.
  if (tree1 === null || tree2 === null) return false;

  // Check if:
  // 1. Current nodes' values are the same.
  // 2. Left subtree of tree1 is a mirror of right subtree of tree2.
  // 3. Right subtree of tree1 is a mirror of left subtree of tree2.
  return (
    tree1.value === tree2.value &&
    areMirrors(tree1.left, tree2.right) &&
    areMirrors(tree1.right, tree2.left)
  );
}

// Example Trees:

// Tree 1:
//     1
//    / \
//   2   3
//  / \
// 4   5
let tree1 = new Node(1);
tree1.left = new Node(2);
tree1.right = new Node(3);
tree1.left.left = new Node(4);
tree1.left.right = new Node(5);

// Tree 2 (Mirror of Tree 1):
//     1
//    / \
//   3   2
//      / \
//     5   4
let tree2 = new Node(1);
tree2.left = new Node(3);
tree2.right = new Node(2);
tree2.right.left = new Node(5);
tree2.right.right = new Node(4);

// Check if they are mirrors.
console.log(
  "Are the two trees mirrors of each other?",
  areMirrors(tree1, tree2)
); // Outputs: true
