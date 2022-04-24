import React from 'react';
import './Quiz.css';

const Quiz = ({wordList}) => {

    const copyWordList = [...wordList]

    const questionOneWord = copyWordList[Math.floor(Math.random()*copyWordList.length)];
    // console.log(questionOneWord);
    copyWordList.splice((copyWordList.indexOf(questionOneWord)), 1);
    const questionOneWrongAnswersList = [...wordList];
    questionOneWrongAnswersList.splice((questionOneWrongAnswersList.indexOf(questionOneWord)), 1);
    // questionOneWrongAnswersList[Math.floor(Math.random()*questionOneWrongAnswersList.length)]

    const questionTwoWord = copyWordList[Math.floor(Math.random()*copyWordList.length)];
    // console.log(questionTwoWord);
    copyWordList.splice((copyWordList.indexOf(questionTwoWord)), 1);
    const questionTwoWrongAnswersList = [...wordList];
    questionTwoWrongAnswersList.splice((questionTwoWrongAnswersList.indexOf(questionTwoWord)), 1);
    // questionTwoWrongAnswersList[Math.floor(Math.random()*questionOneWrongAnswersList.length)]

    const questionThreeWord = copyWordList[Math.floor(Math.random()*copyWordList.length)];
    // console.log(questionThreeWord);
    copyWordList.splice((copyWordList.indexOf(questionThreeWord)), 1);
    const questionThreeWrongAnswersList = [...wordList];
    questionThreeWrongAnswersList.splice((questionThreeWrongAnswersList.indexOf(questionThreeWord)), 1);
    // questionThreeWrongAnswersList[Math.floor(Math.random()*questionOneWrongAnswersList.length)]

    const questionFourWord = copyWordList[Math.floor(Math.random()*copyWordList.length)];
    // console.log(questionFourWord);
    copyWordList.splice((copyWordList.indexOf(questionFourWord)), 1);
    const questionFourWrongAnswersList = [...wordList];
    questionFourWrongAnswersList.splice((questionFourWrongAnswersList.indexOf(questionFourWord)), 1);
    // questionFourWrongAnswersList[Math.floor(Math.random()*questionOneWrongAnswersList.length)]

    const questionFiveWord = copyWordList[Math.floor(Math.random()*copyWordList.length)];
    // console.log(questionFiveWord);
    copyWordList.splice((copyWordList.indexOf(questionFiveWord)), 1);
    const questionFiveWrongAnswersList = [...wordList];
    questionFiveWrongAnswersList.splice((questionFiveWrongAnswersList.indexOf(questionFiveWord)), 1);
    // questionFiveWrongAnswersList[Math.floor(Math.random()*questionOneWrongAnswersList.length)]


    return (
        <div id="quiz">
            <h3 id="topic-heading">Quiz</h3>
            <p>Have fun with this little quiz to test your Spanish!</p>
            <form>

                {/* QUESTION 1 */}
                <div className="question-div q1-div">
                    <img src={`${process.env.PUBLIC_URL}${questionOneWord.img}`} alt="Quiz topic"/>
                    <div className="question-text">
                        <p className="question-number">Question 1</p>
                        <p className="question">What is the Spanish word for {questionOneWord.english}?</p>

                        {/* WRONG ANSWER */}
                        <label htmlFor="option-1">
                            {questionOneWrongAnswersList[Math.floor(Math.random()*questionOneWrongAnswersList.length)].translation}
                        </label>
                        <input type="radio" id="option-1" name="question-1" value="wrong"/>
                        
                        {/* WRONG ANSWER */}
                        <label htmlFor="option-2">
                            {questionOneWrongAnswersList[Math.floor(Math.random()*questionOneWrongAnswersList.length)].translation}
                        </label>
                        <input type="radio" id="option-2" name="question-1" value="wrong"/>
                        
                        {/* CORRECT ANSWER */}
                        <label htmlFor="option-3">{questionOneWord.translation} </label>
                        <input type="radio" id="option-3" name="question-1" value={questionOneWord.translation}/>
                    </div>
                </div>

                {/* QUESTION 2 */}
                <div className="question-div q2-div">
                    <img src={`${process.env.PUBLIC_URL}${questionTwoWord.img}`} alt="Quiz topic"/>
                    <div className="question-text">
                        <p className="question-number">Question 2</p>
                        <p className="question">What is the English word for {questionTwoWord.translation}?</p>
                        
                        {/* WRONG ANSWER */}
                        <label htmlFor="option-1">
                            {questionTwoWrongAnswersList[Math.floor(Math.random()*questionOneWrongAnswersList.length)].english}
                        </label>
                        <input type="radio" id="option-1" name="question-2" value="wrong"/>
                        
                        {/* CORRECT ANSWER */}
                        <label htmlFor="option-2">{questionTwoWord.english} </label>
                        <input type="radio" id="option-2" name="question-2" value={questionTwoWord.english}/>
                        
                        {/* WRONG ANSWER */}
                        <label htmlFor="option-3">
                            {questionTwoWrongAnswersList[Math.floor(Math.random()*questionOneWrongAnswersList.length)].english}
                        </label>
                        <input type="radio" id="option-3" name="question-2" value="wrong"/>
                    </div>
                </div>

                {/* QUESTION 3 */}
                <div className="question-div q3-div">
                    <img src={`${process.env.PUBLIC_URL}${questionThreeWord.img}`} alt="Quiz topic"/>
                    <div className="question-text">
                        <p className="question-number">Question 3</p>
                        <p className="question">What is the Spanish word for {questionThreeWord.english}?</p>
                        
                        {/* WRONG ANSWER */}
                        <label htmlFor="option-1">
                            {questionThreeWrongAnswersList[Math.floor(Math.random()*questionOneWrongAnswersList.length)].translation} 
                        </label>
                        <input type="radio" id="option-1" name="question-3" value="wrong"/>
                        
                        {/* WRONG ANSWER */}
                        <label htmlFor="option-2">
                            {questionThreeWrongAnswersList[Math.floor(Math.random()*questionOneWrongAnswersList.length)].translation} 
                        </label>
                        <input type="radio" id="option-2" name="question-3" value="wrong"/>
                        
                        {/* CORRECT ANSWER */}
                        <label htmlFor="option-3">{questionThreeWord.translation} </label>
                        <input type="radio" id="option-3" name="question-3" value={questionThreeWord.translation}/>
                    </div>
                </div>

                {/* QUESTION 4 */}
                <div className="question-div q4-div">
                    <img src={`${process.env.PUBLIC_URL}${questionFourWord.img}`} alt="Quiz topic"/>
                    <div className="question-text">
                        <p className="question-number">Question 4</p>
                        <p className="question">What is the English word for {questionFourWord.translation}?</p>
                        
                        {/* CORRECT ANSWER */}
                        <label htmlFor="option-1">{questionFourWord.english} </label>
                        <input type="radio" id="option-1" name="question-4" value={questionFourWord.english}/>
                        
                        {/* WRONG ANSWER */}
                        <label htmlFor="option-2">
                            {questionFourWrongAnswersList[Math.floor(Math.random()*questionOneWrongAnswersList.length)].english} 
                        </label>
                        <input type="radio" id="option-2" name="question-4" value="wrong"/>
                        
                        {/* WRONG ANSWER */}
                        <label htmlFor="option-3">
                            {questionFourWrongAnswersList[Math.floor(Math.random()*questionOneWrongAnswersList.length)].english} 
                        </label>
                        <input type="radio" id="option-3" name="question-4" value="wrong"/>
                    </div>
                </div>

                {/* QUESTION 5 */}
                <div className="question-div q5-div">
                    <img src={`${process.env.PUBLIC_URL}${questionFiveWord.img}`} alt="Quiz topic"/>
                    <div className="question-text">
                        <p className="question-number">Question 5</p>
                        <p className="question">What is the Spanish word for {questionFiveWord.english}?</p>
                        
                        {/* WRONG ANSWER */}
                        <label htmlFor="option-1">
                            {questionFiveWrongAnswersList[Math.floor(Math.random()*questionOneWrongAnswersList.length)].english} 
                        </label>
                        <input type="radio" id="option-1" name="question-5" value="wrong"/>
                        
                        {/* CORRECT ANSWER */}
                        <label htmlFor="option-2">{questionFiveWord.translation} </label>
                        <input type="radio" id="option-2" name="question-5" value={questionFiveWord.translation}/>
                        
                        {/* WRONG ANSWER */}
                        <label htmlFor="option-3">
                            {questionFiveWrongAnswersList[Math.floor(Math.random()*questionOneWrongAnswersList.length)].english} 
                        </label>
                        <input type="radio" id="option-3" name="question-5" value="wrong"/>
                    </div>
                </div>
                
            </form>
        </div>
    );
}

export default Quiz;