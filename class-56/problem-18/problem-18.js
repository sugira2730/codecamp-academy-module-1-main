
//EMMANUEL SUGIRA <sugira2730>
// User inputs and variable declaration

const level = parseInt(prompt("Enter player level:"));
const vip = prompt("Is the player VIP? (yes or no):").toLowerCase();

// Validate player level
//Conditionals
if (isNaN(level)) {
    alert("The player level should be a number.");
} else if (vip !== "yes" && vip !== "no") {
    alert("Invalid vip status.");
} else if (level < 1) {
    alert("Invalid player level.");
} else {
    // First condition: level requirement
    if (level >= 10) {
        alert("Access granted.");
    } else {
        // Nested condition: VIP check and output
        if (vip === "yes") {
            alert("Access granted.");
        } else {
            alert("Access denied.");
        }
    }
}

/*
---------------------------------------
Desktop Test
---------------------------------------

level = "efg"      vip = yes
parseInt("efg") → NaN
isNaN(level) → true

=> The player level should be a number.


level = 5      vip = maybe
isNaN(level) → false
vip !== "yes" && vip !== "no" → true

=> Invalid vip status.


level = -2     vip = yes
isNaN(level) → false
vip valid → yes
level < 1 → true

=> Invalid player level.


level = 12     vip = no
isNaN(level) → false
vip valid → yes
level < 1 → false

level >= 10 → true

=> Access granted.


level = 7      vip = yes
isNaN(level) → false
vip valid → yes
level < 1 → false

level >= 10 → false
vip === "yes" → true

=> Access granted.


level = 7      vip = no
isNaN(level) → false
vip valid → yes
level < 1 → false

level >= 10 → false
vip === "yes" → false

=> Access denied.
*/