let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");
const url = "https://api.quotable.io/random";

let getQuote = () => {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok: " + response.status);
      }
      return response.json();
    })
    .then((item) => {
      console.log(item.content);
      console.log(item.author);
      quote.innerText = item.content;
      author.innerText = item.author;
    })
    .catch((error) => {
      console.error("Failed to fetch the quote:", error);
      quote.innerText = "Failed to fetch quote. Try again later.";
      author.innerText = "";
    });
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);
