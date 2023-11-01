const container = document.querySelector("#container");
const pokeURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i < 1011; i++) {
  const newImg = document.createElement("img");
  const pokemon = document.createElement("div");
  const label = document.createElement("span");
  pokemon.appendChild(label);
  pokemon.appendChild(newImg);
  label.innerText = `#${i}`;

  newImg.src = `${pokeURL}${i}.png`;
  container.appendChild(pokemon);
}
