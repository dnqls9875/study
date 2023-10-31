const allLinks = document.querySelectorAll("a");

for (let link of allLinks) {
  link.innerText = "I am A Link!!!";
}

const imgPick = document.querySelector("img");
imgPick.src = "https://devsprouthosting.com/images/chicken.jpg";
imgPick.alt = "chicken";

console.log(imgPick);

const links = document.querySelectorAll("a");

for (let link of links) {
  link.style.color = "green";
  link.style.textDecorationColor = "magenta";
  link.style.textDecorationStyle = "wavy";
}
