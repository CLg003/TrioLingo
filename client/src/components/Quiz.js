import React  , { useState } from 'react';
import './Quiz.css';



const Quiz = ({wordList}) => {

    const[questionOneAnswer , setQuestionOneAnswer] = useState(null);
    const[questionTwoAnswer , setQuestionTwoAnswer] = useState(null);
    const[questionThreeAnswer , setQuestionThreeAnswer] = useState(null);
    const[questionFourAnswer , setQuestionFourAnswer] = useState(null);
    const[questionFiveAnswer , setQuestionFiveAnswer] = useState(null);

    const[formSubmit, setFormSubmit] = useState()
    

    const copyWordList = [...wordList]

    // RANDOM QUESTION VARIABLES GENERATED WITH RANDOMLY GENERATED WRONG ANSWERS FOR MULTIPLE CHOICE
    // QUESTION 1
    const questionOneWord = copyWordList[Math.floor(Math.random()*copyWordList.length)];
    // console.log(questionOneWord);
    copyWordList.splice((copyWordList.indexOf(questionOneWord)), 1);
    const questionOneWrongAnswersList = [...wordList];
    questionOneWrongAnswersList.splice((questionOneWrongAnswersList.indexOf(questionOneWord)), 1);
    const q1WrongA = questionOneWrongAnswersList[Math.floor(Math.random()*questionOneWrongAnswersList.length)];
    questionOneWrongAnswersList.splice((questionOneWrongAnswersList.indexOf(q1WrongA)), 1);
    const q1WrongB = questionOneWrongAnswersList[Math.floor(Math.random()*questionOneWrongAnswersList.length)];
    
    // QUESTION 2
    const questionTwoWord = copyWordList[Math.floor(Math.random()*copyWordList.length)];
    // console.log(questionTwoWord);
    copyWordList.splice((copyWordList.indexOf(questionTwoWord)), 1);
    const questionTwoWrongAnswersList = [...wordList];
    questionTwoWrongAnswersList.splice((questionTwoWrongAnswersList.indexOf(questionTwoWord)), 1);
    const q2WrongA = questionTwoWrongAnswersList[Math.floor(Math.random()*questionTwoWrongAnswersList.length)];
    questionTwoWrongAnswersList.splice((questionTwoWrongAnswersList.indexOf(q2WrongA)), 1);
    const q2WrongB = questionTwoWrongAnswersList[Math.floor(Math.random()*questionTwoWrongAnswersList.length)];

    // QUESTION 3
    const questionThreeWord = copyWordList[Math.floor(Math.random()*copyWordList.length)];
    // console.log(questionThreeWord);
    copyWordList.splice((copyWordList.indexOf(questionThreeWord)), 1);
    const questionThreeWrongAnswersList = [...wordList];
    questionThreeWrongAnswersList.splice((questionThreeWrongAnswersList.indexOf(questionThreeWord)), 1);
    const q3WrongA = questionThreeWrongAnswersList[Math.floor(Math.random()*questionThreeWrongAnswersList.length)];
    questionThreeWrongAnswersList.splice((questionThreeWrongAnswersList.indexOf(q3WrongA)), 1);
    const q3WrongB = questionThreeWrongAnswersList[Math.floor(Math.random()*questionThreeWrongAnswersList.length)];

    // QUESTION 4
    const questionFourWord = copyWordList[Math.floor(Math.random()*copyWordList.length)];
    // console.log(questionFourWord);
    copyWordList.splice((copyWordList.indexOf(questionFourWord)), 1);
    const questionFourWrongAnswersList = [...wordList];
    questionFourWrongAnswersList.splice((questionFourWrongAnswersList.indexOf(questionFourWord)), 1);
    const q4WrongA = questionFourWrongAnswersList[Math.floor(Math.random()*questionFourWrongAnswersList.length)];
    questionFourWrongAnswersList.splice((questionFourWrongAnswersList.indexOf(q4WrongA)), 1);
    const q4WrongB = questionFourWrongAnswersList[Math.floor(Math.random()*questionFourWrongAnswersList.length)];

    // QUESTION 5
    const questionFiveWord = copyWordList[Math.floor(Math.random()*copyWordList.length)];
    // console.log(questionFiveWord);
    copyWordList.splice((copyWordList.indexOf(questionFiveWord)), 1);
    const questionFiveWrongAnswersList = [...wordList];
    questionFiveWrongAnswersList.splice((questionFiveWrongAnswersList.indexOf(questionFiveWord)), 1);
    const q5WrongA = questionFiveWrongAnswersList[Math.floor(Math.random()*questionFiveWrongAnswersList.length)];
    questionFiveWrongAnswersList.splice((questionFiveWrongAnswersList.indexOf(q5WrongA)), 1);
    const q5WrongB = questionFiveWrongAnswersList[Math.floor(Math.random()*questionFiveWrongAnswersList.length)];

const handleChangeQ1 = (event) => {
    setQuestionOneAnswer(event.target.value)
}
const handleChangeQ2 = (event) => {
    setQuestionTwoAnswer(event.target.value)
}
const handleChangeQ3 = (event) => {
    setQuestionThreeAnswer(event.target.value)
}
const handleChangeQ4 = (event) => {
    setQuestionFourAnswer(event.target.value)
}
const handleChangeQ5 = (event) => {
    setQuestionFiveAnswer(event.target.value)
}

const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
}

    return (
        <div id="quiz">
            <h3 id="topic-heading">Quiz</h3>
            <p>Have fun with this little quiz to test your Spanish!</p>
            <form onSubmit={handleSubmit}>

                {/* QUESTION 1 */}
                <div className="question-div q1-div">
                    <img src={`${process.env.PUBLIC_URL}${questionOneWord.img}`} alt="Quiz topic"/>
                    <div className="question-text">
                        <p className="question-number">Question 1</p>
                        <p className="question">What is the Spanish word for {questionOneWord.english}?</p>

                        {/* WRONG ANSWER */}
                        <label htmlFor="option-1">{q1WrongA.translation}</label>
                        <input type="radio" id="option-1" name="question-1" value="wrong"/>
                        
                        {/* WRONG ANSWER */}
                        <label htmlFor="option-2">{q1WrongB.translation}</label>
                        <input type="radio" id="option-2" name="question-1" value="wrong"/>
                        
                        {/* CORRECT ANSWER */}
                        <label htmlFor="option-3">{questionOneWord.translation}</label>
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
                        <label htmlFor="option-1">{q2WrongA.english}</label>
                        <input type="radio" id="option-1" name="question-2" value="wrong"/>
                        
                        {/* CORRECT ANSWER */}
                        <label htmlFor="option-2">{questionTwoWord.english}</label>
                        <input type="radio" id="option-2" name="question-2" value={questionTwoWord.english}/>
                        
                        {/* WRONG ANSWER */}
                        <label htmlFor="option-3">{q2WrongB.english}</label>
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
                        <label htmlFor="option-1">{q3WrongA.translation}</label>
                        <input type="radio" id="option-1" name="question-3" value="wrong"/>
                        
                        {/* WRONG ANSWER */}
                        <label htmlFor="option-2">{q3WrongB.translation}</label>
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
                        <label htmlFor="option-2">{q4WrongA.english}</label>
                        <input type="radio" id="option-2" name="question-4" value="wrong"/>
                        
                        {/* WRONG ANSWER */}
                        <label htmlFor="option-3">
                            {q4WrongB.english} 
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
                        <label htmlFor="option-1">{q5WrongA.english}</label>
                        <input type="radio" id="option-1" name="question-5" value="wrong"/>
                        
                        {/* CORRECT ANSWER */}
                        <label htmlFor="option-2">{questionFiveWord.translation} </label>
                        <input type="radio" id="option-2" name="question-5" value={questionFiveWord.translation}/>
                        
                        {/* WRONG ANSWER */}
                        <label htmlFor="option-3">{q5WrongB.english}</label>
                        <input type="radio" id="option-3" name="question-5" value="wrong"/>
                    </div>
                </div>
                <input type="submit" >

                </input>

                
            </form>
        </div>
    );
}

export default Quiz;