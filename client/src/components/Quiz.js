import React from 'react';
import './Quiz.css';

const Quiz = () => {


    return (
        <div id="quiz">
            <h3 id="topic-heading">Quiz</h3>
            <p>Have fun with this little quiz to test your Spanish!</p>
            <form>
                <div className="question-div q1-div">
                    <img src={"https://media.istockphoto.com/vectors/bunch-of-balloons-in-cartoon-flat-style-isolated-on-white-background-vector-id666620128?k=20&m=666620128&s=612x612&w=0&h=9JjxzlWqu-1Ry0KUuQtARTAlvdR2ZmCzLQI2ptWiXfw="}/>
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
                    <img src={"https://media.istockphoto.com/vectors/bunch-of-balloons-in-cartoon-flat-style-isolated-on-white-background-vector-id666620128?k=20&m=666620128&s=612x612&w=0&h=9JjxzlWqu-1Ry0KUuQtARTAlvdR2ZmCzLQI2ptWiXfw="}/>
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
                    <img src={"https://media.istockphoto.com/vectors/bunch-of-balloons-in-cartoon-flat-style-isolated-on-white-background-vector-id666620128?k=20&m=666620128&s=612x612&w=0&h=9JjxzlWqu-1Ry0KUuQtARTAlvdR2ZmCzLQI2ptWiXfw="}/>
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
                    <img src={"https://media.istockphoto.com/vectors/bunch-of-balloons-in-cartoon-flat-style-isolated-on-white-background-vector-id666620128?k=20&m=666620128&s=612x612&w=0&h=9JjxzlWqu-1Ry0KUuQtARTAlvdR2ZmCzLQI2ptWiXfw="}/>
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
                    <img src={"https://media.istockphoto.com/vectors/bunch-of-balloons-in-cartoon-flat-style-isolated-on-white-background-vector-id666620128?k=20&m=666620128&s=612x612&w=0&h=9JjxzlWqu-1Ry0KUuQtARTAlvdR2ZmCzLQI2ptWiXfw="}/>
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