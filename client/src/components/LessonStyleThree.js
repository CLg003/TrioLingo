import {useState} from "react";
import React from "react";
import './lessonstylethree.css';
import {useSound} from 'use-sound';
import animalSound from '../sound/All_animals.mp4'
import Quiz from './Quiz.js'
import {useToggle} from '../hooks.js'



const LessonStyleThree = ({words}) => {

    const [showDogContent, setShowDogContent] = useState(false);
    const [showCatContent, setShowCatContent] = useState(false);
    const [showFishContent, setShowFishContent] = useState(false);
    const [showDuckContent, setShowDuckContent] = useState(false);
    const [showPenguinContent, setShowPenguinContent] = useState(false);
    const [showDinoContent, setShowDinoContent] = useState(false);
    const [showPigContent, setShowPigContent] = useState(false);
    const [showFrogContent, setShowFrogContent] = useState(false);
    const [showLesson, showQuiz] = useToggle();


    const [play] = useSound(animalSound, {
    sprite: {
        dog: [1000, 2000],
        cat: [2800, 2000],
        fish: [5000, 1500],
        duck: [7500, 2000],
        penguin: [9500, 2000],
        dinosaur: [11700, 2000],
        pig: [14000, 1500],
        frog: [16000, 1500]
    }
});

const animalList = [words.dog, words.cat, words.fish, words.duck, words.penguin, words.dinosaur, words.pig, words.frog]

if (showLesson) { 

    return (

        <div id="main-container">
        <div id="lesson-header">
        <h2>Lesson 3: Animals</h2>
        <p>You did really well on the colours, congratulations! Now let's learn some animal names.</p>
          <div id="instructions">
          <h4>Instructions:</h4> <p>Hover over the Spanish word to see the English translation. Click on the speaker to hear the word!</p>
          </div>
        </div>
        <p><img onClick={()=>play( {id: 'dog'} )} src={`${process.env.PUBLIC_URL}/assets/images/icons8-audio-96.png`}/>
        The <span onMouseEnter={() => setShowDogContent(true)}
                    onMouseLeave={() => setShowDogContent(false)}>
                      {showDogContent ? (words.dog.english) : (words.dog.translation)}
                </span> chases a ball
                <img src={`${process.env.PUBLIC_URL}${words.dog.img}`} alt="fat dog"/>
        </p>
        
        <p><img onClick={()=>play( {id: 'cat'} )} src={`${process.env.PUBLIC_URL}/assets/images/icons8-audio-96.png`}/>
        The <span
                    onMouseEnter={() => setShowCatContent(true)}
                    onMouseLeave={() => setShowCatContent(false)}>
                      {showCatContent ? (words.cat.english) : (words.cat.translation)}
                </span> is asleep
                <img src={`${process.env.PUBLIC_URL}${words.cat.img}`} alt="cat"/>
        </p>

        <p><img onClick={()=>play( {id: 'fish'} )} src={`${process.env.PUBLIC_URL}/assets/images/icons8-audio-96.png`}/>
        The <span
                    onMouseEnter={() => setShowFishContent(true)}
                    onMouseLeave={() => setShowFishContent(false)}>
                      {showFishContent ? (words.fish.english) : (words.fish.translation)}
                </span> swims in the sea
                <img src={`${process.env.PUBLIC_URL}${words.fish.img}`} alt="fish"/>
        </p>
        
        <p><img onClick={()=>play( {id: 'duck'} )} src={`${process.env.PUBLIC_URL}/assets/images/icons8-audio-96.png`}/>
        The <span
                    onMouseEnter={() => setShowDuckContent(true)}
                    onMouseLeave={() => setShowDuckContent(false)}>
                      {showDuckContent ? (words.duck.english) : (words.duck.translation)}
                </span> swims on the pond
                <img src={`${process.env.PUBLIC_URL}${words.duck.img}`} alt="duck"/>
        </p>
        
        <p> <img onClick={()=>play( {id: 'penguin'} )} src={`${process.env.PUBLIC_URL}/assets/images/icons8-audio-96.png`}/>
        The <span
                    onMouseEnter={() => setShowPenguinContent(true)}
                    onMouseLeave={() => setShowPenguinContent(false)}>
                      {showPenguinContent ? (words.penguin.english) : (words.penguin.translation)}
                </span> is eating fish
                <img src={`${process.env.PUBLIC_URL}${words.penguin.img}`} alt="penguin"/>
        </p>
        
        <p> <img onClick={()=>play( {id: 'dinosaur'} )} src={`${process.env.PUBLIC_URL}/assets/images/icons8-audio-96.png`}/>
        The <span
                    onMouseEnter={() => setShowDinoContent(true)}
                    onMouseLeave={() => setShowDinoContent(false)}>
                      {showDinoContent ? (words.dinosaur.english) : (words.dinosaur.translation)}
                </span> is frightening
                <img src={`${process.env.PUBLIC_URL}${words.dinosaur.img}`} alt="dinosaur"/>
        </p>
        
        <p> <img onClick={()=>play( {id: 'pig'} )} src={`${process.env.PUBLIC_URL}/assets/images/icons8-audio-96.png`}/>
        The <span
                    onMouseEnter={() => setShowPigContent(true)}
                    onMouseLeave={() => setShowPigContent(false)}>
                      {showPigContent ? (words.pig.english) : (words.pig.translation)}
                </span> lives on the farm
                <img src={`${process.env.PUBLIC_URL}${words.pig.img}`} alt="pig"/>
        </p>
        
        <p> <img onClick={()=>play( {id: 'frog'} )} src={`${process.env.PUBLIC_URL}/assets/images/icons8-audio-96.png`}/>
        The <span
                    onMouseEnter={() => setShowFrogContent(true)}
                    onMouseLeave={() => setShowFrogContent(false)}>
                      {showFrogContent ? (words.frog.english) : (words.frog.translation)}
                </span> goes "Croak"
                <img src={`${process.env.PUBLIC_URL}${words.frog.img}`} alt="frog"/>
        </p>
        <div> 
            <button onClick={showQuiz}>
                Quiz Yourself!
            </button></div>
        </div>

    )
    }
    else
    {return <Quiz wordList={animalList}/>}

}

export default LessonStyleThree;