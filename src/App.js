import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


const words = ["baggage", "fan", "charge", "computer", "monitor", "keyboard", "news", "space", "fare", "camera", "cable", "boarder", "dog", "robot", "comma", "mug", "bow", "arow", "row", "arrow", "screen", "sound", "mail", "stop", "travel", "program", "light", "remote", "contact", "adventure", "journey", "passage", "react", "under", "tire", "support", "brave", "report", "attain", "achieve", "respond", "attach", "quirk", "expect", "await", "stay", "room", "space", "period", "ranged", "incline", "recline", "fade", "lose", "accord", "render", "supply", "win", "property", "forth", "shatter", "interest", "ring", "chain", "content"];

class App extends Component {

    state = {
        word: "",
        def: "",
        altChoices: []
        // create new array with three words that do not repeat. includes this.state.word
    }

    componentDidMount() {
        this.resetGame();
    }

    resetGame = () => {
        // select target word
        let word = words[Math.floor(Math.random() * words.length)];
        console.log(word);
        this.setState({
            word: word,
            altChoices: word
        });
        // select other words
        // this.selectChoices();
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

    // selectChoices = () => {
    //     let altWord = words[Math.floor(Math.random() * words.length)];
    //     console.log(altWord);
    //     let altChoices = [this.state.word, ...this.state.altChoices];
    //     altChoices.push({
    //         altWord
    //     })
    //     this.setState({
    //         altChoices: altWord + this.state.word
    //     })
    // }


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
                {this.state.word}
                <br />
                {this.state.altChoices}
            </div>

        </div>

      </div>
    );
  }
}

export default App;
