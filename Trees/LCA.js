class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

function LCA(root, node1, node2) {
  if (root === null) return null;

  // If the current node matches either of the target values, return it.
  if (root.value === node1 || root.value === node2) {
    return root;
  }

  // Recursively find LCA in the left and right subtrees.
  let left = LCA(root.left, node1, node2);
  let right = LCA(root.right, node1, node2);

  // If both left and right are non-null, the current node is the LCA.
  if (left !== null && right !== null) {
    return root;
  }

  // If only one side is non-null, propagate it up.
  return left ? left : right;
}

// Tree construction:
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

// Find the LCA of nodes with values 4 and 5.
let lca = LCA(root, 4, 5);
console.log("LCA Value:", lca.value); // Outputs: 2
