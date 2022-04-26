import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import ReactModal, { contextType } from "react-modal";
import { useToggle } from "../hooks";
import SingleCard from "../components/SingleCard";

const cardImages = [
  {
    src: "/assets/images/animals/icons8-kawaii-dinosaur-96.png",
    matched: false,
    name: "dinosaurio",
  },
  {
    src: "/assets/images/animals/dinosaurio.png",
    matched: false,
    name: "dinosaurio",
  },
  {
    src: "/assets/images/animals/icons8-penguin-96.png",
    matched: false,
    name: "pinguino",
  },
  {
    src: "/assets/images/animals/pinguino.png",
    matched: false,
    name: "pinguino",
  },
  {
    src: "/assets/images/colours/icons8-fill-color-96PURPLE.png",
    matched: false,
    name: "morado",
  },
  {
    src: "/assets/images/colours/moradop.png",
    matched: false,
    name: "morado",
  },
  {
    src: "/assets/images/colours/verdep.png",
    matched: false,
    name: "verde",
  },
  {
    src: "/assets/images/colours/icons8-fill-color-96GREEN.png",
    matched: false,
    name: "verde",
  },
  {
    src: "/assets/images/numbers/004-4.png",
    matched: false,
    name: "cuatro",
  },
  {
    src: "/assets/images/numbers/004-4p.png",
    matched: false,
    name: "cuatro",
  },
  {
    src: "/assets/images/numbers/008-8.png",
    matched: false,
    name: "ocho",
  },
  {
    src: "/assets/images/numbers/008-8p.png",
    matched: false,
    name: "ocho",
  },
];

function Game() {
  const [toggleState , toggle] = useToggle();

  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  //a state for each card choice the user makes
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  //we want to disable the cards so we do not confuse the users by how many times a card can be
  // clickable

  const [disabled, setDisabled] = useState(false);
  const [matchedCards, setMatchedCards] = useState(0);

  //shuffle cards function
  const shuffleCards = () => {
    const shuffledCards = [...cardImages]
      // the sort method will fire a function for each pair of item of
      // item on the array and inside function if we return a number less
      // than 0 the odd of those 2 items will stay the same. if we return
      // greater than 0 the odd will be mixed up / Math.random will give us a random number. the end result will be a shuffled array with a random id
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);

    setCards(shuffledCards);
    setTurns(0);
  };

  // console.log(cards, turns)

  //handle a choice
  const handleChoice = (card) => {
    // console.log(card)
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  //compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      //cards are disabled to true after the user makes 2 choices,
      // meaning the user cannot click a 3rd choice"
      setDisabled(true);

      if (choiceOne.name === choiceTwo.name) {
        // console.log("Those cards match")
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.name === choiceOne.name) {
              // everytime a card matches, matchedCards increases by 1 until hitting 6 matches
              setMatchedCards(matchedCards + 1);
              if (matchedCards === 5) {
                toggle();
              }
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        // console.log("Those card do not match")
        //this settimeout will delay the card by 1000miliseconds(a second) to turn if do not macth
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);
  console.log(cards);

  //reset choices and increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  //start a new game automatically
  useEffect(() => {
    shuffleCards();
  }, []);


  return (
    <div id="main-container">
      {matchedCards === 6 ? (
        <Confetti
          height={1500}
          numberOfPieces={800}
          gravity={0.05}
          tweenDuration={0.001}
          initialVelocityX={10}
        />
      ) : null}

      <ReactModal
        id="passed-quiz-modal"
        isOpen={!toggleState}
        ariaHideApp={false}
        contentLabel="The End"
      >
        <h2> 🎉 ¡EXCELENTE TRABAJO! 🎉 </h2> <br />{" "}
        <p>
          {" "}
          You did amazing! in 10 years you will smash Spanish! <br />{" "}
        </p>
        <button>The End</button>
      </ReactModal>

      <div id="lesson-header">
        <h2 id="topic-heading"> Test your Memory </h2>
        {/* <p>Look how far you have come!</p> */}
        <div id="instructions">
          <h4>Instructions: </h4>
          <br />
          <p>
            Your goal is to remember which image matches its word in Spanish. If
            the cards do not match, they will get flipped after a second. <br />{" "}
            Click on the button to shuffle the cards again and start a new game.
          </p>
        </div>
      </div>
      <button onClick={shuffleCards}> New Game </button>
      <p id="turns">Turns: {turns} </p>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}

export default Game;
