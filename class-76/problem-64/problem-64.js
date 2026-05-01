/*
    Author: Emmanuel sugira <sugira2730>
    Problem: Daily Expense Analysis
*/
const expenses = [100, 20, 35, 60, 15, 80, 25];

let totalSpent = 0;
let highestExpense = -Infinity;
let highestIndex = 0;

// Use a single loop to calculate sum and find the max value/index
for (let i = 0; i < expenses.length; i++) {
  totalSpent += expenses[i];

  if (expenses[i] > highestExpense) {
    highestExpense = expenses[i];
    highestdayIndex = i;
  }
}
// Aggregate total
let averageExpense = totalSpent / expenses.length;
let day = "";

// Match  numeric index to a day name
switch (highestdayIndex) {
  case 0:
    day = "Monday";
    break;
  case 1:
    day = "Tuesday";
    break;
  case 2:
    day = "Wednesday";
    break;
  case 3:
    day = "Thursday";
    break;
  case 4:
    day = "Friday";
    break;
  case 5:
    day = "Saturday";
    break;
  case 6:
    day = "Sunday";
    break;
}

console.log("Total spent: " + totalSpent);
console.log("Average expense: " + averageExpense.toFixed(2));
console.log("Highest expense on: " + day);
console.log("Amount: " + highestExpense);
