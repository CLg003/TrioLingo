import { useState } from 'react';
import React from 'react';
import Colour from './Colour';
import DropZone from './DropZone';
import Quiz from './Quiz';
import './DragDrop.css';


const DragDrop = ({words}) => {

    const [showQuiz, setShowQuiz] = useState(false); // SHOULD DEFAULT TO FALSE
    const [resetBoard, setResetBoard] = useState(true); // SHOULD DEFAULT TO TRUE

    // NEED AN ARRAY OF THE COLOURS FOR DnD
    const colourList = [words.black, words.blue, words.brown, words.green, words.orange, words.purple, words.red, words.white, words.yellow];

    // ADDING ID PROPERTY
    colourList[0]['id'] = 0;
    colourList[1]['id'] = 1;
    colourList[2]['id'] = 2;
    colourList[3]['id'] = 3;
    colourList[4]['id'] = 4;
    colourList[5]['id'] = 5;
    colourList[6]['id'] = 6;
    colourList[7]['id'] = 7;
    colourList[8]['id'] = 8;

    const handleQuizClick = () => {
        setShowQuiz(true);
    }

    const handleResetClick = () => {
        setResetBoard(true);
    }

    const boardHasItems = () => {
        setResetBoard(false);
    }

    if (showQuiz) {
        return (
            <Quiz wordList={colourList}/>
        );
    } else if (!showQuiz) {
        return (
            <>
                <div className="lesson-content">
                    <div id="lesson-header">
                        <h2 id="topic-heading">Lesson 2: Colours</h2>
                        <p>You aced that numbers quiz, well done! Now that you've mastered your Spanish "uno, dos, tres", let's see how you get on with some colours... </p>
                        <div id="instructions">
                            <h4>Instructions: </h4>
                            <p>Can you match the paints to the Spanish colours? Click and drag each paint can to the word that you think matches!</p>
                        </div>
                        <div className="audio-instructions">
                            <img className="audio-icon" src={`${process.env.PUBLIC_URL}/assets/images/icons8-audio-96.png`}/>
                            <p>Click on the paint cans to hear the words!</p>
                        </div>
                    </div>
                    <div id="paints-and-board">
                        <div className="dnd-colours">
                            {colourList.sort(function(a, b){return 0.5 - Math.random()}).map((colour) => {
                                return <Colour name={colour.english} img={colour.img} id={colour.id} key={colour.id} />
                            })}
                        </div>
                        <div className="dnd-board">
                            {colourList.sort(function(a, b){return 0.5 - Math.random()}).map((colour) => {
                                return <DropZone key={colour.id} type={colour.english} name={colour.english} img={colour.img} id={colour.id} spanish={colour.translation} colourList={colourList} resetBoard={resetBoard} boardHasItems={boardHasItems} />
                            })}
                        </div>
                    </div>
                    <button id="reset-drag-n-drop" onClick={handleResetClick}>Reset Board</button>
                    <div id="know-your-colours">
                        <p id="take-the-quiz">Do you think you know the colours in Spanish? </p>
                        <button id="take-quiz-button" onClick={handleQuizClick}>Take the quiz!</button>
                    </div>
                </div>
            </>
        );
    }
}

export default DragDrop;