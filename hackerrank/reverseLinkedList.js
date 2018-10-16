/* Problem:
You’re given the pointer to the head node of a linked list. Change the next pointers of the nodes so that their order is reversed. The head pointer given may be null meaning that the initial list is empty.
*/

// iterative solution
function reverse(head) {
  let currNode = head;
  let prevNode = null;
  let nextNode = null;

  while (currNode) {
    nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
  }
  return prevNode;
}

// time: O(n) where n is the list's length.
// space: O(1)

// *******************

// recursive solution
function reverseRecursion(head) {
  if (head === null || head.next === null) return head;

  let curr = reverseRecursion(head.next);
  head.next.next = head;
  head.next = null;
  return curr;
}

// time: O(n) where in is the list's length
// space: O(n) where the recursion can go n levels deep.
