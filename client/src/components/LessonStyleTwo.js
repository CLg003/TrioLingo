import { DndProvider } from 'react-dnd';
import React from 'react';
import { useState , useEffect } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragDrop from './DragDrop';

const LessonStyleTwo = ({words}) => {

    // // NEED AN ARRAY OF THE COLOURS FOR DnD
    // const colourList = [words.black, words.blue, words.brown, words.green, words.orange, words.purple, words.red, words.white, words.yellow];
    // // ADDING COLOUR NAME (ENGLISH) PROPERTY
    // colourList[0]['english'] = "black";
    // colourList[1]['english'] = "blue";
    // colourList[2]['english'] = "brown";
    // colourList[3]['english'] = "green";
    // colourList[4]['english'] = "orange";
    // colourList[5]['english'] = "purple";
    // colourList[6]['english'] = "red";
    // colourList[7]['english'] = "white";
    // colourList[8]['english'] = "yellow";
    // // ADDING ID PROPERTY (WON'T BE NEEDED ONCE DB UP AND RUNNING)
    // colourList[0]['id'] = 0;
    // colourList[1]['id'] = 1;
    // colourList[2]['id'] = 2;
    // colourList[3]['id'] = 3;
    // colourList[4]['id'] = 4;
    // colourList[5]['id'] = 5;
    // colourList[6]['id'] = 6;
    // colourList[7]['id'] = 7;
    // colourList[8]['id'] = 8;
    // // ADDING IMG PROPERTY (WON'T BE NEEDED ONCE IMAGES UPLOADED)
    // colourList[0]['img'] = '../images/colours/black.png';
    // colourList[1]['img'] = '../images/colours/blue.png';
    // colourList[2]['img'] = '../images/colours/brown.png';
    // colourList[3]['img'] = '../images/colours/green.png';
    // colourList[5]['img'] = '../images/colours/orange.png';
    // colourList[4]['img'] = '../images/colours/purple.png';
    // colourList[6]['img'] = '../images/colours/red.png';
    // colourList[7]['img'] = '../images/colours/white.png';
    // colourList[8]['img'] = '../images/colours/yellow.png';

    // let boardCounter = 0;

    // useEffect(() => {boardCounter ++}, )


    // useEffect(() => {fetchPlayers()}, []);
    // useEffect(() => {fetchStats()}, [players]);
    // useEffect(() => {setSelectedPlayer(null)}, [hideClick]);
    // useEffect(() => {setTeamClick(true)}, [!selectedPlayer]);
    // useEffect(() => {setStatsClick(false)}, [selectedPlayer]);
    // useEffect(() => {setHideClick(false)}, [selectedPlayer]);



    return (
        <div id="lesson-2">
            <h3>Lesson 2</h3>
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