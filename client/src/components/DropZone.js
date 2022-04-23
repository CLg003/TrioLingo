import { useState, useEffect } from 'react';
import React from "react";
import { useDrop } from 'react-dnd';
import Colour from './Colour';

const DropZone = ({type, name, spanish, colourList}) => {

    // // DESTINATION(S) FOR INDIVIDUAL DRAGGED ITEMS
    const [typeBoard, setTypeBoard] = useState([]);
    // // DESTINATION FOR ALL DRAGGED ITEMS
    // const [boardItemsNumber, setBoardItemsNumber] = useState(0);
    // useEffect(() => {setBoardItemsNumber(boardItemsNumber + 1)}, [typeBoard])

    // const [typesAddedToBoard, setTypesAddedToBoard] = useState([]);

    const [{isOver}, drop] = useDrop(() => ({
        accept: type,
        drop: (item) => {
            addItemToTypeBoard(item.id)
            // setTypesAddedToBoard([...typesAddedToBoard, type])
            // addItemToBoard(item.id);
            // addToBoardNumber();
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
        
        // addToBoardItems();
        // addItemToBoard(id);
        // console.log(typeBoard);
        // console.log('typeBoard length is: ' + typeBoard.length)
    }

    // const addItemToBoard = () => {
    //         // console.log(id);
    //         // const copyColourList = colourList.filter((colour) => id === colour.id);
    //         // const copyBoardItemsNumber = [...boardItemsNumber];
    //         // copyBoardItemsNumber.push(copyColourList[0]);
    //         setBoardItemsNumber(boardItemsNumber + 1);
    //         console.log(boardItemsNumber);
    //         // boardCounter ++;
    //         // console.log('boardCounter is at: ' + boardCounter)
    //         // console.log(board);
    //         // console.log('board length is: ' + board.length)
    //     }

    // FUNCTION TO ADD CORRECTLY DRAGGED ITEM TO MAIN BOARD 
    // const addItemToBoard = (id) => {
    //     // console.log(id);
    //     const copyColourList = colourList.filter((colour) => id === colour.id);
    //     const copyBoard = [...board];
    //     copyBoard.push(copyColourList[0]);
    //     setBoard(copyBoard);
    //     // boardCounter ++;
    //     // console.log('boardCounter is at: ' + boardCounter)
    //     // console.log(board);
    //     // console.log('board length is: ' + board.length)
    // }

    return (
        <div ref={drop} className="dropzone">
            { typeBoard.length > 0 ? 
            <div id="dragged-colours">
                <Colour name={name} />
                <p id="colour-text-overlay" className={name}>{spanish}</p>
            </div>
            : <p id="zone-to-fill" className={name}>{spanish}</p>
            }
        </div>
    );
}

export default DropZone;