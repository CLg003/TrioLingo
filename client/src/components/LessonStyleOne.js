import './lessonstyleone.css';
import React from "react";
import {useToggle} from './../hooks.js'



const LessonStyleOne = ({words}) => {

    let [toggleState, toggle] = useToggle();

    

    return(
        <div >
        <ul className='numbers'>
            <li>
                <div className={ toggleState? 'number-item' : 'zero'}>                    
                    <img src="" alt="no image"/>
                    {!toggleState? <h3>{words.zero.translation}</h3> : <h3>zero</h3> }
                </div>
            </li>
            <li>
                <div className={ toggleState? 'number-item' : 'one'} >
                    <img src={words.one.img}/>
                    {!toggleState ? <h3>{words.one.translation}</h3> : <h3>one</h3>}
                </div>
            </li>
            <li>
                <div className={ toggleState? 'number-item' : 'two'} >
                    <img src={words.two.img}></img>
                    {!toggleState ? <h3>{words.two.translation}</h3> : <h3>two</h3>}
                </div>
            
            </li>
            <li>
                <div className={ toggleState? 'number-item' : 'three'}>
                    <img src={words.three.img}></img>
                    {!toggleState ? <h3>{words.three.translation}</h3> : <h3>three</h3>}
                </div>
            </li>
            <li>
                <div className={ toggleState? 'number-item' : 'four'}>
                    <img src={words.four.img}></img>
                    {!toggleState ? <h3>{words.four.translation}</h3> : <h3>four</h3>}
                </div>
            </li>
            <li>
                <div className={ toggleState? 'number-item' : 'five'}>
                    <img src={words.five.img}></img>
                    {!toggleState ? <h3>{words.five.translation}</h3> : <h3>five</h3>}
                </div>
            </li>
            <li>
                <div className={ toggleState? 'number-item' : 'six'}>
                    <img src={words.six.img}></img>
                    {!toggleState ? <h3>{words.six.translation}</h3> : <h3>six</h3>}
                </div>
            </li>
            <li>
                <div className={ toggleState? 'number-item' : 'seven'}>
                    <img src={words.seven.img}></img>
                    {!toggleState ? <h3>{words.seven.translation}</h3> : <h3>seven</h3>}
                </div>
            </li>
            <li>
                <div className={ toggleState? 'number-item' : 'eight'}>
                    <img src={words.eight.img}></img>
                    {!toggleState ? <h3>{words.eight.translation}</h3> : <h3>eight</h3>}
                </div>
            </li>
            <li>
                <div className={ toggleState? 'number-item' : 'nine'}>
                    <img src={words.eight.img}></img>
                    {!toggleState ? <h3>{words.nine.translation}</h3> : <h3>nine</h3>}
                </div>
            </li>
            <li>
                <div className={ toggleState? 'number-item' : 'ten'} onAnimationEnd={toggle}>
                    <img src={words.one.img}></img>
                    <img src={words.zero.img}></img>
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