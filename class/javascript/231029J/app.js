// function rollDie(numSides) {
//   if (numSides === undefined) {
//     numSides = 6;
//   }
//   return Math.floor(Math.random() * numSides + 1);
// }

function rollDie(numSides = 6) {
  return Math.floor(Math.random() * numSides + 1);
}

// 매개변수로 지정하는 것은 첫번째가 아닌 두번째, 세번째에 넣어둘 것
function greet(name, msg = "Hi there", func = "!") {
  return `${msg}, ${name}${func}`;
}
