// let random = Math.random();

// if (random < 1) {
//   console.log("동전 앞면");
// } else {
//   console.log("동전 뒷면");
// }

// 0-5 - FREE
// 5-10 CHILD $10
// 10-65 ADULT $20
// 65+ SENIOR $10

const age = 66;

if (age < 5) {
  console.log("you are child is Free");
} else if (age < 10) {
  console.log("you are Upchild is $10");
} else if (age < 65) {
  console.log("you are ADULT is $20");
} else {
  console.log("you are SENIOR is $10");
}

function getColor(phrase) {
  if (phrase === "stop") {
    console.log("red");
  } else if (phrase === "slow") {
    console.log("yellow");
  } else if (phrase === "go") {
    console.log("green");
  } else {
    console.log("purple");
  }
}

// Change the value of num, so that "YOU GOT ME!" prints out
const num = 121; // THIS IS THE ONLY LINE YOU SHOULD CHANGE :)

// DO NOT TOUCH ANYTHING BELOW (please)
if (num <= 100) {
  if (num >= 50) {
    console.log("HEY!");
  }
} else {
  if (num < 103) {
    if (num % 2 === 0) {
      console.log("YOU GOT ME!");
    }
  }
}
