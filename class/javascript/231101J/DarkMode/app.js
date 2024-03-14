/**
 * 1. select 선택
 * 2. html 선택
 * 3. colorselector 함수 생성 html 배경색을 텍스트색 지정
 * 4. select onchange메서드 이용 함수 if문 이용하여 기능 추가
 */

// const select = document.querySelector("select");
// const html = document.querySelector("html");
// document.body.style.padding = "10px";

// const colorSelector = (bgColor, txtColor) => {
//   html.style.backgroundColor = bgColor;
//   html.style.color = txtColor;
// };

// select.onchange = function () {
//   if (select.value === "black") {
//     colorSelector("black", "white");
//   } else {
//     colorSelector("white", "black");
//   }
// };

var month = 4;
var monthName;

switch (month) {
  case 1:
    monthName = "1월";
    break;
  case 2:
    monthName = "2월";
    break;
  case 3:
    monthName = "3월";
    break;
  case 4:
    monthName = "4월";
    break;
  case 5:
    monthName = "5월";
    break;
  case 6:
    monthName = "6월";
    break;
  case 7:
    monthName = "7월";
    break;
  case 8:
    monthName = "8월";
    break;
  case 9:
    monthName = "9월";
    break;
  case 10:
    monthName = "10월";
    break;
  case 11:
    monthName = "11월";
    break;
  case 12:
    monthName = "12월";
    break;
  default:
    monthName = "기본이다";
    break;
}

console.log(monthName);

for (let i = 1; i <= 6; i++) {
  for (let j = 1; j <= 6; j++) {
    if (i + j == 6) {
      console.log(`[${i},${j}]`);
    }
  }
}
