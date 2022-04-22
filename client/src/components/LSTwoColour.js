import { useDrag } from 'react-dnd';

function Colour({name, img, id}) {
    // MONITORING THE ITEM BEING DRAGGED
    const [{isDragging}, drag] = useDrag(() => ({
        type: "colour",
        item: {id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    const imageSrc = require(`../images/colours/${name}.png`)

    return (
        <>
            <img
                ref={drag}
                src={imageSrc}
                alt="Coloured paint can"
                width="150px"
                style={{ border: isDragging ? "5px solid purple" : "0px"}}
            />
        </>
    );
}

export default Colour;