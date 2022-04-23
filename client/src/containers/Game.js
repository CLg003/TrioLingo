import { useEffect, useState } from "react";
import SingleCard from "../components/SingleCard";


const cardImages = [
    {"src": "/img/manzanaa.png" , matched: false , name: "manzana"},
    {"src": "/img/bus.png" , matched: false , name: "bus"},
    {"src": "/img/pez.png" , matched: false , name: "pez"},
    {"src": "/img/rojo.png" , matched: false , name: "rojo"},
    {"src": "/img/tres.png" , matched: false , name: "tres"},
    {"src": "/img/perro.png" , matched: false , name: "perro"},
    {"src": "/img/manzana.png" , matched: false , name: "manzana"},
    {"src": "/img/autobusp.png" , matched: false , name: "bus"},
    {"src": "/img/pezp.png" , matched: false, name: "pez"},
    {"src": "/img/rojop.png" , matched: false , name: "rojo"},
    {"src": "/img/tresp.png" , matched: false, name: "tres"},
    {"src": "/img/perrop.png" , matched: false, name: "perro"}
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
            <button onClick = {shuffleCards}> New Game </button>
            <p>Turns: {turns} </p>
            <div className="card-grid">
                {cards.map(card => (
                    <SingleCard 
                    key = {card.id} 
                    card={card} 
                    handleChoice={handleChoice} 
                    flipped={card === choiceOne ||
                    card === choiceOne || card.matched}
                    disabled={disabled} />
                ))}

            </div>
        </div>

    );
}

export default Game;