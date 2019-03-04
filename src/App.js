import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

// const words

class App extends Component {

    state = {
        // word: "",
        etResult: "",
        // altResult: ""
    }

    componentDidMount() {
        // but how choose a random word from the dictionary?
        axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/cat?key=${process.env.REACT_APP_MW_API_KEY}`)
        .then(res => {
            const result = res.data[0].def[0].sseq[0][0][1].dt[0][1];   // shortdef
            const displayResult = result.replace(/{bc}|{it}/gi, "");
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
