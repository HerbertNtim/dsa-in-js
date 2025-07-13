class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }

  peek() {
    return this.first;
  }

  enqueue(item) {
    const newNode = new Node(item)
    if(!this.first) {
      this.first = newNode
      this.last =  newNode
    } else {
      this.last.next = newNode;
      this.last = newNode
    }

    this.length++
    return this
  }

  dequeue() {
    if(this.length === 0) {
      return null
    } else {
      if(this.first === this.last) {
        this.last = null
      }
      const firstNode = this.first
      this.first = firstNode.next
    }

    this.length--
    return this
  }
}

const myQueue =  new Queue()

myQueue.enqueue('Joy')
myQueue.enqueue('Matt')
myQueue.enqueue('Pavel')
myQueue.enqueue('Samir')

myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()

console.log(myQueue)
