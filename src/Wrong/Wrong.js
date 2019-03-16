import React from 'react';

const Wrong = (props) => {

    return (

        <div>
            Sorry! The correct word is {props.answer}.
            <br />
            Want to play again?
            <br />
            <button onClick={props.onClick}>Yes!</button>
        </div>

    )

}

export default Wrong;