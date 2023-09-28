// Filter

const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

numbers.filter((n) => {
  return n < 10;
});

const movies = [
  { title: "Amadeus", score: 99, year: 1984 },
  { title: "Stand By me", score: 35, year: 2013 },
  { title: "Parasite", score: 70, year: 2019 },
  { title: "Alien", score: 90, year: 2011 },
  { title: "Notting Hill", score: 77, year: 1999 },
  { title: "기생충", score: 98, year: 2022 },
];

const goodMovies = movies.filter((m) => m.score > 80);

const badMovies = movies.filter((m) => m.score < 70);

const recentMovies = movies.filter((m) => m.year > 2020);

// 화살표 함수
// const goodTitles = goodMovies.map((m) => m.title);

// 함수 표현식
const goodTitles = goodMovies.map(function (movie) {
  return movie.title;
});

// filter, map 같이 쓰는 구문
const moviesG = movies.filter((m) => m.score > 80).map((m) => m.year);

const userNames = [
  { name: "mark" },
  { name: "staceysmom1978" },
  { name: "q29832128238983" },
  { name: "carrie98" },
  { name: "MoanaFan" },
];

const newUserNames = userNames.filter((u) => u.name > 10);

// function validUserNames(usernames) {
//   return usernames.filter(function (username) {
//     return username.length < 10;
//   });
// }
