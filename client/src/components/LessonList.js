import React from "react";
import LessonStyleOne  from './LessonStyleOne';
import LessonStyleTwo from './LessonStyleTwo';
import LessonStyleThree from './LessonStyleThree';


const LessonList = ({ words, lessonsCompleted }) => {

            if (lessonsCompleted === 0){
                return(
                    <LessonStyleOne words={words.numbers}/>
                )
                } else if (lessonsCompleted === 1) {
                return (
                    <LessonStyleTwo words={words.colours}/>
                )
                } else {
                return(
                    <LessonStyleThree words={words.animals}/>
                )
                }
            }

export default LessonList;