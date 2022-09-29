"use strict";

// Learning how to debug in browser
/*
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt("Degrees celsius")),
  };
  const kelvin = measurement.value + 273.15;
  return kelvin;
};

console.log(measureKelvin());
*/

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

let d1 = [17, 21, 23];
let d2 = [12, 5, -5, 0, 4];

function getForecast(arr) {
  let dayCounter = 1;
  for (let temp of arr) {
    let singleForecast = {
      dayNumber: dayCounter,
      temp: temp,
    };
    printForecast(singleForecast);
    dayCounter += 1;
  }
}

function printForecast(forecast) {
  console.log(`${forecast.temp}°C in ${forecast.dayNumber}days`);
}

console.log("Forecast for test data 1");
getForecast(d1);
console.log("Forecast for test data 2");
getForecast(d2);
