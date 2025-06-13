class MyArray {
  constructor() {
    this.length = 0, 
    this.data = {}
  }

  get(index) {
    return this.data[index]
  }

  push(item) {
    this.data[this.length] = item
    this.length++
    return this.data
  }

  pop() {
    let lastItem = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--
    return lastItem
  }

  delete(index) {
    let item = this.data[index]
    this.shiftItems(index)
    this.length--
    return item
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i+1]      
    }
    delete this.data[this.length -  1]
  }

  shift() {
    let first = this.data[0]
    this.delete(0)
    return first
  } 

  unshift(item) {
    this.data[0] = item
    this.length++
    return this 
  }
}


const newArray = new MyArray()
newArray.push("Hi")
newArray.push("You")
newArray.push("are")
newArray.push("nice")
newArray.push("!")

newArray.pop()

newArray.delete(2)
newArray.delete(0)

newArray.push("!You")
newArray.push("are")
newArray.push("nice")
newArray.push("!")

newArray.shift()
newArray.unshift("Herbert")

console.log(newArray)
console.log(newArray.get(0))
