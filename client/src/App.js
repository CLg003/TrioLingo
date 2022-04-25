import './App.css';
import React from "react";
import {useState} from 'react';
import LessonList from './components/LessonList';
import Game from './containers/Game';
import LessonProgressBar from './components/LessonProgressBar';
import {words_data} from './words_data.js';
import LessonProgressonContext from './context/LessonProgressionContext';

function App() {
  const [words, setWords] = useState(words_data);
  const [lessonsCompleted, setLessonsCompleted] = useState(0);

  const lessonProgression = () => {
    setLessonsCompleted(lessonsCompleted + 1);
  }


  return (
    <div className="App">
    <LessonProgressBar lessonsCompleted={lessonsCompleted}/>
      <h1>Trash Panda at your service</h1>
      <LessonProgressonContext.Provider value={{lessonProgression}}>
        {lessonsCompleted < 3 ?
        <LessonList words={words} lessonsCompleted={lessonsCompleted}/>
        : <Game words={words}/> } 
      </LessonProgressonContext.Provider>
    </div>
  );
}

export default App;
