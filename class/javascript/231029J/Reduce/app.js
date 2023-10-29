const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

// let total = 0;
// for (let price of prices) {
//   total += price;
// }
// console.log(total);

// const total = prices.reduce((total, price) => {
//   return total + price;
// });

const total = prices.reduce((total, price) => total + price);

const minPrices = prices.reduce((min, price) => {
  if (price < min) {
    return price;
  }
  return min;
});

const numbers = [2, 16, 18, 88, 20];

const totalNums = numbers.reduce((total, price) => {
  return total + price;
});

// 영화 예시
const movies = [
  { title: "Amadeus", score: 99, year: 1984 },
  { title: "Stand By me", score: 35, year: 2013 },
  { title: "Parasite", score: 70, year: 2017 },
  { title: "Alien", score: 90, year: 2011 },
  { title: "Notting Hill", score: 77, year: 1999 },
  { title: "기생충", score: 98, year: 2022 },
];

const bestMovies = movies.reduce((bestMovie, currMovie) => {
  if (currMovie.score > bestMovie.score) {
    return currMovie;
  }
  return bestMovie;
});
