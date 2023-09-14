// 복습
const names = [
  ["우빈", "소현", "쁘니", "리온"],
  ["엄마", "아빠", "매형"],
  ["장모님", "소진누나", "주현이형", "처남"],
];

for (let i = 0; i < names.length; i++) {
  const row = names[i];
  console.log(` # ${i + 1}`);
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}

const str = "LOL";

for (let i = 0; i <= 4; i++) {
  console.log(`Outer : ${i}`);
  for (let j = 0; j < str.length; j++) {
    console.log(`   Inner : ${str[j]}`);
  }
}

const subscribe = [
  "cooks",
  "sports",
  "file",
  "social",
  "person",
  "wood",
  "coke",
];

// 일반적인 for문

for (let i = 0; i < subscribe.length; i++) {
  console.log(`Visit reddit.com/r/${subscribe[i]}`);
}

// for of 문
for (let sub of subscribe) {
  console.log(`Visit reddit.com/r/${sub}`);
}
