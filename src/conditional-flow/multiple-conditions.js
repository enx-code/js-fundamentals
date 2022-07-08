// Task 1
const LOWER = 4
const UPPER = 17
const NUM = 9

// Use conditional statements to set the value of the answerOne variable
// to be true if the NUM variable is more than or equal to the LOWER variable
// AND is less than or equal to the UPPER variable
let answerOne = true
if (NUM >= LOWER && NUM<= UPPER) {
    console.log(answerOne)

}



// ---- //

// Task 2
const STR = null

// Use conditional statements to set the answerTwo variable below to true
// if the STR variable is 'Hello' or 'Goodbye'
// Set answerTwo to false if it's neither of those
// Run the test after setting STR to 'Hello', then 'Goodbye', then any other value you like
// to verify your code is correct
let answerTwo
if (STR === "Hello" || STR === "Goodbye") {
    answerTwo = true
    console.log(answerTwo)
} else {
    answerTwo = false
    console.log(answerTwo)
}



// ---- //

// Task 3
const AGE = 0

// Use conditional statements to set the answerThree variable below to a
// string value based on what the AGE variable is set to.
// The table below shows the string that should be used for each range of
// values that AGE can be.
//
// For example: if AGE is set to 3, answerThree should be set to 'Toddler'
//
// 0      | Baby
// 1-4    | Toddler
// 5-12   | Child
// 13-19  | Teenager
// 20+    | Adult
let answerThree
if (AGE === 0) {
    answerThree = "Baby"
    console.log(answerThree)
} else if (AGE >= 1 || AGE <= 4) {
    answerThree = "Toddler"
    console.log(answerThree)
} else if (AGE >= 5 || AGE <= 12){
    answerThree = "Child"
    console.log(answerThree)    
} else if (AGE >= 13 || AGE <= 19) {
    answerThree = "Teenager"
} else  {
    answerThree = "Adult"
}


// Run the test after changing the AGE value to verify you've successfully
// accounted for each age range



// Don't touch the code below this line
module.exports = {
    answerOne,
    STR,
    answerTwo,
    AGE,
    answerThree
}
