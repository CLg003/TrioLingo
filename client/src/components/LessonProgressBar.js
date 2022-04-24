import React from 'react';
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const LessonProgressBar = ({lessonsCompleted}) => {

    return (
        <>
        <ProgressBar 
            percent={25}
            hasStepZero={false}
            filledBackground="linear-gradient(to right, #992dd9 , #2bcf18)"
            width={800}
            height={30}
        >
            <Step>
                {( {accomplished}) => (
                    <>
                    <p>Lesson One</p>
                    <img
                    style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                    width="60"
                    src={`${process.env.PUBLIC_URL}/assets/images/TrashPanda_noBkg.png`}></img>
                    
                    </>
                )}
            </Step>
            <Step>
                {( {accomplished}) => (
                    <>
                    <p>Lesson Two</p>
                    <img 
                    style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                    width="60"
                    src={`${process.env.PUBLIC_URL}/assets/images/TrashPanda_noBkg.png`}></img>
                    </>
                )}
            </Step>
            <Step>
                {( {accomplished}) => (
                    <>
                    <p>Lesson Three</p>
                    <img 
                    style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                    width="60"
                    src={`${process.env.PUBLIC_URL}/assets/images/TrashPanda_noBkg.png`}></img>
                    </>
                )}
            </Step>
        </ProgressBar>
        </>
    )

}

export default LessonProgressBar;