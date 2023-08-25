var x = 0;

console.log(typeof x);

0 / 0;

for (let i = 1; i <= 4; i++) {
  for (let j = 0; j <= 4; j++) {
    if (i + j === 4) console.log(`[ ${i} , ${j} ]`);
  }
}

let userInputNumber = 2;
console.log(userInputNumber);

// 식별자 (변수이름)에 is를 붙히면 변수라는 의미가 확실해진다.
let isGameOver = true;
console.log(isGameOver);

const obj = {
  name: "우빈",
};

console.log(obj);
