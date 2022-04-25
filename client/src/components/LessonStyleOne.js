import './lessonstyleone.css';
import React from "react";
import {useToggle} from './../hooks.js'
import {useSound} from 'use-sound';
import numbersSound from '../sound/0_to_10.mp4';
import Quiz from './Quiz';


const LessonStyleOne = ({words}) => {

    let [toggleState, toggle] = useToggle();
    let [showLesson, showQuiz] = useToggle();

    const numberWords = [words.zero, words.one, words.two, words.three, words.four, words.five, words.six, words.seven, words.eight, words.nine, words.ten]

    const [play] = useSound(numbersSound, {
        sprite : {
            zero: [0, 2000],
            one : [3000, 2000],
            two: [6000, 2000],
            three: [9000, 2000],
            four: [11500, 2000],
            five: [14000, 2000],
            six: [17000, 2000],
            seven: [20000, 2000],
            eight: [23500, 2000],
            nine: [27000, 2000],
            ten: [29500, 2000]
        }
    });

    const numberNodes = numberWords.map( (word) => {
        return (
            <li>
                <div 
                className={ toggleState? 'number-item' : `${word.english}`}
                onAnimationStart={()=>play( {id: `${word.english}`})}>                    
                    <img className="number-images" src={`${process.env.PUBLIC_URL}${word.img}`} alt={`number ${word.english} icon`}/>

                    {!toggleState? <h3>{word.translation}</h3> : <h3>{word.english}</h3> }
                </div>
            </li>
        )
    })

    if (!showLesson ) {
        return (
        <Quiz wordList={numberWords} />
        )
    } else {
        return(
            <div >
            <h2>Lesson 1: Numbers</h2>
            <p>Learn numbers 0 - 10 in spanish!</p>
            <p>Press the 'translate' button to get started.</p>
            <p>Tip: turn on your volumn to hear the words.</p>
            <ul className='numbers'>
                {numberNodes} 
            </ul>
            <div>
                <button onClick={toggle}  disabled={!toggleState}>
                    Translate
                </button>
            </div>
            <div> 
            <button onClick={showQuiz}>
                Quiz Yourself!
            </button></div>
            </div>
        )
    }
    
    
};

export default LessonStyleOne;