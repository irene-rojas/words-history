import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

// const words = ["baggage", "fan", "charge", "computer", "monitor", "keyboard", "news", "space", "fare", "camera", "cable", "boarder", "dog", "robot", "comma", "mug", "bow", "arow", "row", "arrow", "screen", "sound", "mail", "stop", "travel", "program", "light", "remote", "contact", "adventure", "journey", "passage", "react", "under", "tire", "support", "brave", "report", "attain", "achieve", "respond", "attach", "quirk", "expect", "await", "stay", "room", "space", "period", "ranged", "incline", "recline", "fade", "lose", "accord", "render", "supply", "win", "property"];

class App extends Component {

    state = {
        // word: "",
        etResult: "",
        // altResult: ""
    }

    componentDidMount() {
        // but how choose a random word from the dictionary?
        axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/property?key=${process.env.REACT_APP_MW_API_KEY}`)
        .then(res => {
            const result = res.data[0].def[0].sseq[0][0][1].dt[0][1];   // shortdef
            // const displayResult = result.replace(/{bc}|{it}/gi, "");
            const displayResult = result.replace(/{bc}|{it}|a_link|d_link|sx/gi, "").replace(/[^a-zA-Z0-9(*), ]/gi, "");  //1st replace: specific exclusions. 2nd replace: protected items
            console.log(displayResult);
            // if word does not have a def at this point, ignore it and select a different word. repeat until necessary
            // need to ignore {} or other symbols 
        });
    }


  render() {

    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
