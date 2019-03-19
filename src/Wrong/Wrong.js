import React from 'react';

const Wrong = (props) => {

    return (

        <div>
            Sorry! The correct word is <a href={props.link} target="_blank" rel="noopener noreferrer">{props.answer}</a>.
            <br/>
            <br/>
            Want to play again?
            <br/>
            <button onClick={props.onClick}>Yes!</button>
        </div>

    )

}

export default Wrong;