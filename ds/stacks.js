class Node {
  constructor(value) {
   this.value = value,
   this.next = null 
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top
  }

  push(value) {
    const newNode = new Node(value)

    if(this.length === 0) {
      this.top = newNode
      this.bottom = newNode
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }

    this.length++
    return this;
  }

  pop() {
    if(!this.top) {
      return null
    }
    if(this.top === this.bottom) {
      this.bottom = null
    }
    this.top = this.top.next;
    this.length--
    return this;
  }

  isEmpty() {
    if(!this.top || this.length === 0) {
      return true
    }
    return false
  }
}

const myStack = new Stack()

myStack.push('Google')
myStack.push('Udemy')
myStack.push('Discord')

myStack.pop()
myStack.pop()
myStack.pop()

console.log(myStack.isEmpty())
console.log(myStack)

// console.log(myStack.peek())
