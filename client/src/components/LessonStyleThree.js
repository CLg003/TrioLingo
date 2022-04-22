import React, {useState} from "react";

const LessonStyleThree = ({words}) => {

    const [showHoverContent, setShowHoverContent] = useState(false);

    return (
        <>
        <h2>Animals Lesson</h2>
        <p onMouseEnter={() => setShowHoverContent(true)}
            onMouseLeave={() => setShowHoverContent(false)}
        >The dog chases a ball</p>
        {showHoverContent && (
        <div>
          {words.dog.translation}
        </div>
      )}
        <p>The cat is asleep</p>
        <p>The raccoon is eating fish</p>
        <p>The duck swims on the pond</p>
        <p>The eagle flies high</p>
        <p>The dinosaur is frightening</p>
        <p>The pig lives on the farm</p>
        <p>The frog goes "Croak"</p>
        </>

    );

}

export default LessonStyleThree;