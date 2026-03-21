// Author: Cristianco9 <GitHub>

// storage the exam score in a variable
var n = prompt("Enter The Number: ");

// Conditionals
if (n > 0) {
    // if the conditional is true
    // Then execute this code
    alert("The Number is Positive");
} else if (n < 0) {
    // if the conditional is false,
    // else if, analize other conditional
    // Then execute this code
    alert("The Number is Negative");
} else if (n == 0) {
    // if the conditional is false,
    // else if, analize other conditional
    // execute this code
    alert("The Number is Zero.");
} 

/*
    -----------------------
    Desktop test And Output
    -----------------------
    n = 20   =>  The number is positive
    n = 10   =>  The number is positive
    n = 59   =>  The number is positive
    n = -6   =>  The number is negative
    n = -7   =>  The number is negative
    n = -8   =>  The number is negative
    n = -10  =>  The number is negative
    n = 0    =>  The number is zero
    ---------------------
*/