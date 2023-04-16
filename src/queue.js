//const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class qNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

class Queue {
  first = new qNode();
  isNew = true;

  getUnderlyingList() {
    return this.first;
  }

  enqueue(value) {
    if (this.isNew) {
      this.first = new qNode(value);
      this.isNew = false;
    } else {
      let lastNode = this.first;
      while (lastNode.next !== null) {
        lastNode = lastNode.next;
      }
      lastNode.next = new qNode(value);
    }
  }

  dequeue() {
    let returnVal = this.first.value;
    let next = this.first.next;
    this.first = next;
    return returnVal;
  }
}

module.exports = {
  Queue
};
