import React from 'react';

const Answer = ({answer}) => {

    return (
        <>
        {answer === "wrong" ? <span>❌</span> : <span>✅</span>}
        </>
    );

}

export default Answer;