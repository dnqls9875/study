const btn = document.querySelector("button");
const h1 = document.querySelector("h1");

btn.addEventListener("click", function () {
  document.body.style.backgroundColor = makeRandomColor();
  h1.innerText = makeRandomColor();
});

const makeRandomColor = function () {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};
