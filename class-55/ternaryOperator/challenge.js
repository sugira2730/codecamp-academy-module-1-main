//call challenge on ternaryOperator

console.log("************************");
console.log("Example 6");

let passwordLength = 10;
// Ternary Operator
let validation = passwordLength >= 8 ? "strong password" : "password too short";
console.log("Ternary Operator:");
console.log(validation);
//if else statement
if (passwordLength >= 8) {
  validation = "Strong password";
} else {
  validation = "Password too short";
}
console.log("If - Else statement:");
console.log(validation);

console.log("************************");


console.log("************************");
console.log("Example 7");

let purchaseAmount = 120;
// Ternary Operator
let shipping = purchaseAmount >= 100 ? "Free shipping" : "Shipping cost applies";
console.log("Ternary Operator:");
console.log(shipping);
//if else statement

if (purchaseAmount >= 100) {
  shipping = "Free shipping";
} else {
  shipping = "Shipping cost applies";
}

console.log("If - Else statement:");
console.log(shipping);

console.log("************************");


console.log("************************");
console.log("Example 8");

let hasPermission = false;
// Ternary Operator
let access = hasPermission ? "Access granted" : "Access denied";
console.log("Ternary Operator:");
console.log(access);
//if else statement
if (hasPermission) {
  access = "Access granted";
} else {
  access = "Access denied";
}
console.log("If - Else statement:");
console.log(access);

console.log("************************");


console.log("************************");
console.log("Example 9");

let batteryLevel = 15;
// Ternary Operator
let status = batteryLevel <= 20 ? "Low battery" : "Battery level OK";
console.log("Ternary Operator:");
console.log(status);
//If Else statement
if (batteryLevel <= 20) {
  status= "Low battery";
} else {
   status= "Battery level OK";
}
console.log("If - Else statement:");
console.log(status);

console.log("************************");


console.log("************************");
console.log("Example 10");

let isOnline = false;
// Ternary Operator
let connection = isOnline ? "User is online" : "User is offline";
console.log("Ternary Operator:");
console.log(connection);
//if else statement
if (isOnline) {
  connection = "User is online";
} else {
  connection = "User is offline";
}
console.log("If - Else statement:");
console.log(connection);

console.log("************************");