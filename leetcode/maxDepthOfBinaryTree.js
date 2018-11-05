/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/*
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
*/

let maxDepth = function(root) {
  if (root === null) return 0;

  // use the DFS strategy to recursion
  // we add 1 because the root level is the first level
  let leftVal = maxDepth(root.left) + 1;
  let rightVal = maxDepth(root.right) + 1;
  return leftVal > rightVal ? leftVal : rightVal;
};

/*
time: O(N) where N is the number of nodes
space: 
worst case, if the tree is completely unbalanced: O(N) where N is the height of the tree
best case, if the tree is completely balanced: O(log(N)) where the height of the tree is log(N)
*/
