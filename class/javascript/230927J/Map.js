const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const doubles = numbers.map(function (num) {
  return num * 2;
});

const movies = [
  { title: "Amadeus", score: 99 },
  { title: "Stand By me", score: 85 },
  { title: "Parasite", score: 95 },
  { title: "Alien", score: 90 },
];

const movieTit = movies.map(function (movie) {
  return movie.title;
});

// const newMovies = movies.map(function (movie) {
//   return `${movie.title} - ${movie.score / 10}`;
// });

const newMovies = movies.map((movie) => {
  `${movie.title} - ${movie.score / 10}`;
});

const fullNames = [
  { fullName: "Hagrid", last: "Dumbledore" },
  { first: "Harry", last: "Potter" },
  { first: "Hermione", last: "Granger" },
  { first: "Ron", last: "Weasley" },
  { first: "Rubeus", last: "Hagrid" },
  { first: "Minerva", last: "McGonagall" },
  { first: "Severus", last: "Snape" },
];

const firstNames = fullNames.map(function (fsn) {
  return fsn.first.toUpperCase();
});

// const firstNames = fullNames.map((fsn) => {
//   return fsn.first.toUpperCase();
// });

// const add = function (x, y) {
//   return x + y;
// };

// const add = (x, y) => {
//   return x + y;
// };

const square = (x) => {
  return x ** 3;
};

const greet = (name) => {
  return `Hey ${name}!`;
};
