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
const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenIds = [];
let cardsWon = [];

function createBoard() {
  cardArray.sort(() => 0.5 - Math.random());
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/back.jpeg");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.append(card);
  }
}

createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("#grid img");
  const cardOneId = cardsChosenIds[0];
  const cardTwoId = cardsChosenIds[1];

  const chosenCardOne = cardsChosen[0];
  const chosenCardTwo = cardsChosen[1];

  if (cardOneId == cardTwoId) {
    alert("You can't pick the same card");
    cards[cardOneId].setAttribute("src", "images/back.jpeg");
  } else if (chosenCardOne == chosenCardTwo) {
    if (chosenCardOne == "fries") {
      alert(`You found the ${chosenCardOne}!`);
    } else {
      alert(`You found the ${chosenCardOne}s!`);
    }
    cards[cardOneId].removeEventListener("click", flipCard);
    cards[cardTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[cardOneId].setAttribute("src", "images/back.jpeg");
    cards[cardTwoId].setAttribute("src", "images/back.jpeg");
  }
  resultDisplay.innerHTML = cardsWon.length;
  cardsChosen = [];
  cardsChosenIds = [];

  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.innerHTML = "Congratulations you've found them all";
    let btn = document.createElement("button");
    btn.innerHTML = "Reset Game";
    btn.onclick = function () {
      resetGame(btn);
    };
    resultDisplay.appendChild(btn);
  }
}

function resetGame(btn) {
  const cards = document.querySelectorAll("#grid img");
  cardsWon = [];
  cardsChosen = [];
  cardsChosenIds = [];
  cardArray.sort(() => 0.5 - Math.random());
  cards.forEach((card) => {
    card.setAttribute("src", "images/back.jpeg");
    card.addEventListener("click", flipCard);
    gridDisplay.append(card);
  });
  resultDisplay.innerHTML = "";
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
