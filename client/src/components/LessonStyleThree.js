import React, {useState} from "react";

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
                        dog    
                </button> chases a ball</p>
        {showDogContent && (
        <div>
          {words.dog.translation}
        </div>
      )}
        
        <p>The <button type="button"
                        onMouseEnter={() => setShowCatContent(true)}
                        onMouseLeave={() => setShowCatContent(false)}>
                        cat
                </button> is asleep</p>
        {showCatContent && (
        <div>
          {words.cat.translation}
        </div>
      )} 
        
        <p>The <button type="button"
                        onMouseEnter={() => setShowFishContent(true)}
                        onMouseLeave={() => setShowFishContent(false)}>
                        fish
                </button> swims in the sea</p>
        {showFishContent && (
        <div>
          {words.fish.translation}
        </div>
      )}     
        
        <p>The <button type="button"
                        onMouseEnter={() => setShowDuckContent(true)}
                        onMouseLeave={() => setShowDuckContent(false)}>
                        duck
                </button> swims on the pond</p>
        {showDuckContent && (
        <div>
          {words.duck.translation}
        </div>
      )}     
        
        <p>The <button type="button"
                        onMouseEnter={() => setShowPenguinContent(true)}
                        onMouseLeave={() => setShowPenguinContent(false)}>
                        penguin
                </button> is eating fish</p>
        {showPenguinContent && (
        <div>
          {words.penguin.translation}
        </div>
      )}     
        
        <p>The <button type="button"
                        onMouseEnter={() => setShowDinoContent(true)}
                        onMouseLeave={() => setShowDinoContent(false)}>
                        dinosaur
                </button> is frightening</p>
        {showDinoContent && (
        <div>
          {words.dinosaur.translation}
        </div>
      )}     
        
        <p>The <button type="button"
                        onMouseEnter={() => setShowPigContent(true)}
                        onMouseLeave={() => setShowPigContent(false)}>
                        pig
                </button> lives on the farm</p>
        {showPigContent && (
        <div>
          {words.pig.translation}
        </div>
      )}     
        
        <p>The <button type="button"
                        onMouseEnter={() => setShowFrogContent(true)}
                        onMouseLeave={() => setShowFrogContent(false)}>
                        frog
                </button> goes "Croak"</p>
        {showFrogContent && (
        <div>
          {words.frog.translation}
        </div>
      )}     
        </>

    );

}

export default LessonStyleThree;