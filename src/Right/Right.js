import React from 'react';

const Right = (props) => {

    return (

        <div>
            Good job! 
            Learn more about <a href={props.link} target="_blank" rel="noopener noreferrer">{props.answer}</a>.
            <br/>
            <br/>
            Want to play again?
            <br/>
            <button onClick={props.onClick}>Yes!</button>
        </div>

    )

};

export default Right;