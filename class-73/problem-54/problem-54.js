//Author: Emmanuel Sugira <sugira2730>
//# Challenge: Daily Task Scheduler

let tasks = ["Check emails", "Write report", "Attend meeting", "Review code"];

// 1. Print total number of tasks
console.log(`Total tasks is: ${tasks.length}`);

// 2. Add a new task to the end of list tasks
tasks.push("Plan tomorrow's work");

// 3. Insert a new task at the beginning of list tasks
tasks.unshift("Morning exercise");

// 4. Find position of "Attend meeting"
let position = tasks.indexOf("Attend meeting");
console.log(`Position of 'Attend meeting' is: ${position}`);

// 5. Mark "Attend meeting" as completed
if (position !== -1) {
    tasks[position] = "Attend meeting (Completed)";
}

// 6. Remove "Check emails"
let removeIndex = tasks.indexOf("Check emails");
if (removeIndex !== -1) {
    tasks.splice(removeIndex, 1);
}

// 7. Print all remaining tasks
console.log("\n************************************");
console.log("Tasks for today:");
console.log("************************************");
for (let i = 0; i < tasks.length; i++) {
    console.log(`Task ${i + 1}: ${tasks[i]}`);
}

// 8. Check if "Review code" still exists
console.log("\n****************************************");
console.log("Check if 'Review code' still exists");
console.log("****************************************");

if (tasks.includes("Review code")) {
    console.log("Task still pending");
} else {
    console.log("Task completed or removed");
}