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
        <p>The <button type="button" 
                        onMouseEnter={() => setShowDogContent(true)}
                        onMouseLeave={() => setShowDogContent(false)}>
                        {words.dog.translation}  
                </button> chases a ball</p>
        {showDogContent && (
        <div>
          {words.dog.english}
        </div>
      )}
        
        <p>The <button type="button"
                        onMouseEnter={() => setShowCatContent(true)}
                        onMouseLeave={() => setShowCatContent(false)}>
                        {words.cat.translation}
                </button> is asleep</p>
        {showCatContent && (
        <div>
          {words.cat.english}
        </div>
      )} 
        
        <p>The <button type="button"
                        onMouseEnter={() => setShowFishContent(true)}
                        onMouseLeave={() => setShowFishContent(false)}>
                        {words.fish.translation}
                </button> swims in the sea</p>
        {showFishContent && (
        <div>
          {words.fish.english}
        </div>
      )}     
        
        <p>The <button type="button"
                        onMouseEnter={() => setShowDuckContent(true)}
                        onMouseLeave={() => setShowDuckContent(false)}>
                        {words.duck.translation}
                </button> swims on the pond</p>
        {showDuckContent && (
        <div>
          {words.duck.english}
        </div>
      )}     
        
        <p>The <button type="button"
                        onMouseEnter={() => setShowPenguinContent(true)}
                        onMouseLeave={() => setShowPenguinContent(false)}>
                        {words.penguin.translation}
                </button> is eating fish</p>
        {showPenguinContent && (
        <div>
          {words.penguin.english}
        </div>
      )}     
        
        <p>The <button type="button"
                        onMouseEnter={() => setShowDinoContent(true)}
                        onMouseLeave={() => setShowDinoContent(false)}>
                        {words.dinosaur.translation}
                </button> is frightening</p>
        {showDinoContent && (
        <div>
          {words.dinosaur.english}
        </div>
      )}     
        
        <p>The <button type="button"
                        onMouseEnter={() => setShowPigContent(true)}
                        onMouseLeave={() => setShowPigContent(false)}>
                        {words.pig.translation}
                </button> lives on the farm</p>
        {showPigContent && (
        <div>
          {words.pig.english}
        </div>
      )}     
        
        <p>The <button type="button"
                        onMouseEnter={() => setShowFrogContent(true)}
                        onMouseLeave={() => setShowFrogContent(false)}>
                        {words.frog.translation}
                </button> goes "Croak"</p>
        {showFrogContent && (
        <div>
          {words.frog.english}
        </div>
      )}     
        </>

    );

}

export default LessonStyleThree;