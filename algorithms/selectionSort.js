/* 
  1. Scan a list of items for the smallest element.
  2. Swap the element for the one in the first position;
  3. O(n^2) - Time Complexity
  4. O(1) - Space Complexity
*/
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    let temp = array[i];

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }

  return array;
}

console.log(selectionSort(numbers));
