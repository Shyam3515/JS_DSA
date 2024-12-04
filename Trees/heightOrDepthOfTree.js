/*
// JavaScript program to find the height of a binary 
// tree using depth-first search (DFS) approach.

Time Complexity: O(n), where n is the number of nodes in the binary tree, as each node is visited once.
Auxiliary Space: O(h) where h is height of the binary tree.
*/
class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

// Returns height which is the number of edges,along the longest path from the root node down to the farthest leaf node.
function heightOfTree(root) {
  if (root == null) return 0;

  let leftHeight = heightOfTree(root.left);
  let rightHeight = heightOfTree(root.right);

  //   let height;
  //   if (left > right) {
  //     height = 1 + leftHeight;
  //   } else {
  //     height = 1 + rightHeight;
  //   }
  //   return height;

  // Height of the tree is the maximum of leftHeight and rightHeight plus 1.
  return 1 + Math.max(leftHeight, rightHeight);
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

console.log(heightOfTree(root));
