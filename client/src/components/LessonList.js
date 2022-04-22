import LessonStyleOne  from './LessonStyleOne';
import LessonStyleTwo from './LessonStyleTwo';
import LessonStyleThree from './LessonStyleThree';


const LessonList = ({ words, lessonsCompleted }) => {

        // UNCOMMENT LINES BELOW BEFORE PUSHING
            // if (lessonsCompleted === 0){
            //     return(
            //         <LessonStyleOne words={words.numbers}/>
            //     )
            //     } else if (lessonsCompleted === 1) {
                return (
                    <LessonStyleTwo words={words.colours}/>
                )
                // } else {
                // return(
                //     <LessonStyleThree words={words.animals}/>
                // )
                // }
            }

export default LessonList;