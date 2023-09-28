// setTimeout
console.log("HELLO!!!");
setTimeout(() => {
  console.log("...are you still there?");
}, 3000);

console.log("GOOD BYE!!!");

// setInterval
const id = setInterval(() => {
  console.log(Math.random());
}, 2000);

// 중단
// clearInterval(id);
