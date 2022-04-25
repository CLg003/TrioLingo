import React from 'react';

const Answer = ({answer}) => {

    return (
        <>
        {answer === "wrong" ? <p>wrong</p> : <p>correct</p>}
        </>
    );

}

export default Answer;