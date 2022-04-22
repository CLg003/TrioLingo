import {useState} from 'react';
import './lessonstyleone.css';

const LessonStyleOne = ({words}) => {

    const [translate, setTranslate ] = useState(false);

    const handleClick = () => {
        setTranslate(!translate);
    };
    

    return(
        <div >
        <ul className='numbers'>
            <li>
                <div className='number-item'>
                    {translate ? <h3>{words.zero.translation}</h3> : <h3>Zero</h3> }
                </div>
            </li>
            <li>
                <div className='number-item'>
                    {translate ? <h3>{words.one.translation}</h3> : <h3>One</h3>}
                </div>
            </li>
            <li>
                <div className='number-item'>
                    {translate ? <h3>{words.two.translation}</h3> : <h3>Two</h3>}
                </div>
            
            </li>
            <li>
                <div className='number-item'>
                    {translate ? <h3>{words.three.translation}</h3> : <h3>Three</h3>}
                </div>
            </li>
            <li>
                <div className='number-item'>
                    {translate ? <h3>{words.four.translation}</h3> : <h3>Four</h3>}
                </div>
            </li>
            <li>
                <div className='number-item'>
                    {translate ? <h3>{words.five.translation}</h3> : <h3>Five</h3>}
                </div>
            </li>
            <li>
                <div className='number-item'>
                    {translate ? <h3>{words.six.translation}</h3> : <h3>Six</h3>}
                </div>
            </li>
            <li>
                <div className='number-item'>
                    {translate ? <h3>{words.seven.translation}</h3> : <h3>Seven</h3>}
                </div>
            </li>
            <li>
                <div className='number-item'>
                    {translate ? <h3>{words.eight.translation}</h3> : <h3>Eight</h3>}
                </div>
            </li>
            <li>
                <div className='number-item'>
                    {translate ? <h3>{words.nine.translation}</h3> : <h3>Nine</h3>}
                </div>
            </li>

        </ul>
        <div>
            <button onClick={handleClick}>
                Translate
            </button>
        </div>
        </div>
    )
    
};

export default LessonStyleOne;