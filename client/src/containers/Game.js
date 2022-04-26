import React, { useEffect, useState } from 'react';
import SingleCard from "../components/SingleCard";



const cardImages = [
    {"src": "/assets/images/animals/icons8-kawaii-dinosaur-96.png" , matched: false , name: "dinosaurio"},
    {"src": "/assets/images/animals/dinosaurio.png" , matched: false , name: "dinosaurio"},
    {"src": "/assets/images/animals/icons8-penguin-96.png" , matched: false , name: "pinguino"},
    {"src": "/assets/images/animals/pinguino.png" , matched: false , name: "pinguino"},
    {"src": "/assets/images/colours/icons8-fill-color-96PURPLE.png" , matched: false , name: "morado"},
    {"src": "/assets/images/colours/moradop.png" , matched: false , name: "morado"},
    {"src": "/assets/images/colours/verdep.png" , matched: false , name: "verde"},
    {"src": "/assets/images/colours/icons8-fill-color-96GREEN.png" , matched: false , name: "verde"},
    {"src": "/assets/images/numbers/004-4.png" , matched: false , name: "cuatro"},
    {"src": "/assets/images/numbers/004-4p.png" , matched: false , name: "cuatro"},
    {"src": "/assets/images/numbers/008-8.png" , matched: false , name: "ocho"},
    {"src": "/assets/images/numbers/008-8p.png" , matched: false , name: "ocho"}
]


function Game() {

    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)

//a state for each card choice the user makes
    const [choiceOne , setChoiceOne] = useState(null)
    const [choiceTwo , setChoiceTwo] = useState(null)

//we want to disable the cards so we do not confuse the users by how many times a card can be
// clickable

    const [disabled, setDisabled] = useState(false)

//shuffle cards function
    const shuffleCards = () => {
        const shuffledCards = [...cardImages]
        // the sort method will fire a function for each pair of item of
        // item on the array and inside function if we return a number less 
        // than 0 the odd of those 2 items will stay the same. if we return 
        // greater than 0 the odd will be mixed up / Math.random will give us a random number. the end result will be a shuffled array with a random id
        .sort(() => Math.random() - 0.5)
        .map((card) => ({...card , id: Math.random()}))

        setChoiceOne(null)
        setChoiceTwo(null)

        setCards(shuffledCards)
        setTurns(0)
    }

    // console.log(cards, turns)

    //handle a choice
    const handleChoice = (card) => {
        // console.log(card)
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }

    //compare 2 selected cards
    useEffect(() => {
        if (choiceOne && choiceTwo) {
    //cards are disabled to true after the user makes 2 choices, 
    // meaning the user cannot click a 3rd choice" 
            setDisabled(true)

            if (choiceOne.name === choiceTwo.name) {
                // console.log("Those cards match")
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if (card.name === choiceOne.name) {
                            return {...card, matched :true}
                        }else {
                            return card
                        }
                    })
                })
                resetTurn()
            }else{
                // console.log("Those card do not match")
                //this settimeout will delay the card by 1000miliseconds(a second) to turn if do not macth
                setTimeout(() => resetTurn(), 1000)
            }
        }

    },[choiceOne,choiceTwo])
    console.log(cards)

    //reset choices and increase turn
    const resetTurn = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurns(prevTurns => prevTurns + 1)
        setDisabled(false)
    }

    //start a new game automatically
    useEffect(() => {
        shuffleCards()
    } , [])

    return (
        <div className="Game">
            <h1> Test your Memoria </h1>
            <h3>Your goal is to remember which image matches its word in Spanish. If the cards do not match,
                they will get flipped after a second. Click on the button to shuffle the cards again and start a new game.</h3>
            <button onClick = {shuffleCards}> New Game </button>
            <p>Turns: {turns} </p>
            <div className="card-grid">
                {cards.map(card => (
                    <SingleCard 
                    key = {card.id} 
                    card={card} 
                    handleChoice={handleChoice} 
                    flipped={card === choiceOne ||
                    card === choiceTwo || card.matched}
                    disabled={disabled} />
                ))}

            </div>
        </div>

    );
}

export default Game;