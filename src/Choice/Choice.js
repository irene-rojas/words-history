import React from "react";

const Choice = (props) => {

    return (

            <div className="radioDiv">
                <form>
                    <div className="word1Div">
                        <label>
                            <input 
                                type="radio"
                                value="wordChoice1"
                                name="radioButton"
                                checked={props}
                                className="form-check-input"
                                onChange={props.handleRadioClick}
                            />
                            Option 1
                        </label>
                    </div>

                    <div className="word2Div">
                        <label>
                            <input 
                                type="radio"
                                value="wordChoice2"
                                name="radioButton"
                                checked={props}
                                className="form-check-input"
                                onChange={props.handleRadioClick}
                            />
                            Option 2
                        </label>
                    </div>

                    <div className="word3Div">
                        <label>
                            <input 
                                type="radio"
                                value="wordChoice3"
                                name="radioButton"
                                checked={props}
                                className="form-check-input"
                                onChange={props.handleRadioClick}
                            />
                            Option 3
                        </label>
                    </div>

                </form>
            </div>

    )
}

export default Choice;