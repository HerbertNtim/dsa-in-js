/* 
  MergeSortedArrays([0,3,4,31], [4,6,30])
  [0, 3, 4, 4, 6, 30, 31]
 */

function mergeSortedArrays(array1, array2) {
  const mergedArray = [];
  let i = 0
  let j = 0
  let array1Item = array1[i];
  let array2Item = array2[j];

  if (!array1) {
    return array2
  }

  if (!array2) {
    return array1
  }

  while(array1Item || array2Item) {
    if(!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item)
      i++
      array1Item = array1[i]
    } else {
      mergedArray.push(array2Item) 
      j++
      array2Item = array2[j]
    }
  }

  return mergedArray;
}

console.log(mergeSortedArrays([0,3,4,31], [4,6,30]))
