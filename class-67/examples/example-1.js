/*
PROBLEM 1 — PRINT NUMBERS FROM 1 TO 10

Description:
Write a program that prints the numbers from 1 to 10 using a while loop.

Requirements:
- Start with a variable initialized to 1.
- Use a while loop that runs while the number is less than or equal to 10.
- Print each number to the console.
- Increase the number after each iteration.

Expected Output:
1
2
3
4
5
6
7
8
9
10
*/
console.log("Program - start");
let number = 1;
while(number <= 10){
    console.log(`The number are ${number}`);
    number++;
}
console.log("Program - End");
/*
PROBLEM 2 — SUM NUMBERS FROM 1 TO 5

Description:
Write a program that calculates the sum of the numbers 
from 1 to 5 using a while loop.

Requirements:
- Create a variable to store the total sum.
- Start a counter at 1.
- Use a while loop that runs until the counter reaches 5.
- Add the counter value to the total during each iteration.
- Print the final result.

Expected Output:
Total Sum: 15
*/
console.log("Program - start");
let counter = 1;
let sum = 0;
while (counter <= 5){
// sum = sum + counter;
sum += counter;
counter++;
}
console.log(`
    *********************************
    The Total of the sum is: ${sum}
    *********************************
    `);
console.log("Program - Finish");
/*
PROBLEM 3 — COUNTDOWN FROM 10 TO 1

Description:
Write a program that prints a countdown from 10 to 1 using a while loop.

Requirements:
- Start with a variable equal to 10.
- Use a while loop that runs while the number is greater than or equal to 1.
- Print the number in each iteration.
- Decrease the number by 1 each time.

Expected Output:
10
9
8
7
6
5
4
3
2
1
*/
console.log("***********************");
console.log("Program - start");
console.log("***********************");
let countdown = 10;

while(countdown >= 1){
    console.log(`The countdown is:${countdown}`);
countdown--;
}
console.log("***********************");
console.log("Program - Finish");
console.log("***********************");