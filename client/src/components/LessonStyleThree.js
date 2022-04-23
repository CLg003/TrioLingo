import {useState} from "react";
import React from "react";


const LessonStyleThree = ({words}) => {

    const [showDogContent, setShowDogContent] = useState(false);
    const [showCatContent, setShowCatContent] = useState(false);
    const [showFishContent, setShowFishContent] = useState(false);
    const [showDuckContent, setShowDuckContent] = useState(false);
    const [showPenguinContent, setShowPenguinContent] = useState(false);
    const [showDinoContent, setShowDinoContent] = useState(false);
    const [showPigContent, setShowPigContent] = useState(false);
    const [showFrogContent, setShowFrogContent] = useState(false);


    return (
        <>
        <h2>Animals Lesson</h2>
        <p>The <span 
                    onMouseEnter={() => setShowDogContent(true)}
                    onMouseLeave={() => setShowDogContent(false)}>
                    {words.dog.translation}  
                </span> chases a ball</p>
        {showDogContent && (
        <div>
          {words.dog.english}
        </div>
      )}
        
        <p>The <span
                    onMouseEnter={() => setShowCatContent(true)}
                    onMouseLeave={() => setShowCatContent(false)}>
                    {words.cat.translation}
                </span> is asleep</p>
        {showCatContent && (
        <div>
          {words.cat.english}
        </div>
      )} 
        
        <p>The <span
                    onMouseEnter={() => setShowFishContent(true)}
                    onMouseLeave={() => setShowFishContent(false)}>
                    {words.fish.translation}
                </span> swims in the sea</p>
        {showFishContent && (
        <div>
          {words.fish.english}
        </div>
      )}     
        
        <p>The <span
                    onMouseEnter={() => setShowDuckContent(true)}
                    onMouseLeave={() => setShowDuckContent(false)}>
                    {words.duck.translation}
                </span> swims on the pond</p>
        {showDuckContent && (
        <div>
          {words.duck.english}
        </div>
      )}     
        
        <p>The <span
                    onMouseEnter={() => setShowPenguinContent(true)}
                    onMouseLeave={() => setShowPenguinContent(false)}>
                    {words.penguin.translation}
                </span> is eating fish</p>
        {showPenguinContent && (
        <div>
          {words.penguin.english}
        </div>
      )}     
        
        <p>The <span
                    onMouseEnter={() => setShowDinoContent(true)}
                    onMouseLeave={() => setShowDinoContent(false)}>
                    {words.dinosaur.translation}
                </span> is frightening</p>
        {showDinoContent && (
        <div>
          {words.dinosaur.english}
        </div>
      )}     
        
        <p>The <span
                    onMouseEnter={() => setShowPigContent(true)}
                    onMouseLeave={() => setShowPigContent(false)}>
                    {words.pig.translation}
                </span> lives on the farm</p>
        {showPigContent && (
        <div>
          {words.pig.english}
        </div>
      )}     
        
        <p>The <span
                    onMouseEnter={() => setShowFrogContent(true)}
                    onMouseLeave={() => setShowFrogContent(false)}>
                    {words.frog.translation}
                </span> goes "Croak"</p>
        {showFrogContent && (
        <div>
          {words.frog.english}
        </div>
      )}     
        </>

    );

}

export default LessonStyleThree;