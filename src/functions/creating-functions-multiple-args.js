// define a function that takes two numbers: lower and upper.
// The function should return an array containing all the numbers between
// lower and upper, including lower and upper.
//
// Example Input and Output:
// Input        | Output
// 1, 3         | [1,2,3]
// 10, 13       | [10, 11, 12, 13]
// -1, 1        | [-1, 0, 1]
//
// TODO: write code below
function allNum (lowNum, upNum) {
  const arr = []
  for (let i = lowNum; i <= upNum; i++) {
    arr.push(i)  
  }
  return arr
}

console.log(allNum(1, 3))
console.log(allNum(10, 13))
console.log(allNum(-1, 1))

// define a function that takes two arguments: a string and a number.
// The function should return the same string but in upper case with exclamation
// marks appended to the end. The number of exclamation marks should be
// determined by the number argument.
//
// Example Input and Output:
// Input        | Output
// disaster, 5  | DISASTER!!!!!
// error, 10    | ERROR!!!!!!!!!!
//
// TODO: write code below
function convert(string, number) {

  let text = string.toUpperCase()
  for (let i = 0; i < number; i++) {
      text = text + '!'
      
  }


  return text

}
console.log(convert("disaster", 5))
console.log(convert("hello", 10))




// change the exported value to be the name of the function you defined
module.exports = {
  a: allNum, // change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: convert // change undefined to be the name of the function defined to return the string with exclamations (the second todo)
}
