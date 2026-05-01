/*
    Author: Emmanuel sugira <sugira2730>
    Problem: Daily Expense Analysis
*/

const expenses = [45, 20, 35, 60, 15, 80, 25];

let totalSpent = 0;
let highestExpense = -Infinity;
let highestDayIndex = -1;

for (let i = 0; i < expenses.length; i++) {

    const currentExpense = expenses[i];

    // Aggregate total
    totalSpent += currentExpense;

    // Track highest expense and its index
    if (currentExpense > highestExpense) {
        highestExpense = currentExpense;
        highestDayIndex = i;
    }
}

// Calculate average after traversal
const averageExpense = totalSpent / expenses.length;

// Output results
console.log(`
Total spent: ${totalSpent}
Average expense: ${averageExpense.toFixed(2)}
Highest expense on day: ${highestDayIndex}
Amount: ${highestExpense}
`);