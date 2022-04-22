import { useEffect, useState } from "react";
import SingleCard from "../components/SingleCard";


const cardImages = [
    {"src": "/img/apple.pic.png" , matched: false},
    {"src": "/img/bus.png" , matched: false},
    {"src": "/img/pez.png" , matched: false},
    {"src": "/img/rojo.png" , matched: false},
    {"src": "/img/tres.png" , matched: false},
    {"src": "/img/perro.png" , matched: false},
    {"src": "/img/manzanap.png" , matched: false},
    {"src": "/img/autobusp.png" , matched: false},
    {"src": "/img/pezp.png" , matched: false},
    {"src": "/img/rojop.png" , matched: false},
    {"src": "/img/tresp.png" , matched: false},
    {"src": "/img/perrop.png" , matched: false}
]

// const imagesWords = [
//     {"src": "/img/manzanap.png"},
//     {"src": "/img/autobusp.png"},
//     {"src": "/img/pezp.png"},
//     {"src": "/img/rojop.png"},
//     {"src": "/img/tresp.png"},
//     {"src": "/img/perrop.png"}
// ]

function Game() {

    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)

//a state for each card choice the user makes
    const [choiceOne , setChoiceOne] = useState(null)
    const [choiceTwo , setChoiceTwo] = useState(null)


    const shuffleCards = () => {
        const shuffledCards = [...cardImages , ...cardImages]
        // the sort method will fire a function for each pair of item of
        // item on the array and inside function if we return a number less 
        // than 0 the odd of those 2 items will stay the same. if we return 
        // greater than 0 the odd will be mixed up / Math.random will give us a random number. the end result will be a shuffled array with a random id
        .sort(() => Math.random() - 0.5)
        .map((card) => ({...card , id: Math.random()}))

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
            if (choiceOne.src === choiceTwo.src) {
                // console.log("Those cards match")
                resetTurn()
            }else{
                // console.log("Those card do not match")
                resetTurn()
            }
        }

    },[choiceOne,choiceTwo])

    //reset choices and increase turn
    const resetTurn = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurns(prevTurns => prevTurns + 1)
    }

    return (
        <div className="Game">
            <h1> Test your Memoria </h1>
            <button onClick = {shuffleCards}> New Game </button>

            <div className="card-grid">
                {cards.map(card => (
                    <SingleCard key = {card.id} card={card} handleChoice={handleChoice}/>
                ))}

            </div>
        </div>

    );
}

export default Game;