import './App.css';
import React from "react";
import {useState, useEffect} from 'react';
import LessonList from './components/LessonList';
import Game from './containers/Game';
import LessonProgressBar from './components/LessonProgressBar';
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
            <header>
                <img src={`${process.env.PUBLIC_URL}/assets/images/TrashPanda_noBkgRESIZE.png`} />
                <div id="header-title">
                    <h1>TrioLingo</h1>
                    <h2 id="subtitle">by TrashPanda</h2>
                </div>
                <p id="hola-user">Hola user!</p>
            </header>
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
            <footer>
                <p>©2022 TrashPanda</p>
                <p>Icons by <a href="https://icons8.com/">Icons8</a> & <a href="https://www.flaticon.com/">FlatIcon</a></p>
            </footer>
        </div>
    );
}

export default App;
