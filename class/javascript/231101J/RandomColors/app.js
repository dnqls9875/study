// 1. btn 선택
// 2. h1 선택

// 3. btn 클릭시 이벤트 함수 생성
// 클릭 시 랜덤 컬러 변경
// h1 텍스트 변경

// 4. 랜덤 컬러 함수 생성

// const button = document.querySelector("button");
// const h1 = document.querySelector("h1");
// const body = document.querySelector("body");

// const colorSelectorBtn = () => {
//   body.style.backgroundColor = randomColor();
//   h1.innerText = randomColor();
// };

// const randomColor = () => {
//   const r = Math.floor(Math.random() * 255);
//   const g = Math.floor(Math.random() * 255);
//   const b = Math.floor(Math.random() * 255);
//   return `rgb(${r},${g},${b})`;
// };

// button.addEventListener("click", colorSelectorBtn);

const select = document.querySelector("select");
const html = document.querySelector("html");
document.body.style.padding = "10px";

function colorSelector(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.onchange = function () {
  if (select.value === "black") {
    colorSelector("black", "white");
  } else {
    colorSelector("white", "black");
  }
};
