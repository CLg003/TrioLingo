import { useDrag } from 'react-dnd';

function Colour({id, url}) {
    // MONITORING THE ITEM BEING DRAGGED
    const [{isDragging}, drag] = useDrag(() => ({
        type: "colour",
        item: {id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));
    return (
        <>
            <img
                ref={drag}
                src={url}
                alt="Coloured square"
                width="150px"
                style={{ border: isDragging ? "5px solid purple" : "0px"}}
            />
        </>
    );
}

export default Colour;