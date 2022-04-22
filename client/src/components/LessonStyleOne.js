import {useState} from 'react';
import './lessonstyleone.css';


const LessonStyleOne = ({words}) => {

    const [translate, setTranslate ] = useState(false);
    const [isActive, setIsActive ] = useState(true)

    const toggleState = () => {
        setIsActive(!isActive);
    };

    const translateWord = () => {
        setTranslate(!translate);
    }

    return(
        <div >
        <ul className='numbers'>
            <li>
                <div className={ isActive? 'number-item' : 'zero'} onAnimationStart={translateWord}>
                    <img src="https://cdn-icons-png.flaticon.com/512/3570/3570095.png"></img>
                    {translate ? <h3>{words.zero.translation}</h3> : <h3>zero</h3> }
                </div>
            </li>
            <li>
                <div className={ isActive? 'number-item' : 'one'} >
                    <img src="https://cdn-icons-png.flaticon.com/512/3570/3570098.png"></img>
                    {translate ? <h3>{words.one.translation}</h3> : <h3>one</h3>}
                </div>
            </li>
            <li>
                <div className={ isActive? 'number-item' : 'two'} >
                    <img src="https://cdn-icons-png.flaticon.com/512/3570/3570100.png"></img>
                    {translate ? <h3>{words.two.translation}</h3> : <h3>two</h3>}
                </div>
            
            </li>
            <li>
                <div className={ isActive? 'number-item' : 'three'}>
                    <img src="https://cdn-icons-png.flaticon.com/512/3570/3570103.png"></img>
                    {translate ? <h3>{words.three.translation}</h3> : <h3>three</h3>}
                </div>
            </li>
            <li>
                <div className={ isActive? 'number-item' : 'four'}>
                    <img src="https://cdn-icons-png.flaticon.com/512/3570/3570104.png"></img>
                    {translate ? <h3>{words.four.translation}</h3> : <h3>four</h3>}
                </div>
            </li>
            <li>
                <div className={ isActive? 'number-item' : 'five'}>
                    <img src="https://cdn-icons-png.flaticon.com/512/3570/3570107.png"></img>
                    {translate ? <h3>{words.five.translation}</h3> : <h3>five</h3>}
                </div>
            </li>
            <li>
                <div className={ isActive? 'number-item' : 'six'}>
                    <img src="https://cdn-icons-png.flaticon.com/512/3570/3570112.png"></img>
                    {translate ? <h3>{words.six.translation}</h3> : <h3>six</h3>}
                </div>
            </li>
            <li>
                <div className={ isActive? 'number-item' : 'seven'}>
                    <img src="https://cdn-icons-png.flaticon.com/512/3570/3570115.png"></img>
                    {translate ? <h3>{words.seven.translation}</h3> : <h3>seven</h3>}
                </div>
            </li>
            <li>
                <div className={ isActive? 'number-item' : 'eight'}>
                    <img src="https://cdn-icons-png.flaticon.com/512/3570/3570118.png"></img>
                    {translate ? <h3>{words.eight.translation}</h3> : <h3>eight</h3>}
                </div>
            </li>
            <li>
                <div className={ isActive? 'number-item' : 'nine'} onAnimationEnd={toggleState && translateWord}>
                    <img src="https://cdn-icons-png.flaticon.com/512/3570/3570120.png"></img>
                    {translate ? <h3>{words.nine.translation}</h3> : <h3>nine</h3>}
                </div>
            </li>

        </ul>
        <div>
            <button onClick={toggleState}  disabled={translate}>
                Translate
            </button>
        </div>
        </div>
    )
    
};

export default LessonStyleOne;