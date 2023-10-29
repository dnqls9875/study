const scores = [1, 2, 3, 4, 5, 6, 7];

const [gold, silver, bronze, ...other] = scores;

const user = {
  emali: "dnqls9874@naver.com",
  password: "dn12ql34!",
  firstName: "Lee",
  lastName: "woobin",
  born: 1995,
  month: "12월",
  bio: "Harvey Bernard Milk was an American politician and the first openly",
  city: "양주",
  state: "양주토박이",
};

// const user2 = {
//   emali: "thgus4080@naver.com",
//   firstName: "Park",
//   lastName: "SoHyeon",
//   born: 1995,
//   month: "4월",
//   city: "양주",
//   state: "창원",
// };

const { emali, firstName, lastName, city, bio, ...everyone } = user;
const { born: birthYear, state: stayHere } = user;

// const { emali: 전자메일, firstName: 성, lastName: 이름, month: 생일 } = user2;

// function fullName(user) {
//   return `${user.firstName} ${user.last}`;
// }

// function fullName(user) {
//   const { firstName, lastName } = user;
//   return `${firstName} ${lastName}`;
// }

function fullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

const movies = [
  {
    title: "Amadeus",
    score: 99,
    year: 1984,
  },
  {
    title: "Sharknado",
    score: 35,
    year: 2013,
  },
  {
    title: "13 Going On 30",
    score: 70,
    year: 2004,
  },
  {
    title: "Stand By Me",
    score: 85,
    year: 1986,
  },
  {
    title: "Waterworld",
    score: 62,
    year: 1995,
  },
  {
    title: "Jingle All The Way",
    score: 71,
    year: 1996,
  },
  {
    title: "Parasite",
    score: 95,
    year: 2019,
  },
  {
    title: "Notting Hill",
    score: 77,
    year: 1999,
  },
  {
    title: "Alien",
    score: 90,
    year: 1979,
  },
];

// movies.filter((movie) => movie.score >= 90);
// movies.filter(({ score }) => score >= 90);

// movies.map((movie) => {
//   return `${movie.title} (${movie.year}) is rated ${movie.score}`;
// });

movies.map(({ title, score, year }) => {
  return `${title} (${year}) is rated ${score}`;
});
