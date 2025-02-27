// QUESTION 1
// Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// ANSWER

// a. number

/*let userNumber = +prompt ("Enter a positive integer number")

// b. round off value of the number

let userRoundValue = Math.round(userNumber)

// c. floor value of the number

let userFloorValue = Math.floor(userNumber)

// d. ceil value of the number

let userCeilValue = Math.ceil(userNumber)

// console.log(userCeilValue);

document.write("<h4>Your Number:</h4>" + "<br/>" + userNumber + "<br/>" + "<h4>Round Off Value:</h4>" + userRoundValue +
    "<h4>Floor Value:</h4>" + userFloorValue + "<br/>" + "<h4>Ceil Value:</h4>" + "<br/>" + userCeilValue)*/

// QUESTION 2
// Write a program that takes a negative floating point
// number from user & display the following in your browser.
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// ANSWER

// a. number

/*let userNegativeNum = +prompt("Enter a negative floating point number")

// b. round off value of the number

let userRoundNegativeNum = Math.round(userNegativeNum)

// c. floor value of the number

let userFloorNegativeNum = Math.floor(userNegativeNum)

// d. ceil value of the number

let userCeilNegativeNum = Math.ceil(userNegativeNum)

document.write("<h4>Your Negative Floating Number:</h4>" + userNegativeNum + "<br/>" + "<h4>Round Off Value:</h4>" + userRoundNegativeNum +
    "<h4>Floor Value:</h4>" + userFloorNegativeNum + "<h4>Ceil Value:</h4>" + userCeilNegativeNum)*/

// QUESTION 3
// Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// ANSWER

/*let userAbsNum = +prompt ("Enter your number")

let absoluteValue = Math.abs(userAbsNum)

document.write("<h4>Your Number:</h4>" + "<br/>" + userAbsNum + "<br/>" + "<h4>Absolute Value</h4>" + absoluteValue)*/

// QUESTION 4
// Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

// ANSWER

/*let diceRandomNum = (Math.random()*5)+1

diceRandomNum = Math.round((Math.random()*5)+1)

document.write("<h4>Roll a dice:</h4>" + diceRandomNum)*/

// QUESTION 5
// Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// ANSWER

/*document.write("<h4>Heads Tails Game</h4>")

let coinToss = Math.random()*3

let coinTossFloor = Math.floor(Math.random()*3)

if(coinToss < 2){
    document.write("<h4>Coin Value:</h4>" + coinTossFloor + "<br/>" + "<h4>Random coin Value:</h4>" + "<br/>" + "Heads")
}
else{
    document.write("<h4>Coin Value:</h4>" + coinTossFloor + "<br/>" + "<h4>Random coin Value:</h4>" + "<br/>" + "Tails")
}*/

// QUESTION 6
// Write a program that shows a random number between 1
// and 100 in your browser.

// ANSWER

/*document.write("<h4>Random Number Between 1-100</h4>")

let randomCounting = Math.random()*100

let counting = Math.ceil(randomCounting)

document.write(counting)*/

// QUESTION 7
// Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// ANSWER

/*let userWeight = +prompt("Enter your weight")

let parseWeight = parseFloat(userWeight)

document.write("<h4>User Weight:</h4>" + "<br/>" + "The weight of user is " + parseWeight.toFixed(1) + " kilograms" )*/

// QUESTION 8
// Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

// ANSWER

/*document.write("<h4>Guess Secret Number</h4>")

let secretNumber = 6

let userSecretNumber = +prompt("Enter a number between 1 and 10")

if(secretNumber === userSecretNumber){
    document.write("Congratulations! You guess correct number.")
}
else{
    document.write("Opps, Sorry! Try again")
}*/