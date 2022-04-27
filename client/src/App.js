import './App.css';
import React from "react";
import {useState, useEffect} from 'react';
import LessonList from './components/LessonList';
import Game from './containers/Game';
import LessonProgressBar from './components/LessonProgressBar';
import LessonProgressionContext from './context/LessonProgressionContext';
import {getWords} from './services/WordsService';
import {getUsers, postUser, putUser} from './services/UsersService';
import HomeScreen from './components/HomeScreen';


function App() {

    const [words, setWords] = useState(null);
    const [users, setUsers] = useState([]);
    const [lessonsCompleted, setLessonsCompleted] = useState();
    const [loggedInUser, setLoggedInUser] = useState();


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

    const logOut = () =>     {
        setLoggedInUser(null);
    }
    
    const logInUser = (nameInput) => {
        const userToLogIn = users.filter(user => user.name === nameInput)
        if (userToLogIn.length > 0) {
            logIn(userToLogIn[0]);
        } else { 
            const newUser = {name : nameInput, lessons_completed: 0};
            addUser(newUser);
            // logIn(newUser);

        }
    }

    const addUser = (newUser) => {
        postUser(newUser)
        .then((newUser) => {
        setUsers([...users, newUser])
        logIn(newUser)
        });
    };

    const lessonProgression = () => {
        const newLessonsCompleted = lessonsCompleted + 1;
        const userToUpdateId = loggedInUser._id;
        const amendedUserData = {
            name: loggedInUser.name,
            lessons_completed: newLessonsCompleted
        };
        console.log(amendedUserData);
        console.log(userToUpdateId);
        putUser(userToUpdateId, amendedUserData);
        setLessonsCompleted(newLessonsCompleted);
    }



    return (
        <div className="App">
            <header>
                <img src={`${process.env.PUBLIC_URL}/assets/images/TrashPanda_noBkgRESIZE.png`} />
                <div id="header-title">
                    <h1>TrioLingo</h1>
                    <h2 id="subtitle">by TrashPanda</h2>
                </div>

                {loggedInUser ? 
                <div id="hello-logout">
                    <p>Hola {loggedInUser.name}! </p>
                    <button onClick={logOut}>
                        Logout
                    </button>
                </div>
                : <p id="hello">Hola!</p>}

               

            </header>
            {!loggedInUser ?
            <HomeScreen logInUser={logInUser}/>
            : <>
            <LessonProgressionContext.Provider value={{lessonProgression, lessonsCompleted}}>
                {lessonsCompleted < 3 ?
                <LessonList words={words} lessonsCompleted={lessonsCompleted} loggedInUser={loggedInUser}/>
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
