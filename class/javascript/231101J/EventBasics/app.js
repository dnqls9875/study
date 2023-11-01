const btn = document.querySelector("#v2");

btn.onclick = function () {
  console.log("YOU CLICKED ME!");
  console.log("I HOPE IT WORKED!");
};

function scream() {
  console.log("아~~~~~~~");
  console.log("그만 터치해");
}

btn.onmouseenter = scream;

document.querySelector("h1").onclick = () => {
  alert("you clicked the h1");
};
