import { useDrag } from 'react-dnd';

const Colour = ({id, img}) => {
    const [{isDragging}, drag] = useDrag(() => ({
        type: "colour",
        item: {id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));
    return (
        <img
            ref={drag}
            src={img}
            width="150px"
            style={{ border: isDragging ? "5px solid purple" : "0px"}}
        />
    );
}

export default Colour;