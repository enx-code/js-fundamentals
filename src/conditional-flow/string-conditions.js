// Use conditional statements to set answerOne to true if STR_ONE is 'Hello'
const STR_ONE = 'Hello'
let answer
if (STR_ONE === 'Hello') {
  answerOne = true
  console.log(answerOne)
}




// Use conditional statements to set answerTwo to true if STR_TWO is not 'Hello'
const STR_TWO = 'Goodbye'

let answerTwo
if (STR_TWO !== 'Hello') {
  answerTwo = true
  console.log(answerTwo)
}




// Use conditional statements to set answerThree to true if STR_THREE is
// longer than STR_FOUR
const STR_THREE = 'Hello'
const STR_FOUR = 'Good'

let answerThree
if (STR_THREE.length > STR_FOUR.length) {
  answerThree = true
  console.log(answerThree)

}



// Use a combination of a loop and conditional statements to set answerFour
// to false if STR_FIVE has an odd number of vowels, or true if it has an
// even number
const STR_FIVE = 'Alex'
const vowels =['A', 'e', 'o', 'i']
let vowelCount = 0

let answerFour
for (let i = 0; i < STR_FIVE.length; i++) {
  // console.log(STR_FIVE[i])
  if (vowels.includes(STR_FIVE[i])){
  vowelCount++

  } 
}
if (vowelCount % 2 === 0) {
  answerFour = true
} else {
  answerFour = false
}
console.log(answerFour)



// Use a combination of a loop and conditional statements to set answerFive
// to false if STR_SIX has an odd number of vowels, or true if it has an
// even number

const STR_SIX = 'Joanna'
let vowelsCountJoanna = 0

let answerFive
const vowelsM = ['o', 'a', 'u', 'i']
for (let i = 0; STR_SIX.length > i; i++) {
  // console.log(STR_SIX[i])
  if (vowelsM.includes(STR_SIX[i])) {
  vowelsCountJoanna++
  }
}
answerFive = vowelsCountJoanna % 2 ===0
console.log(answerFive)


// Use conditional statements to set answerSix to the middle character of STR_SEVEN
// if STR_SEVEN has an odd number of characters
const STR_SEVEN = 'Kayla'
let answerSix = STR_SEVEN[2]
if (STR_SEVEN.length === 5) {
    
  console.log(answerSix)
}



// Use conditional statements to set answerSeven to the middle two characters of
// STR_EIGHT if STR_EIGHT has an even number of characters
const STR_EIGHT = 'Alex'

let answerSeven = STR_EIGHT.slice(1, 3)
if (STR_EIGHT === 4){
  //  console.log(answerSeven)
}


// Set answerEight to the appropriate season based on what MONTH is set to
//
// For example, if MONTH is 'January', answerEight should be 'Winter'
//
// The below table shows the season for each range of months:
//
// March to May: Spring
// June to August: Summer
// September to November: Autumn
// December to February: Winter
//
// Run the test after changing the value of MONTH to check you've covered every month correctly
const MONTH = 'January'

let answerEight
if (MONTH === 'March' || MONTH === 'April' || MONTH === 'May') {
  answerEight = 'Spring'
  // console.log(answerEight)
} else if (MONTH === 'June' || MONTH === 'July' || MONTH === 'August') {
  answerEight = 'Summer'
  // console.log(answerEight)
} else if (MONTH === 'September' || MONTH ==='October' || MONTH === 'November') {
  answerEight = 'Autumn'
  // console.log(answerEight)
} else {
  answerEight = 'Winter'
  // console.log(answerEight)
}


module.exports = {
  answerOne,
  answerTwo,
  answerThree,
  answerFour,
  answerFive,
  answerSix,
  answerSeven,
  MONTH,
  answerEight
}
