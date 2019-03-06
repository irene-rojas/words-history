import React from "react";

const Choice = (props) => {

    return (

        <div className="choiceDiv">
            Answer choices:
            <label>{props.value}</label>
            <input type="radio" value={props.value}></input>
        </div>

    )
}

export default Choice;