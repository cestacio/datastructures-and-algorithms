/*
You’re given the pointer to the head node of a linked list and a specific position. Counting backwards from the tail node of the linked list, get the value of the node at the given position. A position of 0 corresponds to the tail, 1 corresponds to the node before the tail and so on.

*/

function getNodeValue(head, position) {
  let length = 0;
  let currNode = head;

  while (head !== null) {
    if (length > position) {
      currNode = currNode.next;
    }
    head = head.next;
    length++;
  }
  return currNode.data;
}
