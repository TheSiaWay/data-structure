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
    } else {
      let temp = this.head;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = newNode;
    }

    this.listSize += 1;
    return this;
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
    return this;
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
   * if data doesn't exist or if list is empty, return null
   * @param {number} data
   * @return {LinkedList}
   */
  delete(data) {
    if (this.isEmpty || !this.isContain(data)) {
      this.head = null;
      return this;
    }
    this.listSize -= 1;
    if (this.head.data === data) {
      // deleting at the head
      this.head = this.head.next;
    } else {
      let temp = this.head;
      while (temp.next) {
        if (temp.next.data === data) {
          temp.next = temp.next.next;
          break;
        }
        temp = temp.next;
      }
    }

    return this;
  }

  /**
   * Delete node given position -- head = 0 and tail = size - 1
   * if given position <= 0, delete at head
   * if given position >= size - 1, delete at tail
   * else delete at that position and shift everything to the head
   * @param {number} position
   */
  deleteAt(position) {
    if (this.isEmpty) {
      return this;
    } else if (position <= 0) {
      this.head = this.head.next;
    } else {
      let deleted = false;
      let temp = this.head;
      let nodeCount = 0;

      while (temp.next && temp.next.next) {
        if (nodeCount === position - 1) {
          temp.next = temp.next.next;
          deleted = true;
          break;
        }
        temp = temp.next;
        nodeCount++;
      }
      if (!deleted) {
        temp.next = null;
      }
    }
    this.listSize -= 1;
    return this;
  }

  reverse(list) {

  }

  /**
   * Check if particular data is in the linked list or not
   * @param {number} data
   * @return {boolean}
   */
  isContain(data) {
    let temp = this.head;
    while (temp) {
      if (temp.data === data) {
        return true;
      }
      temp = temp.next;
    }
    return false;
  }

  /**
   * Check if list is empty
   * @return {boolean}
   */
  get isEmpty() {
    return this.listSize === 0;
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