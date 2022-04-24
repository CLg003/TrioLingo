import React from 'react';
import './Quiz.css';

const Quiz = ({wordList}) => {

    const copyWordList = [...wordList]

    const questionOneWord = copyWordList[Math.floor(Math.random()*copyWordList.length)];
    console.log(questionOneWord);
    copyWordList.splice((copyWordList.indexOf(questionOneWord)), 1);

    const questionTwoWord = copyWordList[Math.floor(Math.random()*copyWordList.length)];
    console.log(questionTwoWord);
    copyWordList.splice((copyWordList.indexOf(questionTwoWord)), 1);

    const questionThreeWord = copyWordList[Math.floor(Math.random()*copyWordList.length)];
    console.log(questionThreeWord);
    copyWordList.splice((copyWordList.indexOf(questionThreeWord)), 1);

    const questionFourWord = copyWordList[Math.floor(Math.random()*copyWordList.length)];
    console.log(questionFourWord);
    copyWordList.splice((copyWordList.indexOf(questionFourWord)), 1);

    const questionFiveWord = copyWordList[Math.floor(Math.random()*copyWordList.length)];
    console.log(questionFiveWord);
    copyWordList.splice((copyWordList.indexOf(questionFiveWord)), 1);

    return (
        <div id="quiz">
            <h3 id="topic-heading">Quiz</h3>
            <p>Have fun with this little quiz to test your Spanish!</p>
            <form>
                <div className="question-div q1-div">
                    <img src={`${process.env.PUBLIC_URL}${questionOneWord.img}`}/>
                    <div className="question-text">
                        <p className="question-number">Question 1</p>
                        <p className="question">What is the Spanish word for {}?</p>
                        <label htmlFor="option-1">Option 1 </label>
                        <input type="radio" id="option-1" name="question-1" value="Option 1"/>
                        <label>Option 2 </label>
                        <input type="radio" id="option-2" name="question-1" value="Option 2"/>
                        <label>Option 3 </label>
                        <input type="radio" id="option-3" name="question-1" value="Option 3"/>
                    </div>
                </div>
                <div className="question-div q2-div">
                    <img src={`${process.env.PUBLIC_URL}${questionTwoWord.img}`}/>
                    <div className="question-text">
                        <p className="question-number">Question 2</p>
                        <p className="question">What is the English word for {}?</p>
                        <label htmlFor="option-1">Option 1 </label>
                        <input type="radio" id="option-1" name="question-2" value="Option 1"/>
                        <label>Option 2 </label>
                        <input type="radio" id="option-2" name="question-2" value="Option 2"/>
                        <label>Option 3 </label>
                        <input type="radio" id="option-3" name="question-2" value="Option 3"/>
                    </div>
                </div>
                <div className="question-div q3-div">
                    <img src={`${process.env.PUBLIC_URL}${questionThreeWord.img}`}/>
                    <div className="question-text">
                        <p className="question-number">Question 3</p>
                        <p className="question">What is the Spanish word for {}?</p>
                        <label htmlFor="option-1">Option 1 </label>
                        <input type="radio" id="option-1" name="question-3" value="Option 1"/>
                        <label>Option 2 </label>
                        <input type="radio" id="option-2" name="question-3" value="Option 2"/>
                        <label>Option 3 </label>
                        <input type="radio" id="option-3" name="question-3" value="Option 3"/>
                    </div>
                </div>
                <div className="question-div q4-div">
                    <img src={`${process.env.PUBLIC_URL}${questionFourWord.img}`}/>
                    <div className="question-text">
                        <p className="question-number">Question 4</p>
                        <p className="question">What is the English word for {}?</p>
                        <label htmlFor="option-1">Option 1 </label>
                        <input type="radio" id="option-1" name="question-4" value="Option 1"/>
                        <label>Option 2 </label>
                        <input type="radio" id="option-2" name="question-4" value="Option 2"/>
                        <label>Option 3 </label>
                        <input type="radio" id="option-3" name="question-4" value="Option 3"/>
                    </div>
                </div>
                <div className="question-div q5-div">
                    <img src={`${process.env.PUBLIC_URL}${questionFiveWord.img}`}/>
                    <div className="question-text">
                        <p className="question-number">Question 5</p>
                        <p className="question">What is the Spanish word for {}?</p>
                        <label htmlFor="option-1">Option 1 </label>
                        <input type="radio" id="option-1" name="question-5" value="Option 1"/>
                        <label>Option 2 </label>
                        <input type="radio" id="option-2" name="question-5" value="Option 2"/>
                        <label>Option 3 </label>
                        <input type="radio" id="option-3" name="question-5" value="Option 3"/>
                    </div>
                </div>
                
            </form>
        </div>
    );
}

export default Quiz;