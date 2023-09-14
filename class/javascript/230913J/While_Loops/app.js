let count = 0;
while (count < 10) {
  count++;
  console.log(count);
}

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

const secret = "비계 가득 한방보쌈";

let guess = prompt("이주현 그의 입맛을 맞춰보세요");

while (guess !== secret) {
  guess = prompt("아니에요.. 틀렸어요");
}

console.log("돈까스 먹을 때 지그시 음미하는 남자");
