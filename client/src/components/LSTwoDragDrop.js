import { useState } from 'react';
import { useDrop } from 'react-dnd';
import Colour from './LSTwoColour';
import '../LSTwoDragDrop.css';



const DragDrop = ({words}) => {
    // NEED AN ARRAY OF THE COLOURS FOR DnD
    const colourList = [words.black, words.blue, words.brown, words.green, words.orange, words.purple, words.red, words.white, words.yellow];
    // ADDING COLOUR PROPERTY
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

    
    // DESTINATION FOR DRAGGED ITEMS
    const [board, setBoard] = useState([]);
    // MONITORING WHETHER THE ITEM IS BEING DROPPED
    const [{isOver}, drop] = useDrop(() => ({
        accept: "colour",
        drop: (item) => addItemToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const addItemToBoard = (id) => {
        // console.log(id);
        const copyColourList = colourList.filter((colour) => id === colour.id);
        // TO ADD TO THE SELECTION OF DRAGGED ITEMS:
        setBoard((board) => [...board, copyColourList[0]]);

        // TO REPLACE CURRENT ITEM WITH DRAGGED ITEM:
        // setBoard([copyColourList[0]]);
    };

    return (
        <>
        <div className="dnd-colours">
            {colourList.map((colour) => {
                return <Colour name={colour.english} img={colour.img} id={colour.id} key={colour.id} />
            })}
        </div>
        <div className="dnd-board" ref={drop}>
            {board.map((colour) => {
                return <Colour name={colour.english} img={colour.img} id={colour.id} key={colour.id} />
            })}
        </div>
        </>
    );
    
}

export default DragDrop;