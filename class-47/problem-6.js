// Author: Cristian Camilo Cortes Ortiz <Cristianco9>

// require the user age
var age = prompt("Enter your Age: ");

// Conditionals
if (age <= 12) {
    // If the conditionals is true
    // execute and display child discount
    alert("Child Discount");
} else if (age >= 13 && age <= 59) {
    // && => means and like AND logic operator
    // if the previously conditional is false, and
    // else if this conditional is true
    // execute and display regular discount
    alert("Regular Ticket");
} else {
    // execute and display Senior discount
    alert("Senior Discount")
}

/*
    ---------------------
    Desktop test
    ---------------------
    age =< 12      =>  child discount 
    age =   4      =>  child discount
    age =   13     =>  Regular discount
    age =   18     =>  Regular discount
    age =   20     =>  Regular discount
    age =   66     =>  senior discount
    ---------------------
*/