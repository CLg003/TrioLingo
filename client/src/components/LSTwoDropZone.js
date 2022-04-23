import { useState } from 'react';
import React from "react";
import { useDrop } from 'react-dnd';
import Colour from './LSTwoColour';

const DropZone = ({type, name, spanish, colourList}) => {

    // DESTINATION(S) FOR INDIVIDUAL DRAGGED ITEMS
    const [typeBoard, setTypeBoard] = useState([]);
    // DESTINATION FOR ALL DRAGGED ITEMS
    const [board, setBoard] = useState([]);

    const [{isOver}, drop] = useDrop(() => ({
        accept: type,
        drop: (item) => {
            addItemToTypeBoard(item.id);
            addItemToBoard(item.id);
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));
    // FUNCTION TO ADD CORRECTLY DRAGGED ITEM TO INVIDUAL ITEM BOARD
    const addItemToTypeBoard = (id) => {
        // console.log(id);
        const copyColourList = colourList.filter((colour) => id === colour.id);
        const copyTypeBoard = [...typeBoard];
        copyTypeBoard.push(copyColourList[0]);
        setTypeBoard(copyTypeBoard);
        // addItemToBoard(id);
        // console.log(typeBoard);
        // console.log('typeBoard length is: ' + typeBoard.length)
    }

    // FUNCTION TO ADD CORRECTLY DRAGGED ITEM TO MAIN BOARD 
    const addItemToBoard = (id) => {
        // console.log(id);
        const copyColourList = colourList.filter((colour) => id === colour.id);
        const copyBoard = [...board];
        copyBoard.push(copyColourList[0]);
        setBoard(copyBoard);
        console.log(board);
        console.log('board length is: ' + board.length)
    }

    return (
        <div ref={drop} className="dropzone">
            { typeBoard.length > 0 ? 
            <Colour name={name} />
            : <p className={name}>{spanish}</p>
            }
        </div>
    );
}

export default DropZone;