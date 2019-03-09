import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
// import Choice from "./Choice/Choice";

const words = 
[
    {word: "baggage", id: 1}, 
    {word: "fan", id: 2}, 
    {word: "charge", id: 3}, 
    {word: "computer", id: 4}, 
    {word: "monitor", id: 5}, 
    {word: "keyboard", id: 6}, 
    {word: "news", id: 7}, 
    {word: "space", id: 8}, 
    {word: "fare", id: 9}, 
    {word: "camera", id: 10}, 
    {word: "cable", id: 11}, 
    {word: "boarder", id: 12}, 
    {word: "dog", id: 13}, 
    {word: "robot", id: 14}, 
    {word: "comma", id: 15}, 
    {word: "mug", id: 16}, 
    {word: "bow", id: 17}, 
    {word: "arow", id: 18}, 
    {word: "row", id: 19}, 
    {word: "arrow", id: 20}, 
    {word: "screen", id: 21}, 
    {word: "sound", id: 22}, 
    {word: "mail", id: 23}, 
    {word: "stop", id: 24}, 
    {word: "travel", id: 25}, 
    {word: "program", id: 26}, 
    {word: "light", id: 27}, 
    {word: "remote", id: 28}, 
    {word: "contact", id: 29}, 
    {word: "adventure", id: 30}, 
    {word: "journey", id: 31}, 
    {word: "passage", id: 32}, 
    {word: "react", id: 33}, 
    {word: "under", id: 34}, 
    {word: "tire", id: 35}, 
    {word: "support", id: 36}, 
    {word: "brave", id: 37}, 
    {word: "report", id: 38}, 
    {word: "attain", id: 39}, 
    {word: "achieve", id: 40}, 
    {word: "respond", id: 41}, 
    {word: "attach", id: 42}, 
    {word: "quirk", id: 43}, 
    {word: "expect", id: 44}, 
    {word: "await", id: 45}, 
    {word: "stay", id: 46}, 
    {word: "room", id: 47}, 
    {word: "space", id: 48}, 
    {word: "period", id: 49}, 
    {word: "ranged", id: 50}, 
    {word: "incline", id: 51}, 
    {word: "recline", id: 52}, 
    {word: "fade", id: 53}, 
    {word: "lose", id: 54}, 
    {word: "accord", id: 55}, 
    {word: "render", id: 56}, 
    {word: "supply", id: 57}, 
    {word: "win", id: 58}, 
    {word: "property", id: 59}, 
    {word: "forth", id: 60}, 
    {word: "shatter", id: 61}, 
    {word: "interest", id: 62}, 
    {word: "ring", id: 63}, 
    {word: "chain", id: 64}, 
    {word: "content", id: 65}, 
    {word: "board", id: 66},
    {word: "candid", id: 67}
];
// words that reach shortdef endpoint without error


class App extends Component {

    state = {
        word: "",
        wordChoice1: "",
        wordChoice2: "",
        wordChoice3: "",
        userChoice: "",
        def: "",
        choices: []
    }

    componentDidMount() {
        this.resetGame();
    }

    generateWordArray = () => {
        let newChoices = [];

        let wordChoice1 = words[Math.floor(Math.random() * words.length)];
        console.log(wordChoice1);
        this.setState({
            wordChoice1: wordChoice1
        });
        newChoices.push(wordChoice1);

        let wordChoice2 = words[Math.floor(Math.random() * words.length)];
        console.log(wordChoice2);
        this.setState({
            wordChoice2: wordChoice2
        });
        newChoices.push(wordChoice2);

        let wordChoice3 = words[Math.floor(Math.random() * words.length)];
        console.log(wordChoice3);
        this.setState({
            wordChoice3: wordChoice3
        });
        newChoices.push(wordChoice3); 

        console.log(newChoices);  
        this.setState({
            choices: newChoices
        });   
        // prevent repeat words in array
        if (wordChoice1.id === wordChoice2.id || wordChoice1.id === wordChoice3.id || wordChoice2.id === wordChoice3.id) {
            this.generateWordArray();
        }
        return newChoices; 
    }

    resetGame = () => {
        let wordArray = this.generateWordArray();
        let word = wordArray[Math.floor(Math.random() * wordArray.length)].word;
        this.setState({
            word: word
        });
        console.log(`${word} resetGame`)

        // API call
        axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${process.env.REACT_APP_MW_API_KEY}`)
        .then(res => {
            const result = res.data[0].def[0].sseq[0][0][1].dt[0][1]; // shortdef
            const defResult = result.replace(/{bc}|{it}|a_link|d_link|sx/gi, "").replace(/[^a-zA-Z0-9(*), ]/gi, "");  
            //1st replace: specific exclusions. 2nd replace: protected items
            this.setState({
                def: defResult
            });
            console.log(defResult);
        });
    }

    handleRadioClick = (event) => {
        // no event.preventDefault(); because want to work on first click
        let userRadio = event.target.value;
        console.log(`line 154 ${userRadio}`);
        this.setState({
          userChoice: userRadio
        }, () => {
            console.log(`line 158 You clicked ${this.state.userChoice}`);
            // callback to update console log in real time
            let userChoice = userRadio.id;
            this.setState({
                userChoice: userChoice
            }, () => {
                console.log(this.state.userChoice);
            })
        });
      };

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.userChoice === this.state.word) {
            console.log(`hurray!`);
            // this.resetGame();
        };
        // if (this.state.userChoice.id === !this.state.word) {
        //     console.log("oops");
        // }
    }


  render() {
    return (
      <div className="App">

        <div className="header">

            <h1 className="title">Title Goes Here</h1>

            <div>Instructions here</div>

        </div>

        <div className="contentDiv">

            <div className="def">
                Definition: {this.state.def}
            </div>

            <div className="choices"> 
                Target Word: {this.state.word}
                <br />

            <hr></hr>

            <div className="radioDiv">
                <form>
                    <div className="word1Div">
                        <label>
                            <input 
                                type="radio"
                                value="wordChoice1"
                                name="radioButton"
                                checked={this.state.userChoice === "wordChoice1"}
                                className="form-check-input"
                                onChange={this.handleRadioClick}
                            />
                            {this.state.wordChoice1.word}
                        </label>
                    </div>

                    <div className="word2Div">
                        <label>
                            <input 
                                type="radio"
                                value="wordChoice2"
                                name="radioButton"
                                checked={this.state.userChoice === "wordChoice2"}
                                className="form-check-input"
                                onChange={this.handleRadioClick}
                            />
                            {this.state.wordChoice2.word}
                        </label>
                    </div>

                    <div className="word3Div">
                        <label>
                            <input 
                                type="radio"
                                value="wordChoice3"
                                name="radioButton"
                                checked={this.state.userChoice === "wordChoice3"}
                                className="form-check-input"
                                onChange={this.handleRadioClick}
                            />
                            {this.state.wordChoice3.word}
                        </label>
                    </div>

                </form>
            </div>

            <div className="submitDiv"> 
                <button onClick={this.handleSubmit}>Submit</button>
            </div>

            </div>

        </div>

      </div>
    );
  }
}

export default App;
