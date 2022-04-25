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

// Shuffle Function required for refactor

const shuffle = (wordList) => {
    let currentId = wordList.length;

    while (currentId !== 0) {
        let randomId = Math.floor(Math.random()* currentId);
        currentId -= 1;

        let temp = wordList[currentId];
        wordList[currentId] = wordList[randomId];
        wordList[randomId] = temp;
    }
    return wordList;
}

// Refactor of quiz logic

const quizQuestions = () => {

    let quizList = shuffle(wordList);

    let wrongAnswers = [...quizList];
    
    for(let i = 0; i < 6 ; i++){
        wrongAnswers = wrongAnswers.splice[i, 1];
        wrongAnswers = shuffle(wrongAnswers);
        let wrong1 = wrongAnswers[i]
        let wrong2 = wrongAnswers[i++]
    
        return(
            <div>
                <img src={`${process.env.PUBLIC_URL}${quizList[i].img}`} alt="Quiz topic" />
                <p className="question-number">Question {i+1}</p>
                <p className="question">What is the Spanish word for {quizList[i].english}?</p>
                
                {/* WRONG ANSWER */}
                <label htmlFor="option-1">{wrong1.translation}</label>
                <input type="radio" id="option-1" name="question-1" value="wrong"/>
                        
                {/* WRONG ANSWER */}
                <label htmlFor="option-2">{wrong2.translation}</label>
                <input type="radio" id="option-2" name="question-1" value="wrong"/>
                        
                {/* CORRECT ANSWER */}
                <label htmlFor="option-3">{quizList[i].translation}</label>
                <input type="radio" id="option-3" name="question-1" value={questionOneWord.translation}/>
            </div>
        )
    }

}


    return (
        <div id="quiz">
            <h3 id="topic-heading">Quiz</h3>
            <p>Have fun with this little quiz to test your Spanish!</p>
            <form onSubmit={handleSubmit}>

            {quizQuestions()}

            <input type="submit" >

                </input>

                
            </form>
        </div>
    );
}

export default Quiz;