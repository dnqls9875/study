// 배열 접근 메서드

const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

// forEach     // 홀수만 보여지게 하는 방법
numbers.forEach(function (element) {
  if (element % 3 === 0) {
    console.log(element);
  }
});

// for of

// for (let el of numbers) {
//   console.log(el);
// }

const movies = [
  { title: "Amadeus", score: 99 },
  { title: "Stand By me", score: 85 },
  { title: "Parasite", score: 95 },
  { title: "Alien", score: 90 },
];

// movies.forEach(function (movie) {
//   console.log(`${movie.title} - ${movie.score}/100`);
// });

// for (const movie of movies) {
//   console.log(`${movie.title} - ${movie.score}/100`);
// }

const movieTit = movies.map(function (movie) {
  return movie.title;
});
