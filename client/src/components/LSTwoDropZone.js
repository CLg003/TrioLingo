import { useState } from 'react';
import { useDrop } from 'react-dnd';
import Colour from './LSTwoColour';

const DropZone = ({type, name, spanish, colourList}) => {
    const [typeBoard, setTypeBoard] = useState([]);

    const [{isOver}, drop] = useDrop(() => ({
        // accept: type
        accept: type,
        drop: (item) => addItemToTypeBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const addItemToTypeBoard = (id) => {
        // console.log(id);
        const copyColourList = colourList.filter((colour) => id === colour.id);
        const copyTypeBoard = [...typeBoard];
        copyTypeBoard.push(copyColourList[0]);
        setTypeBoard(copyTypeBoard);
        // console.log(typeBoard);
        // console.log('typeBoard length is: ' + typeBoard.length)
    }

    // {board.map((colour) => {
    //     return <Colour name={colour.english} img={colour.img} id={colour.id} key={colour.id} />
    // })}


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