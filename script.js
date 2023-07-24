//starting with 10 lives, you can change to whatever live you like
let playerLives = 10;
const section = document.querySelector("section");
const button = document.querySelector("button"); //restart
const playerLivesCount = document.querySelector("span");

//link text for playerlives
playerLivesCount.textContent = playerLives;

//button of restarting
button.addEventListener("click", function (e) {
  restart("Restarting!");
});

//we generate card options
const getData = () => [
  { name: "a", imgSrc: "a.png" },
  { name: "b", imgSrc: "b.png" },
  { name: "c", imgSrc: "c.png" },
  { name: "d", imgSrc: "d.png" },
  { name: "e", imgSrc: "e.png" },
  { name: "f", imgSrc: "f.png" },
  { name: "g", imgSrc: "g.png" },
  { name: "h", imgSrc: "h.png" },
  { name: "a", imgSrc: "a.png" },
  { name: "b", imgSrc: "b.png" },
  { name: "c", imgSrc: "c.png" },
  { name: "d", imgSrc: "d.png" },
  { name: "e", imgSrc: "e.png" },
  { name: "f", imgSrc: "f.png" },
  { name: "g", imgSrc: "g.png" },
  { name: "h", imgSrc: "h.png" },
];

// getData is stored is Data
// const data =getData();

// randomize the data and return the randomized data
const randomize = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5); //randomizes the data
  return cardData; //returns the new randomized data
};

//Card Generator Function
const cardGenerator = () => {
  const cardData = randomize();

  //Generate the HTML
  cardData.forEach((item) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";

    //attach the info/image to the cards
    face.src = item.imgSrc;
    card.setAttribute("name", item.name); // attach name to the card

    //attach the card to the section
    section.appendChild(card);
    // attach the face to card
    card.appendChild(face);
    // attach the back to card
    card.appendChild(back);

    card.addEventListener("click", handleClick);
  });
};

function handleClick(e) {
  this.classList.toggle("toggleCard");
  checkCards(e);
}

//logic of the Game
// check cards
const checkCards = (e) => {
  console.log(e);
  const clickedCard = e.target; //when we click on the target
  clickedCard.classList.add("flipped"); //adding flipped to clickedcard
  const flippedCards = document.querySelectorAll(".flipped");
  const toggleCard = document.querySelectorAll(".toggleCard");

  console.log(clickedCard);
  console.log(flippedCards);

  //once a card is flipped, its send to flipped card and once the flipped card has
  //2 cards, we check to see if the cards match
  //if it match- we disable the clicker immediately and remove it from the flipped
  //if its not a match- we flip it back from after 1000miliseconds and remove it from flipped

  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
      console.log("Matched!");
      flippedCards.forEach((card) => {
        //   card.classList.add("disable"); //disable the clicker
        card.style.pointerEvents = "none"; // disable the clicker
        // once it's fipped and matched, we cant click on it anymore
        card.classList.remove("flipped");
        // console.log(flippedCards[0]);
      });
    } else {
      console.log("Try Again!");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        //   card.classList.remove("toggleCard");
        setTimeout(() => card.classList.remove("toggleCard"), 1000);
      });

      //loses a life, once the life reach 0, game over
      playerLives--;
      playerLivesCount.textContent = playerLives;
      if (playerLives === 0) {
        restart("you LOST! Try Again!");
      }
    }
  }

  //Check to see if you won the Game
  if (toggleCard.length === 16) {
    restart("YOU WON!");
  }
};

//restart
const restart = (text) => {
  let cardData = randomize();
  let faces = document.querySelectorAll(".face");
  let cards = document.querySelectorAll(".card");
  section.style.pointerEvents = "none";
  cardData.forEach((item, index) => {
    cards[index].classList.remove("toggleCard");
    //randomize
    setTimeout(() => {
       //add pointevent back
      cards[index].style.pointerEvents = "all";
       //change image
      faces[index].src = item.imgSrc;
      //add attribute
      cards[index].setAttribute("name", item.name); 
      section.style.pointerEvents = "all";
    }, 1000);
  });
  playerLives = 10;
  playerLivesCount.textContent = playerLives;
  setTimeout(() => window.alert(text), 100);
};

cardGenerator();
