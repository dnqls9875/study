// function callTwice(func) {
//   func();
//   func();
// }

// function callTenTimes(f) {
//   for (let i = 0; i < 10; i++) {
//     f();
//   }
// }

// function rollDie() {
//   const roll = Math.floor(Math.random() * 6) + 1;
//   console.log(roll);
// }

// callTwice(rollDie);

function makeMysteryFunc() {
  const rand = Math.random();
  if (rand > 0.5) {
    return function () {
      console.log("축하합니다. 좋은 함수네요");
      console.log("백만달러를 획득했어요");
    };
  } else {
    return function () {
      alert("1");
      alert("2");
      alert("3");
      alert("4");
    };
  }
}

function makeBetweenFunc(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}

const myMath = {
  PI: 3.145667,
  square(num) {
    return num * num;
  },
  cube(num) {
    return num ** 3;
  },
};

const cat = {
  name: "Blue Steele",
  color: "gray",
  breed: "scottish fold",
  meow() {
    console.log("THIS IS:", this);
    console.log(`${this.name} says meow meow~~~`);
  },
};

const hen = {
  name: "Helen",
  eggCount: 0,
  layAnEgg: function () {
    this.eggCount++;
    return `EGG`;
  },
};

console.log(hen);
