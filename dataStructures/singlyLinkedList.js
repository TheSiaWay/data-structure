class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  /**
   * Singly linked list for storing numbers. If it needs to store something else, need to adjust some methods.
   */
  constructor() {
    this.head = null;
  }

  insert(data) {

  }

  insertAfter(data, node) {

  }

  /**
   * Helper function that print out what's in the list
   * @return {void}
   */
  print() {

  }

  /**
   * Delete node given data
   * @param {number} data
   * @return {number}
   */
  delete(data) {

  }

  /**
   * Delete node given position -- head = 0 and tail = size - 1
   * @param {number} position
   */
  deleteAt(position) {

  }

  reverse(list) {

  }

  /**
   * Check if particular data is in the linked list or not
   * @param {number} data
   * @return {boolean}
   */
  isContain(data) {

  }

  /**
   * Check if list is empty
   * @return {boolean}
   */
  isEmpty() {

  }

  /**
   * give the size of the list
   * @return {number}
   */
  get size() {

  }

  // additional methods that are not usually included as part of normal linked list operation
  isCycle() {

  }

  /**
   * remove duplicates from the list
   */
  removeDuplicates() {

  }

  /**
   * Given that it's a valid position, return node at that position
   * @param {number} position
   * @return {Node}
   */
  nthElementFromEnd(position) {

  }


}

module.exports = SinglyLinkedList;