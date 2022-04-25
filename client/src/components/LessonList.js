import React from "react";
import LessonStyleOne  from './LessonStyleOne';
import LessonStyleTwo from './LessonStyleTwo';
import LessonStyleThree from './LessonStyleThree';


const LessonList = ({ words, lessonsCompleted }) => {

        if(!words) {
            return;
        }

            if (lessonsCompleted === 0){
                return(
                    <LessonStyleOne words={words[2].numbers}/>
                )
                } else if (lessonsCompleted === 1) {
                return (
                    <LessonStyleTwo words={words[1].colours}/>
                )
                } else {
                return(
                    <LessonStyleThree words={words[0].animals}/>
                )
                }
            }

export default LessonList;