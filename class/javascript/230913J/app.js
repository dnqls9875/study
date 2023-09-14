// function strObj(radius) {
//   this.radius = radius;
//   // this.getRadius = function () {
//   //   return this.radius * 2;
//   // };

//   strObj.prototype.getRadius = function () {
//     return this.radius * 2;
//   };
// }

// const strObj1 = new strObj(10);

// console.log(strObj1.getRadius());

// var value = 1;

// const obj = {
//   value: 100,
//   foo() {
//     console.log("foo's this:", this);
//     console.log("foo's this.value:", this.value);

//     function bar() {
//       console.log("bar's this:", this);
//       console.log("bar's this.value:", this.value);
//     }
//     bar();
//   },
// };

// obj.foo();

function Person(name) {
  this.name = name;
  Person.prototype.getName = function () {
    return this.name;
  };
}

const me = new Person("Lee Woo Bin");

console.log(me.getName());

Person.prototype.name = "Kim Woo Bin";

console.log(Person.prototype.getName());

// const arr = [1, 2];

// const plus = arr.push(3, 4);
// console.log(arr);

// const arr = [1, 2];

// arr[arr.length] = 3;
// console.log(arr);

// ES6 문법
const arr = [1, 2];

const newArr = [...arr, 3];
console.log(newArr);

const animals = ["tiger", "monkey", "Lion"];

// for (let i = 0; i < animals.length; i++) {
//   console.log(i, animals[i]);
// }

for (let i = animals.length - 1; i >= 0; i--) {
  console.log(i, animals[i]);
}

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].toUpperCase());
}

str = "LOL";

for (let i = 1; i <= 10; i++) {
  console.log(`i is: ${i}`);
  for (let j = 1; j <= 3; j++) {
    console.log(`    j is : ${j}`);
  }
}
