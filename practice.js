class MyArray {
  constructor() {
    this.data = {}
    this.length = 0
  }

  push(item) {
    this.data[this.length] = item
    this.length++
    return this
  }

  pop() {
    let lastItem = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--
    return this
  }

  delete(index) {
    this.shiftItems(index)
    this.length--
    return this
  }

  shiftItems(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1]
    }
    delete this.data[this.length - 1]
  }

  unshift(item) {
    this.shiftItemsForward();
    this.data[0] = item;
    this.length++
    return this;
  }

  shiftItemsForward() {
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i-1]
    }
  }

  shift() {
    this.delete(0)
  }

}

const newArray = new MyArray()

newArray.push('Hi')
newArray.push('You')
newArray.push('are')
newArray.push('too')
newArray.push('nice')
newArray.push('!')

newArray.pop()

newArray.delete(2)
newArray.unshift('Hello')
newArray.shift()

console.log(newArray)
