// 10 ---> 5 ---> 16

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null
  }
}
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    newNode.prev = this.tail
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    if(index >= this.length) {
      return this.append(value)
    }
    const newNode = new Node(value)
    const leader = this.traverseList(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader
    newNode.next = follower;
    follower.prev = newNode
    this.length++
    return this
  }

  traverseList(index) {
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index) {
      currentNode = currentNode.next;
      counter++
    }
    return currentNode;
  }

  remove(index) {
    if(index > this.length) {
      return this;
    }
    const leader = this.traverseList(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    unwantedNode.prev = leader
    this.length--
    console.log(this)
    return this;
  }
}

const myList = new LinkedList(10);

myList.append(5);
myList.append(16);

myList.prepend(1);

myList.insert(2, 99)
myList.insert(20, 88)

myList.remove(2)

// console.log(myList);
console.log(myList.printList())
