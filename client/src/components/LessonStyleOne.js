import './lessonstyleone.css';
import React, {require} from "react";
import {useToggle} from './../hooks.js'




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

    return(
        <div >
        <ul className='numbers'>
            <li>
                <div className={ toggleState? 'number-item' : 'zero'}>                    
                    <img src={zero_img} alt="no image"/>

                    {!toggleState? <h3>{words.zero.translation}</h3> : <h3>zero</h3> }
                </div>
            </li>
            <li>
                <div className={ toggleState? 'number-item' : 'one'} >
                    <img src={one_img}/>
                    {!toggleState ? <h3>{words.one.translation}</h3> : <h3>one</h3>}
                </div>
            </li>
            <li>
                <div className={ toggleState? 'number-item' : 'two'} >
                    <img src={two_img}></img>
                    {!toggleState ? <h3>{words.two.translation}</h3> : <h3>two</h3>}
                </div>
            
            </li>
            <li>
                <div className={ toggleState? 'number-item' : 'three'}>
                    <img src={three_img}></img>
                    {!toggleState ? <h3>{words.three.translation}</h3> : <h3>three</h3>}
                </div>
            </li>
            <li>
                <div className={ toggleState? 'number-item' : 'four'}>
                    <img src={four_img}></img>
                    {!toggleState ? <h3>{words.four.translation}</h3> : <h3>four</h3>}
                </div>
            </li>
            <li>
                <div className={ toggleState? 'number-item' : 'five'}>
                    <img src={five_img}></img>
                    {!toggleState ? <h3>{words.five.translation}</h3> : <h3>five</h3>}
                </div>
            </li>
            <li>
                <div className={ toggleState? 'number-item' : 'six'}>
                    <img src={six_img}></img>
                    {!toggleState ? <h3>{words.six.translation}</h3> : <h3>six</h3>}
                </div>
            </li>
            <li>
                <div className={ toggleState? 'number-item' : 'seven'}>
                    <img src={seven_img}></img>
                    {!toggleState ? <h3>{words.seven.translation}</h3> : <h3>seven</h3>}
                </div>
            </li>
            <li>
                <div className={ toggleState? 'number-item' : 'eight'}>
                    <img src={eight_img}></img>
                    {!toggleState ? <h3>{words.eight.translation}</h3> : <h3>eight</h3>}
                </div>
            </li>
            <li>
                <div className={ toggleState? 'number-item' : 'nine'}>
                    <img src={nine_img}></img>
                    {!toggleState ? <h3>{words.nine.translation}</h3> : <h3>nine</h3>}
                </div>
            </li>
            <li>
                <div className={ toggleState? 'number-item' : 'ten'} onAnimationEnd={toggle}>
                    <img src={one_img}></img>
                    <img src={zero_img}></img>
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