//Lista
const list = document.querySelector("ul");

//Array

const toBuy = [
  "biscotti",
  "pasta",
  "zucchine",
  "peperoni",
  "insalata",
  "latte di soia",
  "cereali",
  "pane",
  "cioccolata",
];

//Index
let i = 0;

//String
let listToBuy = "";

//While iteration

while (i < toBuy.length) {
  listToBuy += `<li>${toBuy[i]}</li>`;
  i++;
}

//Print on page
list.innerHTML = listToBuy;
