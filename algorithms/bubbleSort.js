/*
  O(n^2) - Time complexity
  O(1) - Space complexity
*/

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if(array[j] > array[j + 1]) {
        const temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }      
    }    
  }

  return array;
}

// console.log(bubbleSort(numbers))

class BubbleSort {
  constructor(array) {
    this.data =  array;
  }

  sort() {
    for (let i = 0; i < this.data.length; i++) {
      for (let j = 0; j < this.data.length; j++) {
        if(this.data[j] > this.data[j+1]) {
          const temp = this.data[j]
          this.data[j] = this.data[j + 1]
          this.data[j + 1] = temp;o
        }                
      }      
    }
    return this.data
  }
}


const sortNumbers = new BubbleSort(numbers)

console.log(sortNumbers.sort())
