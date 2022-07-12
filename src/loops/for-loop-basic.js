const numsZeroToThree = []
const numsFiveToTen = []
const evenNums = []
const countdown = []

// TODO: Write a for loop that adds the numbers 0 to 3 to the numsZeroToThree array
let numberThree = 3
for (let i = 0; numberThree >= i; i++){
  numsZeroToThree.push(i)
}
console.log(numsZeroToThree)
// TODO: Write a for loop that adds the numbers 5 to 10 to the numsFiveToTen array


let numberFive = 10
for (let i = 5; numberFive >= i; i++) {
  numsFiveToTen.push(i)
}
console.log(numsFiveToTen)


// TODO: Write a for loop that adds all the even numbers between 0 and 6 (0, 2, 4, 6) to evenNums
let eveNum = 6
for (let i = 0; eveNum >= i; i += 2) {
  evenNums.push(i)

}
console.log(evenNums)
// TODO: Write a for loop that adds the numbers 3 to 0 (in that order) to the countdown array


const countdown1 = []
let numberReverse = 3
for (let i = 0; i <= numberReverse; i++) {
  countdown1.push(i)
}
for (let i = countdown1.length - 1; i >= 0; i--) {
  countdown.push(countdown1[i])
}
console.log(countdown)
// do not change below this line
module.exports = {
  a: numsZeroToThree,
  b: numsFiveToTen,
  c: evenNums,
  d: countdown
}
