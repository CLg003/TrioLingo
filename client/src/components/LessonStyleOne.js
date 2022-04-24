import './lessonstyleone.css';
import React from "react";
import {useToggle} from './../hooks.js'
import {useSound} from 'use-sound';
import numbersSound from '../sound/0_to_10.mp4';
import Quiz from './Quiz';


const LessonStyleOne = ({words}) => {

    let [toggleState, toggle] = useToggle();
    let [showLesson, showQuiz] = useToggle();

    const zero_img = require('../images/numbers/0.png');
    const one_img = require('../images/numbers/001-1.png');
    const two_img = require('../images/numbers/002-2.png');
    const three_img = require('../images/numbers/003-3.png');
    const four_img = require('../images/numbers/004-4.png');
    const five_img = require('../images/numbers/005-5.png');
    const six_img = require('../images/numbers/006-6.png');
    const seven_img = require('../images/numbers/007-7.png');
    const eight_img = require('../images/numbers/008-8.png');
    const nine_img = require('../images/numbers/009-9.png');

    //array for quiz

    const numberWords = [words.zero, words.one, words.two, words.three, words.four, words.five, words.six, words.seven, words.eight, words.nine, words.ten ]
    

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
})



    if (!showLesson ) {
        return (
        <Quiz wordList={numberWords} />
        )
    } else {
        return(
            <div >
            <h3>Numbers Lesson</h3>
            <p>Learn numbers 0 - 10 in spanish!</p>
            <p>Press the 'translate' button to get started.</p>
            <p>Tip: turn on your volumn to hear the words.</p>
            <ul className='numbers'>
                <li>
                    <div 
                    className={ toggleState? 'number-item' : 'zero'}
                    onAnimationStart={()=>play( {id: 'zero'})}>                    
                        <img className="number-images" src={zero_img} alt="number icon"/>
    
                        {!toggleState? <h3>{words.zero.translation}</h3> : <h3>{words.zero.english}</h3> }
                    </div>
                </li>
                <li>
                    <div 
                    className={ toggleState? 'number-item' : 'one'} 
                    onAnimationStart={()=>play( {id: 'one'})}>
                        <img className="number-images" src={one_img} alt="number icon"/>
                        {!toggleState ? <h3>{words.one.translation}</h3> : <h3>{words.one.english}</h3>}
                    </div>
                </li>
                <li>
                    <div 
                    className={ toggleState? 'number-item' : 'two'} 
                    onAnimationStart={()=>play( {id: 'two'})}>
                        <img className="number-images" src={two_img} alt="number icon"></img>
                        {!toggleState ? <h3>{words.two.translation}</h3> : <h3>{words.two.english}</h3>}
                    </div>
                
                </li>
                <li>
                    <div 
                    className={ toggleState? 'number-item' : 'three'}
                    onAnimationStart={()=>play( {id: 'three'})}>
                        <img className="number-images" src={three_img} alt="number icon"></img>
                        {!toggleState ? <h3>{words.three.translation}</h3> : <h3>{words.three.english}</h3>}
                    </div>
                </li>
                <li>
                    <div 
                    className={ toggleState? 'number-item' : 'four'}
                    onAnimationStart={()=>play( {id: 'four'})}>
                        <img className="number-images" src={four_img} alt="number icon"></img>
                        {!toggleState ? <h3>{words.four.translation}</h3> : <h3>{words.four.english}</h3>}
                    </div>
                </li>
                <li>
                    <div 
                    className={ toggleState? 'number-item' : 'five'}
                    onAnimationStart={()=>play( {id: 'five'})}>
                        <img className="number-images" src={five_img} alt="number icon"></img>
                        {!toggleState ? <h3>{words.five.translation}</h3> : <h3>{words.five.english}</h3>}
                    </div>
                </li>
                <li>
                    <div 
                    className={ toggleState? 'number-item' : 'six'}
                    onAnimationStart={()=>play( {id: 'six'})}>
                        <img className="number-images" src={six_img} alt="number icon"></img>
                        {!toggleState ? <h3>{words.six.translation}</h3> : <h3>{words.six.english}</h3>}
                    </div>
                </li>
                <li>
                    <div 
                    className={ toggleState? 'number-item' : 'seven'}
                    onAnimationStart={()=>play( {id: 'seven'})}>
                        <img className="number-images" src={seven_img} alt="number icon"></img>
                        {!toggleState ? <h3>{words.seven.translation}</h3> : <h3>{words.seven.english}</h3>}
                    </div>
                </li>
                <li>
                    <div 
                    className={ toggleState? 'number-item' : 'eight'}
                    onAnimationStart={()=>play( {id: 'eight'})}>
                        <img className="number-images" src={eight_img} alt="number icon"></img>
                        {!toggleState ? <h3>{words.eight.translation}</h3> : <h3>{words.eight.english}</h3>}
                    </div>
                </li>
                <li>
                    <div 
                    className={ toggleState? 'number-item' : 'nine'}
                    onAnimationStart={()=>play( {id: 'nine'})}>
                        <img className="number-images" src={nine_img} alt="number icon"></img>
                        {!toggleState ? <h3>{words.nine.translation}</h3> : <h3>{words.nine.english}</h3>}
                    </div>
                </li>
                <li>
                    <div 
                    className={ toggleState? 'number-item' : 'ten'}
                    onAnimationStart={()=>play( {id: 'ten'})}
                    onAnimationEnd={toggle}>
                        <img className="number-images" src={one_img} alt="number icon"></img>
                        <img className="number-images" src={zero_img} alt="number icon"></img>
                        {!toggleState ? <h3>{words.ten.translation}</h3> : <h3>{words.ten.english}</h3>}
                    </div>
                </li>
    
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