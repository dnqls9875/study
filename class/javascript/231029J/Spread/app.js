// & spread는 ...으로 표현

const cats = ["Blue", "Scout", "Rocket"];
const dogs = ["Rusty", "Wyatt"];

const allPets = [...dogs, ...cats];

const feline = { legs: 4, family: "Felidae" };
const canine = { isFurry: true, family: "Caninae" };

// family 가 충돌이 나기 때문에 catDog에서 자바스크립트가 위에서 아래로 읽는 특성 상
// 나중에 쓰인 canine -> family 적용

const catDog = { ...feline, ...canine };

const dataFromForm = {
  email: "dnqls9875@gmail.com",
  password: "dn12ql34~!",
  username: "우빈",
};

const newData = { ...dataFromForm, id: "우빈짱", isAdmin: false };
