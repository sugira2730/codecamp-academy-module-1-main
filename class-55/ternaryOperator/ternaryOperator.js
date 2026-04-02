// Author: EMMANUEL SUGIRA <sugira2730>


console.log("************************");
console.log("Example 1");
let temperature = 35;
// Ternary operator
let weather = temperature > 30  // Conditional to evaluate
    ? "Hot day" // ? => True clausula
    : "Normal temperature"; // : =>  False clausula
console.log("Ternary Operator:");
console.log(weather);

// Classic conditional statement
if (temperature > 30) {
    weather = "Hot day";
} else {
    weather = "Normal temperature";
}
console.log("If - Else statement:");
console.log(weather);
console.log("************************");

console.log("************************");
console.log("Example 2");

let score = 75;
// Ternary operator
let result = score >= 60 ? "Student passed" : "student failed";
console.log(result);
//if else staement
if (score >= 60) {
    result = "Student passed";
} else {
    result = "Student failed";
}
console.log("If-Else Statement:");
console.log(result);
console.log("************************");

console.log("************************");
console.log("Example 3");
let isloggedin = true;
let message = isloggedin ? "Welcome back" : "please log in";
console.log("ternary operator:")
console.log(message);
if (isloggedin) {
    message = "welcome back!";
} else {
    message = "please log in";
}
console.log("if-Else statement");
console.log(message);
console.log("************************");
console.log("Example 4");
let age = 20;
let income = 100;
let loan =
    age > 18 ? income > 1000 ? "approved" : "Review" : "Rejected";
console.log("Ternary Operator:");
console.log(loan);
//if else statement;
if (age > 18) {
    if (income > 1000) {
        loan = "Approved";
    } else {
        loan = "Review";
    }
} else {
    loan = "Rejected";
}
console.log("if-Else statement");
console.log(loan);
console.log("************************");

console.log("************************");
console.log("Example 5");
let number = 10;
let type = number % 2 === 0 ? "Even" : "Odd";

console.log("Ternary Operator");
console.log(type);
//if else statement
if (number % 2 === 0) {
    type = "Even";

} else {
    type = "Odd";
}
console.log("if-Else statement");
console.log(type);
console.log("************************");