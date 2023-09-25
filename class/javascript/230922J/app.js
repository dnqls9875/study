function singSong() {
  console.log("DO");
  console.log("RE");
  console.log("MI");
}

function greet(firstName, lastName) {
  console.log(`안녕 어서와 : ${firstName} ${lastName[0]}.`);
}

// greet("Geroge", "Clooney");

function repeat(str, numTimes) {
  let result = "";
  for (let i = 0; i < numTimes; i++) {
    result += str;
  }
  console.log(result);
}

function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    return false;
  }
  return x + y;
}

function multiply(firstNum, secondNum) {
  return firstNum * secondNum;
}

function isShortsWeather(tmp) {
  if (tmp >= 75) {
    return true;
  } else {
    return false;
  }
}

function lastElement(arr) {
  if (arr.length === 0) {
    return null;
  } else {
    return arr[arr.length - 1];
  }
}

function capitalize(arr) {
  return arr[0].toUpperCase() + arr.slice(1);
}

console.log(capitalize("element"));

function sumArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log(sumArray([12, 13, 5]));

let week = [
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
  "일요일",
];

function returnDay(day) {
  if (day < 1 || day > 7) {
    return null;
  } else {
    return (day = week[day - 1]);
  }
}

console.log(returnDay(0));
console.log(returnDay(1));
console.log(returnDay(2));
console.log(returnDay(3));
console.log(returnDay(4));
console.log(returnDay(5));
console.log(returnDay(6));
console.log(returnDay(7));
console.log(returnDay(8));

function sumArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log(sumArray([4, 4, 4, 5, 2, 2]));
