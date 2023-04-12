const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.tree = []
  }
  root() {
    return this.tree.length ? { data: this.tree[0] } : null;
  }

  add(data) {
    this.tree.push(data)
  }

  has(data) {
    return this.tree.includes(data)
  }

  find(data) {
    return this.tree.find(e => e === data) ? { data: this.tree.find(e => e === data) } : null
  }

  remove(data) {
    this.tree = this.tree.filter(e => e !== data)
  }

  min() {
    return Math.min(...this.tree)
  }

  max() {
    return Math.max(...this.tree)
  }
}

module.exports = {
  BinarySearchTree
};