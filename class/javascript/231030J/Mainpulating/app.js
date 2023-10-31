// const allLinks = document.querySelectorAll("a");

// for (let link of allLinks) {
//   link.innerText = "I am A Link!!!";
// }

// const imgPick = document.querySelector("img");
// imgPick.src = "https://devsprouthosting.com/images/chicken.jpg";
// imgPick.alt = "chicken";

// console.log(imgPick);

// const links = document.querySelectorAll("a");

// for (let link of links) {
//   link.style.color = "green";
//   link.style.textDecorationColor = "magenta";
//   link.style.textDecorationStyle = "wavy";
// }

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
