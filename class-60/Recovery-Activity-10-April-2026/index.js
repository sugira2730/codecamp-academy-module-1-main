//AUTHOR SUGIRA EMMANUEL <Sugira2730>
//Recovery Activity using if-else conditionals
// Request the user data

const grade = 85;

// Data validation

if (grade >= 90 && grade <= 100) {
    console.log("Final grade: " + grade);
    console.log("result = Passed with Honors");
} else if (grade >= 70 && grade <= 89) {
    console.log("Final grade: " + grade);
    console.log("result = Passed ");

} else if (grade >= 50 && grade <= 69) {
    console.log("Final grade: " + grade);
    console.log("result = Remedial Exam Required");
} else if (grade <= 50) {
    console.log("result = Fail");


}


/*
---------------------------------------
Desktop Test
An online learning platform evaluates whether a student **passes, fails, or earns honors** in a course based on their **final grade**.

---------------------------------------

Case 1
grade = 85 → Pass
output
grade >= 85 
Result: Passed

---------------------------------------
*/