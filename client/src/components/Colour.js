import { useDrag } from 'react-dnd';
import React from 'react';
import {useSound} from 'use-sound';
import colourSound from '../sound/All_colors.mp4';


const Colour = ({name, img, id}) => {
    
    // MONITORING THE ITEM BEING DRAGGED
    const [{isDragging}, drag] = useDrag(() => ({
        type: name,
        item: {id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

        // SOUNDS

        const [play] = useSound(colourSound, {
            sprite: {
                red: [0, 1500],
                green: [2500, 2000],
                yellow: [4000, 2000],
                orange: [6500, 2000],
                brown: [8500, 2000],
                blue: [10000, 2000],
                white: [12500, 2000],
                black: [14500, 2000],
                purple: [16500, 2000]
            }
        });

    return (
            <img
                className="paint-cans"
                ref={drag}
                src={`${process.env.PUBLIC_URL}${img}`}
                alt="Coloured paint can"
                width="150px"
                style={{ opacity: isDragging ? "0.5" : "1"}}
                onClick={()=> play({id: name})}
            />
    );
}

export default Colour;