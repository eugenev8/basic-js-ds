const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

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
class Queue {
  constructor() {
    this.root = null
  }
  getUnderlyingList() {
    let list = {}
    Object.assign(list, this.root)
    return list
  }

  enqueue(value) {
    if (!this.root) {
      this.root = new ListNode(value)
    } else {
      if (this.root.next) {
        let lastItem = this.root.next

        while (lastItem.next) {
          lastItem = lastItem.next
        }
        lastItem.next = new ListNode(value)
      } else {
        this.root.next = new ListNode(value)
      }
    }
  }

  dequeue() {
    const temp = this.root.value
    this.root = this.root.next ? this.root.next : null
    return temp
  }
}

module.exports = {
  Queue
};
