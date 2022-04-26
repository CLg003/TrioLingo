import './App.css';
import React from "react";
import {useState, useEffect} from 'react';
import LessonList from './components/LessonList';
import Game from './containers/Game';
import LessonProgressBar from './components/LessonProgressBar';
import {words_data} from './words_data.js';
import LessonProgressionContext from './context/LessonProgressionContext';
import {getWords} from './services/WordsService';
import {getUsers, postUser} from './services/UsersService';
import HomeScreen from './components/HomeScreen';


function App() {
    const [words, setWords] = useState(null);
    const [users, setUsers] = useState([]);
    const [lessonsCompleted, setLessonsCompleted] = useState(0);
    const [loggedInUser, setLoggedInUser] = useState(null);

    useEffect(()=> {
        getWords()
        .then((data) => {
            setWords(data);
        })
    },[]);

    useEffect(()=> {
        getUsers()
        .then((data) => {
            setUsers(data);
        })
    },[]);

    const logIn = (user) =>     {
        setLoggedInUser(user);
        setLessonsCompleted(user.lessons_completed);
    }

    const logInUser = (nameInput) => {
        const userToLogIn = users.filter(user => user.name === nameInput)
        if (userToLogIn.length > 0) {
            logIn(userToLogIn[0]);
        } else { 
            const newUser = {name : nameInput, lessons_completed: 0};
            addUser(newUser);
            logIn(newUser);
       }
    }

    const addUser = (newUser) => {
      postUser(newUser)
      .then((newUser) => {
        setUsers([...users, newUser])
      });
  };

    const lessonProgression = () => {
        setLessonsCompleted(lessonsCompleted + 1);
    }



    return (
        <div className="App">
            <h1>Trash Panda at your service</h1>
            {!loggedInUser ?
            <HomeScreen logInUser={logInUser}/>
            : <>
            <LessonProgressionContext.Provider value={{lessonProgression, lessonsCompleted}}>
                {lessonsCompleted < 3 ?
                <LessonList words={words} lessonsCompleted={lessonsCompleted}/>
                : <Game words={words}/> } 
            </LessonProgressionContext.Provider>
            <LessonProgressBar lessonsCompleted={lessonsCompleted}/>
            </>
            }
        </div>
    );
}

export default App;
