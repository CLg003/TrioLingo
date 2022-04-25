import React from 'react';

const Answer = ({answer}) => {

    return (
        <>
        {answer === "wrong" ? <p>wrong</p> : <p>correctx</p>}
        </>
    );

}

export default Answer;