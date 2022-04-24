import './App.css';
import React from "react";
import {useState} from 'react';
import LessonList from './components/LessonList';
import Game from './containers/Game';
import {words_data} from './words_data.js';

function App() {
  const [words, setWords] = useState(words_data);
  const [lessonsCompleted, setLessonsCompleted] = useState(1);



  return (
    <div className="App">
      <h1>Trash Panda at your service</h1>
      {lessonsCompleted < 3 ?
      <LessonList words={words} lessonsCompleted={lessonsCompleted}/>
      : <Game words={words}/> }
    </div>
  );
}

export default App;
