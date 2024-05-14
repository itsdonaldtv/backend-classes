// Logical operators

// Vars
let statementOne = (1 == 1);
let statementTwo = (1 == 2);
// equal value
let statementThree = ("hello" == "two");
// equal type and value
let statementFour = ("test" === "test");
// === for stricter comparison

// && AND
// Checks 2 or more logical statements returns TRUE if both satisfy or FALSE if 1 or less satisfy
// TRUE: (TRUE) && (TRUE)
// FALSE: (FALSE) && (TRUE)
// FALSE: (FALSE) && (FALSE)
console.log((statementOne && statementTwo));
// statementOne = true
// statementTwo = false


// || OR
// Checks 2 or more logical statements returns TRUE if at least one satisfy
// TRUE: T || F = TRUE
// FALSE: F || F 
console.log((statementOne || statementTwo));
// statementOne = true
// statementTwo = false

// ! NOT
// Check if value is not equal to and returns true or false to that statement
// 5 != 10  is TRUE
// "A" != "A" is false
console.log((1 != 5));
// Just checking the value, ie the sentence
console.log(("tester" != "test"));



