import React, {useState} from 'react';
import './HomeScreen.css';

const HomeScreen = ({logInUser}) => {

    const [nameInput, setNameInput] = useState('');


    const handleNameInput = (event) => {
        setNameInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(nameInput);
        logInUser(nameInput);
    }



    return (
        <div id="home-screen">
            <h2>Welcome to TrioLingo!</h2>
            <p id="home-screen-header-p">Enjoy this fun Spanish learning adventure.</p>
            <div id="form-box">
                <h4>Been here before?</h4>
                <p>Enter your username to continue where you left off.</p>
                <hr/>
                <h4>New to TrioLingo?</h4>
                <p>Type in your name to begin your Spanish language adventure!</p>
                <hr/>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" value={nameInput} onChange={handleNameInput} placeholder="Your name here" required/>
                    <input type="submit" id="submit" value="Submit"/>
                </form>
            </div>
        </div>
    );

}

export default HomeScreen;