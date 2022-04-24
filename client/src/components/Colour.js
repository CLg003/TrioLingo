import { useDrag } from 'react-dnd';
import React from 'react';


const Colour = ({name, img, id}) => {
    
    // MONITORING THE ITEM BEING DRAGGED
    const [{isDragging}, drag] = useDrag(() => ({
        type: name,
        item: {id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    const imageSrc = require(`../images/colours/icons8-fill-color-96${name.toUpperCase()}.png`);

    return (
            <img
                className="paint-cans"
                ref={drag}
                src={imageSrc}
                alt="Coloured paint can"
                width="150px"
                style={{ opacity: isDragging ? "0.5" : "1"}}
            />
    );
}

export default Colour;