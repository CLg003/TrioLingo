import React  , { useState, useEffect } from 'react';
import './Quiz.css';
import QuizForm from './QuizForm';



const Quiz = ({wordList}) => {

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



    return (
        <div id="main-container">
            <QuizForm 
            questionOneWord={questionOneWord} q1WrongA={q1WrongA} q1WrongB={q1WrongB}
            questionTwoWord={questionTwoWord} q2WrongA={q2WrongA} q2WrongB={q2WrongB}
            questionThreeWord={questionThreeWord} q3WrongA={q3WrongA} q3WrongB={q3WrongB}
            questionFourWord={questionFourWord} q4WrongA={q4WrongA} q4WrongB={q4WrongB}
            questionFiveWord={questionFiveWord} q5WrongA={q5WrongA} q5WrongB={q5WrongB}
            />
        </div>
        );
}

export default Quiz;