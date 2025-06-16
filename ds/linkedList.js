// 10 ---> 5 ---> 16

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1
  }

  append(value) {
    const newNode = {
      value: value,
      next: null
    } 
    this.tail.next = newNode;
    this.tail.value = newNode;
    this.length++
    return this;
 }
}

const myList = new LinkedList(10)

myList.append(16)

console.log(myList)
