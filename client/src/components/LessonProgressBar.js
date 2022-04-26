import React from 'react';
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const LessonProgressBar = ({lessonsCompleted}) => {

    const percentage = (lessonsCompleted > 0 ? lessonsCompleted/3*100 : 0);
  

    return (
        <div id="progress-bar" >
        <ProgressBar 
            percent={percentage}
            hasStepZero={false}
            filledBackground="linear-gradient(to right, #992dd9 , #2bcf18)"
            width={800}
            height={30}
        >
            <Step>
                {( {accomplished}) => (
                    <>
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
                    <img 
                    style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                    width="60"
                    src={`${process.env.PUBLIC_URL}/assets/images/TrashPanda_noBkg.png`}></img>
                    </>
                )}
            </Step>
        </ProgressBar>
        </div>
    )

}

export default LessonProgressBar;