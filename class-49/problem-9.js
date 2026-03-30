const age = parseInt(prompt("Enter your Age:"));
const isStudent = prompt("Are you a student?(yes/no)").toLowerCase();







if (isNaN(age) || age < 0 || age > 100) {
    alert("Invalid age.");
}
else if (isStudent !== "yes" && isStudent !== "no") {
    alert("invalid student status");
} else {
    if (age < 18) {
        if (isStudent === "yes") {
            alert("50% discount");
        } else {
            alert("30% discount");
        }
    } else {
        if (isStudent === "yes") {
            alert("20% discount")
        } else {
            alert("No discount");
        }
    }
}



/*
---------------------------------------
Desktop Test
---------------------------------------

age = 16     isStudent = yes
=> 50% discount

age = 16     isStudent = no
=> 30% discount

age = 25     isStudent = yes
=> 20% discount

age = 25     isStudent = no
=> No discount

age = -3     isStudent = yes
=> Invalid age.

age = 120    isStudent = no
=> Invalid age.

age = "hello"   isStudent = yes
=> Invalid age.

age = 17     isStudent = maybe
=> Invalid student status

age = 30     isStudent = student
=> Invalid student status

---------------------------------------
*/