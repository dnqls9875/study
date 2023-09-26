// let bird = "Scarlet Macaw";
// function birdWatch() {
//   // let bird = "Great Blue Heron"; //
//   console.log(bird); // Scarlet Macaw // 주석 해제하면 Great Blue Heronㄴ
// }

// birdWatch();

// let radius = 8;
// if (radius > 0) {
//   const PI = 3.14159;
//   let msg = "HIII!";
// }

// console.log(radius);
// console.log(msg);

function backRobery() {
  const herose = ["Spiderman", "Wolveringe", "Blakc Pather"];
  function cryForHelp() {
    let color = "purple";
    function inner() {
      for (let hero of herose) {
        console.log(`PLEASE HELP US, ${hero.toLocaleUpperCase}`);
      }
    }
    inner();
  }
  cryForHelp();
}

const add = function (x, y) {
  return x + y;
};
console.log(add(7, 5));

const square = function multiply(num) {
  return num * num;
};

square(4); //16
square(3); //9
