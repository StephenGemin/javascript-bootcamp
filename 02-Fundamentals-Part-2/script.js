"use strict";

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/
/*
let calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3

function checkWinner(avgDolphins, avgKoalas) {
    console.log(`Dolphins ${avgDolphins}, Koalas ${avgKoalas}`)
    if (avgDolphins >= 2 * avgKoalas) {
        console.log("Dolphins win")
    }
    else if (avgKoalas >= 2 * avgDolphins) {
        console.log("Koalas win")
    }
    else {
        console.log("No winner")
    }
}

let d_1 = calcAverage(44, 23, 71)
let k_1 = calcAverage(65, 54, 49)
let d_2 = calcAverage(85, 54, 41)
let k_2 = calcAverage(23, 34, 27)

checkWinner(d_1, k_1)
checkWinner(d_2, k_2)
*/

///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/
let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let totals = [];
let tips = [];

function calcAverage(arr) {
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  return total / arr.length;
}

function calcTip(amount) {
  // let arr = []
  let amountInRange = amount >= 50 && amount <= 300;
  let tip = amountInRange ? 0.15 : 0.2;
  // arr.push([amount, amountInRange, tip])
  console.log(`Amount: ${amount}, inRange: ${amountInRange}, tip: ${tip}`);
  // console.table(arr)
  return amount * tip;
}

console.log(calcAverage(bills));

let caseList = [];
for (let bill of bills) {
  let tip = calcTip(bill);
  let total = bill + tip;
  caseList.push([bill, tip, total]);
}

console.log("Case table");
console.table(caseList);

let y = caseList.cop;
let z = caseList[0].reverse();
console.log(z);
console.log(caseList[0]);
