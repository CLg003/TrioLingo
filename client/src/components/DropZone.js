import { useState, useEffect } from 'react';
import React from "react";
import { useDrop } from 'react-dnd';
import Colour from './Colour';


const DropZone = ({type, name, img, id, spanish, colourList, resetBoard, boardHasItems}) => {

    // DESTINATION(S) FOR INDIVIDUAL DRAGGED ITEMS
    const [typeBoard, setTypeBoard] = useState([]);

    useEffect(() => {boardHasItems()}, [typeBoard]);
    useEffect(() => {setTypeBoard([])}, [resetBoard]);



    // DROPZONE MONITORING
    const [{isOver}, drop] = useDrop(() => ({
        accept: type,
        drop: (item) => {
            addItemToTypeBoard(item.id);
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    // FUNCTION TO ADD CORRECTLY DRAGGED ITEM TO INVIDUAL ITEM BOARD
    const addItemToTypeBoard = (id) => {
        const copyColourList = colourList.filter((colour) => id === colour.id);
        const copyTypeBoard = [...typeBoard];
        copyTypeBoard.push(copyColourList[0]);
        setTypeBoard(copyTypeBoard);
    }

    return (
        <div ref={drop} className="dropzone">
            { typeBoard.length > 0 ? 
            <div id="dragged-colours">
                <Colour name={name} img={img} id={id}/>
                <p id="colour-text-overlay" className={name}>{spanish}</p>
            </div>
            : <p id="zone-to-fill" className={name}>{spanish}</p>
            }
        </div>
    );
}

export default DropZone;