import React from "react";
import Colour from './Colour';
import DropZone from './DropZone';
import './DragDrop.css';


const DragDrop = ({words}) => {
    // NEED AN ARRAY OF THE COLOURS FOR DnD
    const colourList = [words.black, words.blue, words.brown, words.green, words.orange, words.purple, words.red, words.white, words.yellow];
    // ADDING COLOUR NAME (ENGLISH) PROPERTY
    colourList[0]['english'] = "black";
    colourList[1]['english'] = "blue";
    colourList[2]['english'] = "brown";
    colourList[3]['english'] = "green";
    colourList[4]['english'] = "orange";
    colourList[5]['english'] = "purple";
    colourList[6]['english'] = "red";
    colourList[7]['english'] = "white";
    colourList[8]['english'] = "yellow";
    // ADDING ID PROPERTY (WON'T BE NEEDED ONCE DB UP AND RUNNING)
    colourList[0]['id'] = 0;
    colourList[1]['id'] = 1;
    colourList[2]['id'] = 2;
    colourList[3]['id'] = 3;
    colourList[4]['id'] = 4;
    colourList[5]['id'] = 5;
    colourList[6]['id'] = 6;
    colourList[7]['id'] = 7;
    colourList[8]['id'] = 8;
    // ADDING IMG PROPERTY (WON'T BE NEEDED ONCE IMAGES UPLOADED)
    colourList[0]['img'] = '../images/colours/black.png';
    colourList[1]['img'] = '../images/colours/blue.png';
    colourList[2]['img'] = '../images/colours/brown.png';
    colourList[3]['img'] = '../images/colours/green.png';
    colourList[5]['img'] = '../images/colours/orange.png';
    colourList[4]['img'] = '../images/colours/purple.png';
    colourList[6]['img'] = '../images/colours/red.png';
    colourList[7]['img'] = '../images/colours/white.png';
    colourList[8]['img'] = '../images/colours/yellow.png';

    // console.log(colourList);

    // const dropZones = ["red", "orange", "yellow", "green", "blue", "purple", "black", "white", "brown"]
    
    // CODE TO SHUFFLE colourList:
    // colourList.sort(function(a, b){return 0.5 - Math.random()});

    return (
        <div id="paints-and-board">
            <div className="dnd-colours">
                {colourList.sort(function(a, b){return 0.5 - Math.random()}).map((colour) => {
                    return <Colour name={colour.english} img={colour.img} id={colour.id} key={colour.id} />
                })}
            </div>
            <div className="dnd-board">
                {colourList.sort(function(a, b){return 0.5 - Math.random()}).map((colour) => {
                    return <DropZone key={colour.id} type={colour.english} name={colour.english} spanish={colour.translation} colourList={colourList} />
                })}
            </div>
        </div>
    );
    
}

export default DragDrop;