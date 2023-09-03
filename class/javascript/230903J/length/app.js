let animal = "dumboOctopus";
console.log(animal);

animal.length; // 12

let firstName = "lee";
let lastName = "woobin";

console.log(firstName + lastName); // leewoobin

console.log(firstName + " " + lastName); // lee woobin -> ES5

console.log(`${firstName} ${lastName}`); // lee woobin -> ES6

let fullName = `${firstName} ${lastName}`;

console.log(fullName);
