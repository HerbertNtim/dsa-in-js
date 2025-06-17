/*
  Google Question
  Given an array = [2,5,1,2,3,5,1,2,4]
  it should return  2

  Given an array =  [2,1,1,2,3,4,1,2,4]
  it should return 1

  Given an array = [2,3,4,5]
  it should return undefined
*/

function recurringChar(array) {
  const map = {}
  for (let i = 0; i < array.length; i++) {
    if(map[array[i]] !== undefined) {
      return array[i]
    } else {
      map[array[i]] = i
    }
  }

  return undefined
}

array1 = [2,5,1,2,3,5,1,2,4]

const result = recurringChar(array1)
console.log(result)
