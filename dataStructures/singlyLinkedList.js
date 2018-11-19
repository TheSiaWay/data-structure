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

  /**
   * insert data at the tail as next item in the linked list
   * @param {number} data
   * @return {LinkedList}
   */
  insert(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.listSize = 1;
      return this.head;
    }
    let temp = this.head;
    while (temp.next) {
      temp = temp.next;
    }
    this.listSize += 1;
    temp.next = newNode;
    return this.head;
  }

  /**
   * insert at given position, head = 0, tail = size -1
   * generalizing the function to:
   * if given position <= 0, insert at head
   * if given position >= size - 1, insert at tail
   * else insert at that position and shift everything to the tail
   * @param {number} data
   * @param {number} position
   * @return {LinkedList}
   */
  insertAt(data, position) {
    let temp = this.head;
    const newNode = new Node(data);
    if (position <= 0) {
      // inserting at head
      this.head = newNode;
      this.head.next = temp;
    } else if (position >= this.listSize) {
      // inserting at tail
      return this.insert(data);
    } else {
      let tempCount = 0;
      while (tempCount != position - 1) {
        temp = temp.next;
        tempCount++;
      }
      let pointer2 = temp.next;
      temp.next = newNode;
      temp = temp.next;
      temp.next = pointer2;
    }

    this.listSize += 1;
    return this.head;
  }

  /**
   * Helper function that print out what's in the list
   * @return {number[]}
   */
  print() {
    let temp = this.head;
    const result = [];
    while (temp) {
      result.push(temp.data);
      temp = temp.next;
    }
    return result;
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
   * getter for size of the list
   * @return {number}
   */
  get listSize() {
    return this.size || 0;
  }

  /**
   * setter for size of the list
   * @param {number}
   * @return {void}
   */
  set listSize(val) {
    this.size = val;
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