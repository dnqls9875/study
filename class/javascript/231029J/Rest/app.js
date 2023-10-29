// function sum() {
//   return arguments.reduce((total, el) => total + el);
// }

// function sum(...nums) {
//   return num.reduce((total, el) => total + el);
// }

// ! 매개변수에서 화살표 함수는 사용 할 수 없음
function raceReuslts(gold, sliver, ...everyoneElse) {
  console.log(`GOLD MEDALS GOES TO: ${gold}`);
  console.log(`SILVER MEDALS GOES TO: ${sliver}`);
  console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`);
}
