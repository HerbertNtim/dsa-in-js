/* 
  Create a function that reverses a string:
  'Hi My name is Herbert' should be:
  'trebreH si eman iH'
*/

// Solution 1
function reverseString(str) {
  let result = ''
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }
  return result
}

const stringSample = "My name is Herbert"

console.log("Solution 1: ", reverseString(stringSample))

// Solution 2
const reverseString2 = (str) => {
  return str.split('').reverse().join('')
}

console.log('Solution 2: ', reverseString2(stringSample))

// Solution 3
function reverseString3(str) {
  const array = []
  for (let i = str.length-1; i >= 0; i--) {
    array.push(str[i])
  }

  return array.join('')
}

console.log('Solution 3: ', reverseString3(stringSample))
