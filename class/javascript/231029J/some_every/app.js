const exmas = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77];

exmas.every((score) => score >= 75);

const movies = [
  { title: "Amadeus", score: 99, year: 1984 },
  { title: "Stand By me", score: 35, year: 2013 },
  { title: "Parasite", score: 70, year: 2017 },
  { title: "Alien", score: 90, year: 2011 },
  { title: "Notting Hill", score: 77, year: 1999 },
  { title: "기생충", score: 98, year: 2022 },
];

movies.some((movie) => movie.year > 2015);

function allEvens(numbers) {
  return numbers.every((number) => {
    return number % 2 === 0;
  });
}
