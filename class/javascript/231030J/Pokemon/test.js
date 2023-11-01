// const container = document.querySelector("#container"); // container id 값을 불러온다.
// const pokeURL =
//   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"; // 기본 포켓몬 이미지 url

// for (let i = 1; i < 1011; i++) {
//   // 1010마리 포켓몬 모두 보여지게 하는 반복문
//   const pokemon = document.createElement("div"); // div 생성 변수 pokemon
//   const label = document.createElement("span"); // span 생성 변수 label
//   label.innerText = `#${i}`; // span에 #i text 생성

//   const newImg = document.createElement("img"); // img 태그를 생성하는 변수 newImg
//   newImg.src = `${pokeURL}${i}.png`; // pokeURL 변수 반복 (이미지 반복)
//   pokemon.appendChild(label); // 생성된 span 안에 label(span 숫자) 넣기
//   pokemon.appendChild(newImg); // 생성된 div안에 newImg(img) 넣기
//   container.appendChild(pokemon); // container 안에 div(pokemon) 넣기
// }
