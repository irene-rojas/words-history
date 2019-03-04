import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


const words = ["baggage", "fan", "charge", "computer", "monitor", "keyboard", "news", "space", "fare", "camera", "cable", "boarder", "dog", "robot", "comma", "mug", "bow", "arow", "row", "arrow", "screen", "sound", "mail", "stop", "travel", "program", "light", "remote", "contact", "adventure", "journey", "passage", "react", "under", "tire", "support", "brave", "report", "attain", "achieve", "respond", "attach", "quirk", "expect", "await", "stay", "room", "space", "period", "ranged", "incline", "recline", "fade", "lose", "accord", "render", "supply", "win", "property", "forth", "shatter", "interest", "ring", "chain"];

class App extends Component {

    state = {
        word: "",
        def: "",
        // altChoices:
    }

    componentDidMount() {
        this.resetGame();
    }

    resetGame = () => {
        let word = words[Math.floor(Math.random() * words.length)];
        console.log(word);
        this.setState({
            word: word,
        });
        // but how choose a random word from the dictionary?
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


  render() {

    return (
      <div className="App">

        <div> 
            {this.state.word}
        </div>

        <div>
            {this.state.def}
        </div>

      </div>
    );
  }
}

export default App;
