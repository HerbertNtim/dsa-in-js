
/* 
  1. When the list is almost sort the time complexity is O(1)
*/

const number = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    if(array[i] < array[0]) {
      array.unshift(array.splice(i, 1)[0])
    } else {
      for (let j = 1; j < array.length; j++) {
        if(array[i] > array[j-1] && array[i] < array[j]) {
          array.splice(j, 0, array.splice(i, 1)[0])
        }        
      }
    }
  }

  return array
}

console.log(insertionSort(number))
