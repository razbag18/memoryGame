const cardArray = [
  {
    name: "fries",
    img: "images/fries.jpeg",
  },
  {
    name: "burger",
    img: "images/burger.jpeg",
  },
  {
    name: "hotdog",
    img: "images/hotdog.jpeg",
  },
  {
    name: "icecream",
    img: "images/icecream.jpeg",
  },
  {
    name: "milkshake",
    img: "images/milkshake.jpeg",
  },
  {
    name: "pizza",
    img: "images/pizza.jpeg",
  },
  {
    name: "fries",
    img: "images/fries.jpeg",
  },
  {
    name: "burger",
    img: "images/burger.jpeg",
  },
  {
    name: "hotdog",
    img: "images/hotdog.jpeg",
  },
  {
    name: "icecream",
    img: "images/icecream.jpeg",
  },
  {
    name: "milkshake",
    img: "images/milkshake.jpeg",
  },
  {
    name: "pizza",
    img: "images/pizza.jpeg",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");

let cardsChosen = [];

let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/back.jpeg", "");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.append(card);
  }
}

createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("#grid img");
  const cardOne = cardsChosenIds[0];
  const cardTwo = cardsChosenIds[1];
  if (cardsChosen[0] == cardsChosen[1]) {
    alert("You found a match!");
    cards[cardOne].setAttribute("src", "images/white.png");
    cards[cardTwo].setAttribute("src", "images/white.png");
    cards[cardOne].removeEventListener("click", flipCard);
    cards[cardTwo].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[cardOne].setAttribute("src", "images/back.jpeg");
    cards[cardTwo].setAttribute("src", "images/back.jpeg");
  }
  cardsChosen = [];
  cardsChosenIds = [];
}

function flipCard() {
  const cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length == 2) {
    setTimeout(checkMatch, 500);
  }
}
