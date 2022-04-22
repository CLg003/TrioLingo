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
                    {translate ? <h3>{words.zero.translation}</h3> : <h3>zero</h3> }
                </div>
            </li>
            <li>
                <div className={ isActive? 'number-item' : 'one'} >
                    {translate ? <h3>{words.one.translation}</h3> : <h3>one</h3>}
                </div>
            </li>
            <li>
                <div className={ isActive? 'number-item' : 'two'} >
                    {translate ? <h3>{words.two.translation}</h3> : <h3>two</h3>}
                </div>
            
            </li>
            <li>
                <div className={ isActive? 'number-item' : 'three'}>
                    {translate ? <h3>{words.three.translation}</h3> : <h3>three</h3>}
                </div>
            </li>
            <li>
                <div className={ isActive? 'number-item' : 'four'}>
                    {translate ? <h3>{words.four.translation}</h3> : <h3>four</h3>}
                </div>
            </li>
            <li>
                <div className={ isActive? 'number-item' : 'five'}>
                    {translate ? <h3>{words.five.translation}</h3> : <h3>five</h3>}
                </div>
            </li>
            <li>
                <div className={ isActive? 'number-item' : 'six'}>
                    {translate ? <h3>{words.six.translation}</h3> : <h3>six</h3>}
                </div>
            </li>
            <li>
                <div className={ isActive? 'number-item' : 'seven'}>
                    {translate ? <h3>{words.seven.translation}</h3> : <h3>seven</h3>}
                </div>
            </li>
            <li>
                <div className={ isActive? 'number-item' : 'eight'}>
                    {translate ? <h3>{words.eight.translation}</h3> : <h3>eight</h3>}
                </div>
            </li>
            <li>
                <div className={ isActive? 'number-item' : 'nine'} onAnimationEnd={toggleState && translateWord}>
                    {translate ? <h3>{words.nine.translation}</h3> : <h3>nine</h3>}
                </div>
            </li>

        </ul>
        <div>
            <button onClick={toggleState}>
                Translate
            </button>
        </div>
        </div>
    )
    
};

export default LessonStyleOne;