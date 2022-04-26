import { DndProvider } from 'react-dnd';
import React from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragDrop from './DragDrop';

const LessonStyleTwo = ({words}) => {

    return (
        <div id="main-container">
            {/* DnD FUNCTIONALITY WRAPPER */}
            <DndProvider backend={HTML5Backend}>
                <div id="drag-drop-lesson">
                    <DragDrop words={words} />
                </div>
            </DndProvider>
        </div>
    );
}

export default LessonStyleTwo;