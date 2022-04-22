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
        {/* <p onMouseEnter={() => setShowDogContent(true)}
            onMouseLeave={() => setShowDogContent(false)}
        >The dog chases a ball</p> */}
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
        <p onMouseEnter={() => setShowCatContent(true)}
            onMouseLeave={() => setShowCatContent(false)}
        >The cat is asleep</p>
        {showCatContent && (
        <div>
          {words.cat.translation}
        </div>
      )} 
        <p onMouseEnter={() => setShowFishContent(true)}
            onMouseLeave={() => setShowFishContent(false)}
        >The fish swims in the sea</p>
        {showFishContent && (
        <div>
          {words.fish.translation}
        </div>
      )}     
        <p onMouseEnter={() => setShowDuckContent(true)}
            onMouseLeave={() => setShowDuckContent(false)}
        >The duck swims on the pond</p>
        {showDuckContent && (
        <div>
          {words.duck.translation}
        </div>
      )}     
        <p onMouseEnter={() => setShowPenguinContent(true)}
            onMouseLeave={() => setShowPenguinContent(false)}
        >The penguin is eating fish</p>
        {showPenguinContent && (
        <div>
          {words.penguin.translation}
        </div>
      )}     
        <p onMouseEnter={() => setShowDinoContent(true)}
            onMouseLeave={() => setShowDinoContent(false)}
        >The dinosaur is frightening</p>
        {showDinoContent && (
        <div>
          {words.dinosaur.translation}
        </div>
      )}     
        <p onMouseEnter={() => setShowPigContent(true)}
            onMouseLeave={() => setShowPigContent(false)}
        >The pig lives on the farm</p>
        {showPigContent && (
        <div>
          {words.pig.translation}
        </div>
      )}     
        <p onMouseEnter={() => setShowFrogContent(true)}
            onMouseLeave={() => setShowFrogContent(false)}
        >The frog goes "Croak"</p>
        {showFrogContent && (
        <div>
          {words.frog.translation}
        </div>
      )}     
        </>

    );

}

export default LessonStyleThree;