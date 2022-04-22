import { useState } from 'react';
import { useDrop } from 'react-dnd';
import Colour from './LSTwoColour';
import '../LSTwoDragDrop.css';



const DragDrop = ({words}) => {
    // NEED AN ARRAY OF THE COLOURS FOR DnD
    const colourList = [words.black, words.blue, words.brown, words.green, words.orange, words.purple, words.red, words.white, words.yellow];
    // ADDING COLOUR PROPERTY
    colourList[0]['colour'] = "black";
    colourList[1]['colour'] = "blue";
    colourList[2]['colour'] = "brown";
    colourList[3]['colour'] = "green";
    colourList[4]['colour'] = "orange";
    colourList[5]['colour'] = "purple";
    colourList[6]['colour'] = "red";
    colourList[7]['colour'] = "white";
    colourList[8]['colour'] = "yellow";
    // ADDING ID PROPERTY (WON'T BE NEEDED ONCE DB UP AND RUNNING)
    colourList[0]['id'] = 0;
    colourList[1]['id'] = 1;
    colourList[2]['id'] = 2;
    colourList[3]['id'] = 3;
    colourList[4]['id'] = 4;
    colourList[5]['id'] = 5;
    colourList[6]['id'] = 6;
    colourList[7]['id'] = 7;
    colourList[8]['id'] = 8;
    // ADDING IMG PROPERTY (WON'T BE NEEDED ONCE IMAGES UPLOADED)
    colourList[0]['img'] = 'https://flyclipart.com/thumb2/black-square-png-free-download-468632.png';
    colourList[1]['img'] = 'https://flyclipart.com/thumb2/blue-square-image-564985.png';
    colourList[2]['img'] = 'https://img.favpng.com/18/12/18/brown-rectangle-beige-square-png-favpng-kXDVeNw5TgcZjG1TbN5SC6Z6v.jpg';
    colourList[3]['img'] = 'https://flyclipart.com/thumb2/download-green-square-rounded-corners-clipart-255275.png';
    colourList[5]['img'] = 'https://flyclipart.com/thumb2/square-clip-art-186912.png';
    colourList[4]['img'] = 'https://www.pngkey.com/png/full/107-1076389_purple-square-free-clipart-image-lilac.png';
    colourList[6]['img'] = 'https://flyclipart.com/thumb2/square-transparent-png-pictures-230837.png';
    colourList[7]['img'] = 'https://flyclipart.com/thumb2/square-468638.png';
    colourList[8]['img'] = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlaMYF00T-1pBcGvqsYW2G2IRmJBTufWXyOg&usqp=CAU';

    // console.log(colourList[0].img);

    
    // DESTINATION FOR DRAGGED ITEMS
    const [board, setBoard] = useState([]);
    // MONITORING WHETHER THE ITEM IS BEING DROPPED
    const [{isOver}, drop] = useDrop(() => ({
        accept: "colour",
        drop: (item) => addItemToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const addItemToBoard = (id) => {
        // console.log(id);
        const copyColourList = colourList.filter((colour) => id === colour.id);
        // TO ADD TO THE SELECTION OF DRAGGED ITEMS:
        setBoard((board) => [...board, copyColourList[0]]);

        // TO REPLACE CURRENT ITEM WITH DRAGGED ITEM:
        // setBoard([copyColourList[0]]);
    };

    return (
        <>
        <div className="dnd-colours">
            {colourList.map((colour) => {
                return <Colour url={colour.img} id={colour.id} key={colour.id} />
            })}
        </div>
        <div className="dnd-board" ref={drop}>
            {board.map((colour) => {
                return <Colour url={colour.img} id={colour.id} key={colour.id} />
            })}
        </div>
        </>
    );
    
}

export default DragDrop;