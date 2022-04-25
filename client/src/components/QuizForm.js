import React, {useState, useContext} from 'react';
import Answer from './Answer';
import LessonProgressonContext from '../context/LessonProgressionContext';


const QuizForm = ({
    questionOneWord, q1WrongA, q1WrongB,
    questionTwoWord, q2WrongA, q2WrongB,
    questionThreeWord, q3WrongA, q3WrongB,
    questionFourWord, q4WrongA, q4WrongB,
    questionFiveWord, q5WrongA, q5WrongB}) => {

    const[questionOneAnswer , setQuestionOneAnswer] = useState('');
    const[questionTwoAnswer , setQuestionTwoAnswer] = useState('');
    const[questionThreeAnswer , setQuestionThreeAnswer] = useState('');
    const[questionFourAnswer , setQuestionFourAnswer] = useState('');
    const[questionFiveAnswer , setQuestionFiveAnswer] = useState('');

    const[formSubmit, setFormSubmit] = useState(false);

    const {lessonProgression} = useContext(LessonProgressonContext);

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
        setFormSubmit(true);
        let answers = [questionOneAnswer, questionTwoAnswer, questionThreeAnswer, questionFourAnswer, questionFiveAnswer];
        let result = answers.filter(answer => {
            return answer === "wrong" 
        })
        if (!result.includes("wrong")) {
            lessonProgression();
        }
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
                        <input type="radio" id="option-1" name="question-1" value="wrong" onChange={handleChangeQ1}/>
                        
                        {/* WRONG ANSWER */}
                        <label htmlFor="option-2">{q1WrongB.translation}</label>
                        <input type="radio" id="option-2" name="question-1" value="wrong" onChange={handleChangeQ1}/>
                        
                        {/* CORRECT ANSWER */}
                        <label htmlFor="option-3">{questionOneWord.translation}</label>
                        <input type="radio" id="option-3" name="question-1" value={questionOneWord.translation} onChange={handleChangeQ1}/>
                    </div>
                    {formSubmit? <Answer answer={questionOneAnswer}/> : null }
                </div>

                {/* QUESTION 2 */}
                <div className="question-div q2-div">
                    <img src={`${process.env.PUBLIC_URL}${questionTwoWord.img}`} alt="Quiz topic"/>
                    <div className="question-text">
                        <p className="question-number">Question 2</p>
                        <p className="question">What is the English word for {questionTwoWord.translation}?</p>
                        
                        {/* WRONG ANSWER */}
                        <label htmlFor="option-1">{q2WrongA.english}</label>
                        <input type="radio" id="option-1" name="question-2" value="wrong" onChange={handleChangeQ2}/>
                        
                        {/* CORRECT ANSWER */}
                        <label htmlFor="option-2">{questionTwoWord.english}</label>
                        <input type="radio" id="option-2" name="question-2" value={questionTwoWord.english} onChange={handleChangeQ2}/>
                        
                        {/* WRONG ANSWER */}
                        <label htmlFor="option-3">{q2WrongB.english}</label>
                        <input type="radio" id="option-3" name="question-2" value="wrong" onChange={handleChangeQ2}/>
                    </div>
                    {formSubmit? <Answer answer={questionTwoAnswer}/> : null }
                </div>

                {/* QUESTION 3 */}
                <div className="question-div q3-div">
                    <img src={`${process.env.PUBLIC_URL}${questionThreeWord.img}`} alt="Quiz topic"/>
                    <div className="question-text">
                        <p className="question-number">Question 3</p>
                        <p className="question">What is the Spanish word for {questionThreeWord.english}?</p>
                        
                        {/* WRONG ANSWER */}
                        <label htmlFor="option-1">{q3WrongA.translation}</label>
                        <input type="radio" id="option-1" name="question-3" value="wrong" onChange={handleChangeQ3}/>
                        
                        {/* WRONG ANSWER */}
                        <label htmlFor="option-2">{q3WrongB.translation}</label>
                        <input type="radio" id="option-2" name="question-3" value="wrong" onChange={handleChangeQ3}/>
                        
                        {/* CORRECT ANSWER */}
                        <label htmlFor="option-3">{questionThreeWord.translation} </label>
                        <input type="radio" id="option-3" name="question-3" value={questionThreeWord.translation} onChange={handleChangeQ3}/>
                    </div>
                    {formSubmit? <Answer answer={questionThreeAnswer}/> : null }
                </div>

                {/* QUESTION 4 */}
                <div className="question-div q4-div">
                    <img src={`${process.env.PUBLIC_URL}${questionFourWord.img}`} alt="Quiz topic"/>
                    <div className="question-text">
                        <p className="question-number">Question 4</p>
                        <p className="question">What is the English word for {questionFourWord.translation}?</p>
                        
                        {/* CORRECT ANSWER */}
                        <label htmlFor="option-1">{questionFourWord.english} </label>
                        <input type="radio" id="option-1" name="question-4" value={questionFourWord.english} onChange={handleChangeQ4}/>
                        
                        {/* WRONG ANSWER */}
                        <label htmlFor="option-2">{q4WrongA.english}</label>
                        <input type="radio" id="option-2" name="question-4" value="wrong" onChange={handleChangeQ4}/>
                        
                        {/* WRONG ANSWER */}
                        <label htmlFor="option-3">
                            {q4WrongB.english} 
                        </label>
                        <input type="radio" id="option-3" name="question-4" value="wrong" onChange={handleChangeQ4}/>
                    </div>
                    {formSubmit? <Answer answer={questionFourAnswer}/> : null }
                </div>

                {/* QUESTION 5 */}
                <div className="question-div q5-div">
                    <img src={`${process.env.PUBLIC_URL}${questionFiveWord.img}`} alt="Quiz topic"/>
                    <div className="question-text">
                        <p className="question-number">Question 5</p>
                        <p className="question">What is the Spanish word for {questionFiveWord.english}?</p>
                        
                        {/* WRONG ANSWER */}
                        <label htmlFor="option-1">{q5WrongA.english}</label>
                        <input type="radio" id="option-1" name="question-5" value="wrong" onChange={handleChangeQ5}/>
                        
                        {/* CORRECT ANSWER */}
                        <label htmlFor="option-2">{questionFiveWord.translation} </label>
                        <input type="radio" id="option-2" name="question-5" value={questionFiveWord.translation} onChange={handleChangeQ5}/>
                        
                        {/* WRONG ANSWER */}
                        <label htmlFor="option-3">{q5WrongB.english}</label>
                        <input type="radio" id="option-3" name="question-5" value="wrong" onChange={handleChangeQ5}/>
                    </div>
                    {formSubmit? <Answer answer={questionFiveAnswer}/> : null }
                </div>
                <input type="submit" >

                </input>

                    
                </form>
            </div>
    );
}

export default QuizForm;