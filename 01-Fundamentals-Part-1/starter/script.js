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
*/
////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

let d1 = (96 + 108 + 89) / 3
let k1 = (88 + 91 + 110) / 3

let b1_d = (97 + 112 + 101) / 3
let b1_k = (109 + 95 + 123) / 3

let b2_d = (97 + 112 + 101) / 3
let b2_k = (109 + 95 + 106) / 3


function winner1(t1, t2) {
    let minScore = 100

    console.log(`team 1 score: ${t1}, team 2 score: ${t2}, minScore=${minScore}`)
    if (t1 === t2) {
        if (t1 >= minScore && t2 >= minScore) {
            console.log("Draw")
        } else {
            console.log("Same score, but did not meet draw requirements")
        }
    }
    else if (t1 > t2 && t1 >= minScore) {
        console.log("Team 1 wins")
    }
    else if (t2 > t1 && t2 >= minScore) {
        console.log("Team 2 wins")
    }
    else {
        console.log("Nobody wins 🤣")
    }
}

winner1(d1, k1)
winner1(b1_d, b1_k)
winner1(b2_d, b2_k)
