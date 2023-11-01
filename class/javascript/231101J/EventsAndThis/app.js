const buttons = document.querySelectorAll("button");
const h1s = document.querySelectorAll("h1");

const makeRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};

const colorRize = function () {
  this.style.backgroundColor = makeRandomColor();
  this.style.color = makeRandomColor();
};

for (let button of buttons) {
  button.addEventListener("click", colorRize);
}

for (let h1 of h1s) {
  h1.addEventListener("click", colorRize);
}
