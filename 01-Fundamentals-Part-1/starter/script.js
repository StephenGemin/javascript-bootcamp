/*
////////////////////////////////////
// Linking a JavaScript File
let js = "amazing";
console.log(40 + 8 + 23 - 10);
*/
////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/
/*
let markWeight1 = 78;
let markHeight1 = 1.69;
let johnWeight1 = 92;
let johnHeight1 = 1.95;


let markWeight2 = 95;
let markHeight2 = 1.88;
let johnWeight2 = 85;
let johnHeight2 = 1.76;

let markBmi;
let johnBmi;
let markHigherBMI;



function calculateBmi(mass, height) {
    return mass / (height ** 2)
}

markBmi = calculateBmi(markWeight1, markHeight1)
johnBmi = calculateBmi(johnWeight1, johnHeight1)
markHigherBMI = markBmi > johnBmi
console.log("Mark BMI: " + markBmi)
console.log("John BMI: " + johnBmi)
console.log("Case 1: " + markHigherBMI)

markBmi = calculateBmi(markWeight2, markHeight2)
johnBmi = calculateBmi(johnWeight2, johnHeight2)
markHigherBMI = markBmi > johnBmi
console.log("Mark BMI: " + markBmi)
console.log("John BMI: " + johnBmi)
console.log("Case 2: " + markHigherBMI)
*/

////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/
let markWeight1 = 78;
let markHeight1 = 1.69;
let johnWeight1 = 92;
let johnHeight1 = 1.95;


let markWeight2 = 95;
let markHeight2 = 1.88;
let johnWeight2 = 85;
let johnHeight2 = 1.76;

let markBmi;
let johnBmi;
let markHigherBMI;



function calculateBmi(mass, height) {
    return mass / (height ** 2)
}
function consoleDecision(markBmi, johnBmi) {
    if (markBmi > johnBmi) {
        console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})!`)
    } else {
        console.log(`John's BMI (${johnBmi}) is higher than Mark's (${markBmi})!`)
    }
}
markBmi = calculateBmi(markWeight1, markHeight1)
johnBmi = calculateBmi(johnWeight1, johnHeight1)
console.log("Case 1")
consoleDecision(markBmi, johnBmi)

markBmi = calculateBmi(markWeight2, markHeight2)
johnBmi = calculateBmi(johnWeight2, johnHeight2)
console.log("Case 2")
consoleDecision(markBmi, johnBmi)
