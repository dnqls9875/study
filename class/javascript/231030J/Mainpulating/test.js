// const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
// const rainbow = document.querySelectorAll("span");

// let color = 0;
// for (let pick of rainbow) {
//   pick.style.color = colors[color];
//   color++;
// }

// const change = document.querySelectorAll("li");

// for (let a of change) {
//   a.classList.toggle("highlight");
// }

const getId = document.getElementById("container"); // id가 container를 불러오는 값

// 100번 반복
for (let i = 0; i < 100; i++) {
  const btnElem = document.createElement("button"); // button element를 생성
  btnElem.innerText = "Hey!"; // 생성된 button 안에 Hey!라는 텍스트 추가
  getId.appendChild(btnElem); // id container 그 안에 btnElem 추가
}
