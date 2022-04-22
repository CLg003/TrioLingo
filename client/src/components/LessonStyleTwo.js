import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragDrop from './LSTwoDragDrop';

const LessonStyleTwo = ({words}) => {
    return (
        <div id="lesson-2">
            <h3>Lesson 2</h3>
            <h2 classname="lesson-topic">Colours</h2>
            <DndProvider backend={HTML5Backend}>
                <div id="drag-drop-lesson">
                    <DragDrop words={words}/>
                </div>
            </DndProvider>
        </div>
    );
}

export default LessonStyleTwo;