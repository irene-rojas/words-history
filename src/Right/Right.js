import React from 'react';

const Right = (props) => {

    return (

    <div className="sucessDiv">
        Good job! Want to play again?
        <br/>
        <button onClick={props.onClick}>Yes!</button>

    </div>

    )

}

export default Right;