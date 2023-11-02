// const form = document.querySelector("#shelterForm");
// const input = document.querySelector("#dogName");
// const list = document.querySelector("#dogs");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const dogName = input.value;
//   const newLI = document.createElement("LI");
//   newLI.innerText = dogName;
//   list.appendChild(newLI);
//   input.value = "";
// });

// const tweetForm = document.querySelector("#tweetForm");
// const tweetContainer = document.querySelector("#tweets");

// tweetForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const usernameInput = tweetForm.elements.username;
//   const tweetInput = tweetForm.elements.tweet;
//   addTweet(usernameInput.value, tweetInput.value);
//   usernameInput.value = "";
//   tweetInput.value = "";
// });

// const addTweet = (username, tweet) => {
//   const newTweet = document.createElement("li");
//   const bTag = document.createElement("b");
//   bTag.append(username);
//   newTweet.append(bTag);
//   newTweet.append(`- ${tweet}`);
//   tweetContainer.append(newTweet);
// };

const form = document.querySelector("form");
const list = document.querySelector("#list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const productInput = form.elements.product;
  const qtyInput = form.elements.qty;
  addProduct(productInput.value, qtyInput.value);
  productInput.value = "";
  qtyInput.value = "";
});

const addProduct = (product, qty) => {
  const li = document.createElement("li");
  li.innerText = `${qty} ${product}`;
  list.appendChild(li);
};
