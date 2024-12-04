/**
 * link:https://www.youtube.com/watch?v=ey7DYc9OANo&t=1s
 * The diameter of a binary tree is defined as the length of the longest path between any two nodes in the tree. This path may or may not pass through the root.

Steps to Calculate the Diameter:
    1.For each node, calculate:
        The height of the left subtree.
        The height of the right subtree.
        The diameter passing through the current node, which is the sum of the heights of the left and right subtrees.
    2.The overall diameter is the maximum diameter found during the traversal.

Algorithm:
    We use a recursive approach:
    1.At each node, calculate the height of its left and right subtrees.
    2.Update the maximum diameter using the sum of these heights.
    3.Return the height of the subtree rooted at the current node to assist the recursion.
 */

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

function heightOfTree(root) {
  if (root == null) return 0;

  let leftHeight = heightOfTree(root.left);
  let rightHeight = heightOfTree(root.right);

  return Math.max(leftHeight, rightHeight) + 1;
}

function diameterOfTree(root) {
  if (root == null) return 0;

  let leftHeight = heightOfTree(root.left);
  let rightHeight = heightOfTree(root.right);

  let leftDiameter = diameterOfTree(root.left);
  let rightDiameter = diameterOfTree(root.right);

  //finding the diameter of tree passing through root ==> leftHeight+rightHeight + 1;
  //not passing through root[then check for the left and right subtrees height] ==> Max(leftDiameter,rightDiameter);
  //Key Points:
  // If the diameter is in nodes, the formula includes +1: leftHeight + rightHeight + 1.
  // If the diameter is in edges, the formula excludes +1: leftHeight + rightHeight.
  // For your tree:

  // Diameter as edges: 4
  // Diameter as nodes: 5

  //so we need to find the max of both;
  // Diameter through the root and the max diameter among the three.
  return Math.max(leftDiameter, rightDiameter, leftHeight + rightHeight + 1);
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

console.log("Height of tree:", heightOfTree(root)); // Outputs: 3
console.log("Diameter of tree:", diameterOfTree(root)); // Outputs: 4
