// Request user inputs
const age = parseInt(prompt("Enter your age:)"));
const studentInput = prompt("Are you a student ? (yes or no):").toLowerCase();
const day = prompt("Enter the day of week:").toLowerCase();
const tickets = parseInt(prompt("Enter number of tickets:"));
let pricePerTicket;
let totalToPay;
// Conditionals
// Data validations
if (isNaN(age) || age < 0 || age > 120) {
    alert("Invalid user age.");
} else if (isNaN(tickets) || tickets < 1) {
    alert("Invalid ticket value.");
} else if (studentInput !== "yes" && studentInput !== "no") {
    alert("invalid student input.");
}
else {
    //conditionals
    //age logic
    if (age < 12) {
        pricePerTicket = 6;
    } else if (age >= 65) {
        pricePerTicket = 7;
    }
    else {
        pricePerTicket = 12;
    }
    //Here is student discount
    if (studentInput === "yes") {
        if (age >= 12 && age <= 25) {
            pricePerTicket = pricePerTicket - 3;
        }
    }
    // day discount
    if (day === "wednesday") {
        pricePerTicket = pricePerTicket - 2;
    }
    // Total Calculations
    totalToPay = pricePerTicket * tickets;
    //Display output 
    alert("price per ticket: $" + pricePerTicket + " Tickets: * + tickets + = Total to Pay: $" + totalToPay);

}
/*
---------------------------------------
Desktop Test
Movie theater Ticket System
---------------------------------------

age =10 student 60  day =monday  tcket=2 "monday": unknown day
price per ticket: 6 USD. Total to pay : 12USD.
Age =20 Student = yes day = sunday ticket =3 "monday" unkown day
---------------------------------------
*/