//LRU cache-least recently used cache

class LRUcache {
  constructor(capacity) {
    this.capacity = Number(capacity);
    this.length = 0;
    this.map = new Map(); // key: Node
    this.head = null; // Most recently used
    this.tail = null; // Least recently used
  }

  #removeNode(node) {
    // Update links to remove node from the list
    if (node.prev) {
      node.prev.next = node.next;
    } else {
      this.head = node.next; // Node is head
    }

    if (node.next) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev; // Node is tail
    }

    // Remove from map and decrease length
    this.map.delete(node.key);
    this.length -= 1;
  }

  get(key) {
    if (!this.map.has(key)) return null;

    const node = this.map.get(key);
    // Move to front (most recently used)
    if (node !== this.head) {
      this.#removeNode(node);
      this.#addToFront(node);
    }
    return node.value;
  }

  #addToFront(node) {
    node.next = this.head;
    node.prev = null;

    if (this.head) {
      this.head.prev = node;
    }
    this.head = node;

    if (!this.tail) {
      this.tail = node;
    }

    this.map.set(node.key, node);
    this.length += 1;
  }

  put(key, value) {
    // If key exists, update value and move to front
    if (this.map.has(key)) {
      const node = this.map.get(key);
      this.#removeNode(node);
      node.value = value; // Update value
      this.#addToFront(node);
      return;
    }

    // If capacity is full, remove tail (least recently used)
    if (this.length === this.capacity) {
      this.#removeNode(this.tail);
    }

    // Create new node and add to front
    const node = { key, value, next: null, prev: null };
    this.#addToFront(node);
  }

  debug() {
    let current = this.head;
    const arr = [];
    while (current !== null) {
      arr.push(current);
      current = current.next;
    }
    return arr.reduce(
      (acc, curr) => acc.concat(`-->[${curr.key}]:[${curr.value}]`),
      ""
    );
  }
}

const cache = new LRUcache(3);
cache.put(1, 10);
cache.put(2, 20);
cache.put(3, 30);
cache.put(4, 40);
cache.put(2, 40);

console.log(cache.get(2));
console.log(cache.debug()); // -->[4]:[40]-->[3]:[30]-->[2]:[20]
