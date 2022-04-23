import { useDrag } from 'react-dnd';

const Colour = ({name, img, id}) => {
    // MONITORING THE ITEM BEING DRAGGED
    const [{isDragging}, drag] = useDrag(() => ({
        type: name,
        item: {id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    const imageSrc = require(`../images/colours/${name}.png`);

    return (
        <>
            <img
                className="paint-cans"
                ref={drag}
                src={imageSrc}
                alt="Coloured paint can"
                width="150px"
                style={{ opacity: isDragging ? "0.5" : "1"}}
            />
        </>
    );
}

export default Colour;