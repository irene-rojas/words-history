import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

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
        wordId: "",
        def: "",
        wordChoice1: [],
        wordChoice2: [],
        wordChoice3: [],
        choices: [],
        userChoice: "",
    }

    componentDidMount() {
        this.resetGame();
    }

    generateWordArray = () => {
        let newChoices = [];

        let wordChoice1 = words[Math.floor(Math.random() * words.length)];
        // console.log(wordChoice1);
        let wordChoice2 = words[Math.floor(Math.random() * words.length)];
        // console.log(wordChoice2);
        let wordChoice3 = words[Math.floor(Math.random() * words.length)];
        // console.log(wordChoice3);
        this.setState({
            wordChoice1: wordChoice1,
            wordChoice2: wordChoice2,
            wordChoice3: wordChoice3
        });
        newChoices.push(wordChoice1, wordChoice2, wordChoice3);
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
        let targetWord = wordArray[Math.floor(Math.random() * wordArray.length)];
        let word = targetWord.word;
        let wordId = targetWord.id;
        this.setState({
            word: word,
            wordId: wordId,
        });
        console.log(`word = ${word}`);
        console.log(`wordId = ${wordId}`);

        // API call
        axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${process.env.REACT_APP_MW_API_KEY}`)
        .then(res => {
            const result = res.data[0].def[0].sseq[0][0][1].dt[0][1]; // shortdef
            const defResult = result.replace(/{bc}|{it}|a_link|d_link|sx/gi, "").replace(/[^a-zA-Z0-9(*), ]/gi, "");  
            //1st replace: specific exclusions. 2nd replace: protected items
            this.setState({
                def: defResult
            });
            console.log(`definition = ${defResult}`);
        });
    }

    handleRadioClick = (event) => {
        // no event.preventDefault(); because want it to work on first click
        let radioClick = event.target.value;
        this.setState({
          userChoice: radioClick
            });
        console.log(`ID = ${radioClick}`);

      };

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(`userChoice = ${this.state.userChoice}`);
    //     console.log(`wordId = ${this.state.wordId}`);

    //     if (this.state.userChoice === this.state.wordId) {
    //         console.log("hurray!");
    //         // this.resetGame();
    //     };
    //     if (this.state.userChoice !== this.state.wordId) {
    //         console.log("nope!");
    //         // this.resetGame();
    //     };
    // }


  render() {
    return (
      <div className="App">

        <div className="header">
            <h1 className="title">What Does It Mean?</h1>
            Match the definition to the word
        </div>

        <div className="contentDiv">

            <div className="def">
                Definition: {this.state.def}
            </div>

            <div className="choices"> 
                Word Choices:
                <hr></hr>

                <div className="radioDiv">
                    <form>
                        <div className="word1Div">
                            <label>
                                <input 
                                    type="radio"
                                    value={this.state.wordChoice1.id}
                                    checked={this.state.userChoice === this.state.wordChoice1.id}
                                    {/* wait - aren't you saying that userChoice, already defined, is somehow now equal to a different number? how does the system compare them when you're saying they're the same but, are they? */}
                                    className="radioButton"
                                    onChange={this.handleRadioClick}
                                />
                                {this.state.wordChoice1.word}
                            </label>
                        </div>

                        <div className="word2Div">
                            <label>
                                <input 
                                    type="radio"
                                    value={this.state.wordChoice2.id}
                                    checked={this.state.userChoice === this.state.wordChoice2.id}
                                    className="radioButton"
                                    onChange={this.handleRadioClick}
                                />
                                {this.state.wordChoice2.word}
                            </label>
                        </div>

                        <div className="word3Div">
                            <label>
                                <input 
                                    type="radio"
                                    value={this.state.wordChoice3.id}
                                    checked={this.state.userChoice === this.state.wordChoice3.id}
                                    className="radioButton"
                                    onChange={this.handleRadioClick}
                                />
                                {this.state.wordChoice3.word}
                            </label>
                        </div>

                        {/* <div className="submitDiv"> 
                            <button onClick={this.handleSubmit}>Submit</button>
                        </div> */}

                    </form>
                </div> {/* end radioDiv */}

            </div> {/* end choices */}
            
        </div> {/* end contentDiv */}

      </div>
    // end App

    );
  }
}

export default App;
