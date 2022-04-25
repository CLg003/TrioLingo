import './App.css';
import React from "react";
import {useState, useEffect} from 'react';
import LessonList from './components/LessonList';
import Game from './containers/Game';
import LessonProgressBar from './components/LessonProgressBar';
import {words_data} from './words_data.js';
import LessonProgressionContext from './context/LessonProgressionContext';
import {getWords} from './services/WordsService';
import {getUsers} from './services/UsersService';

function App() {
  const [words, setWords] = useState(null);
  const [users, setUsers] = useState([]);
  const [lessonsCompleted, setLessonsCompleted] = useState(3);

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

  

  // const wordsArray = words.map(word => {
  //   return word;
  // })

  const lessonProgression = () => {
    setLessonsCompleted(lessonsCompleted + 1);
  }



  return (
    <div className="App">
      <h1>Trash Panda at your service</h1>
      <LessonProgressionContext.Provider value={{lessonProgression, lessonsCompleted}}>
        {lessonsCompleted < 3 ?
        <LessonList words={words} lessonsCompleted={lessonsCompleted}/>
        : <Game words={words}/> } 
      </LessonProgressionContext.Provider>
      <LessonProgressBar lessonsCompleted={lessonsCompleted}/>
    </div>
  );
}

export default App;
