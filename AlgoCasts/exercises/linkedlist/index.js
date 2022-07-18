// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.list = [];
    this.head = null;
    this.tail = null;
  }

  insertFirst(value) {
    const node = new Node(value, this.list[0]);
    this.list.unshift(node);
    this.head = this.list[0];
    this.list[this.list.length - 1].next = null;
  }

  size() {
    return this.list.length;
  }

  getFirst() {
    return this.list[0] !== undefined ? this.list[0] : null;
  }

  getLast() {
    return this.list[this.size() - 1];
  }

  clear() {
    this.list = [];
  }

  removeFirst() {
    this.list.shift();
  }

  removeLast() {
    if (this.list.length) {
      this.list.pop();

      if (this.size() === 1) {
        this.head = this.list[0];
        this.list[this.list.length - 1].next = null;
        this.tail = this.list[this.list.length - 1];
      } else {
        this.head = null;
      }
    }
  }

  insertLast(value) {
    const node = new Node(value, null);
    this.list.push(node);

    if (this.list[this.list.length - 2]) {
      this.list[this.list.length - 2].next = node;
    }

    this.head = this.list[0];
    this.tail = this.list[this.list.length - 1];
  }

  getAt(index) {
    return this.list[index] || null;
  }

  removeAt(index) {
    this.list.splice(index, 1);
  }

  insertAt(value, index) {
    if (!this.size()) {
      const node = new Node(value, null);
      this.list.push(node);
      this.head = this.list[0];
    } else {
      const beginning = this.list.slice(0, index);
      const end = this.list.slice(index, this.list.length);
      const node = new Node(value, this.list[index + 1] || null);
      this.list = [...beginning, ...[node], ...end];

      if (this.list[this.list.length - 1].next) {
        this.list[this.list.length - 1].next = null;
        this.tail = this.list[this.list.length - 1];
      }

      if (!this.list[this.list.length - 2].next) {
        this.list[this.list.length - 1].next = this.list[this.list.length - 1];
      }

      this.head = this.list[0];
    }
  }

  forEach(cb) {
    this.list.forEach((item) => cb(item));
  }

  [Symbol.iterator]() {
    return this.list.values();
  }
}

module.exports = { Node, LinkedList };
