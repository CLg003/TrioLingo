import './lessonstyleone.css';
import React, {require} from "react";
import {useToggle} from './../hooks.js'
import {useSound} from 'use-sound';
import zero from '../sound/0.mp4';




const LessonStyleOne = ({words}) => {

    let [toggleState, toggle] = useToggle();

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

    //testing sound play on hover

    const [play, {stop}] = useSound(zero);

    return(
        <div >
        <ul className='numbers'>
            <li>
                <div 
                className={ toggleState? 'number-item' : 'zero'}
                onMouseEnter={play} onMouseLeave={stop}>                    
                    <img className="number-images" src={zero_img} alt="number icon"/>

                    {!toggleState? <h3>{words.zero.translation}</h3> : <h3>zero</h3> }
                </div>
            </li>
            <li>
                <div className={ toggleState? 'number-item' : 'one'} >
                    <img className="number-images" src={one_img} alt="number icon"/>
                    {!toggleState ? <h3>{words.one.translation}</h3> : <h3>one</h3>}
                </div>
            </li>
            <li>
                <div className={ toggleState? 'number-item' : 'two'} >
                    <img className="number-images" src={two_img} alt="number icon"></img>
                    {!toggleState ? <h3>{words.two.translation}</h3> : <h3>two</h3>}
                </div>
            
            </li>
            <li>
                <div className={ toggleState? 'number-item' : 'three'}>
                    <img className="number-images" src={three_img} alt="number icon"></img>
                    {!toggleState ? <h3>{words.three.translation}</h3> : <h3>three</h3>}
                </div>
            </li>
            <li>
                <div className={ toggleState? 'number-item' : 'four'}>
                    <img className="number-images" src={four_img} alt="number icon"></img>
                    {!toggleState ? <h3>{words.four.translation}</h3> : <h3>four</h3>}
                </div>
            </li>
            <li>
                <div className={ toggleState? 'number-item' : 'five'}>
                    <img className="number-images" src={five_img} alt="number icon"></img>
                    {!toggleState ? <h3>{words.five.translation}</h3> : <h3>five</h3>}
                </div>
            </li>
            <li>
                <div className={ toggleState? 'number-item' : 'six'}>
                    <img className="number-images" src={six_img} alt="number icon"></img>
                    {!toggleState ? <h3>{words.six.translation}</h3> : <h3>six</h3>}
                </div>
            </li>
            <li>
                <div className={ toggleState? 'number-item' : 'seven'}>
                    <img className="number-images" src={seven_img} alt="number icon"></img>
                    {!toggleState ? <h3>{words.seven.translation}</h3> : <h3>seven</h3>}
                </div>
            </li>
            <li>
                <div className={ toggleState? 'number-item' : 'eight'}>
                    <img className="number-images" src={eight_img} alt="number icon"></img>
                    {!toggleState ? <h3>{words.eight.translation}</h3> : <h3>eight</h3>}
                </div>
            </li>
            <li>
                <div className={ toggleState? 'number-item' : 'nine'}>
                    <img className="number-images" src={nine_img} alt="number icon"></img>
                    {!toggleState ? <h3>{words.nine.translation}</h3> : <h3>nine</h3>}
                </div>
            </li>
            <li>
                <div className={ toggleState? 'number-item' : 'ten'} onAnimationEnd={toggle}>
                    <img className="number-images" src={one_img} alt="number icon"></img>
                    <img className="number-images" src={zero_img} alt="number icon"></img>
                    {!toggleState ? <h3>{words.ten.translation}</h3> : <h3>ten</h3>}
                </div>
            </li>

        </ul>
        <div>
            <button onClick={toggle}  disabled={!toggleState}>
                Translate
            </button>
        </div>
        </div>
    )
    
};

export default LessonStyleOne;