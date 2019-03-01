import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

    state = {
        // word: "",
        etResult: "",
        // altResult: ""
    }

    componentDidMount() {
        // but how choose a random word from the dictionary?
        axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/speaker?key=${process.env.REACT_APP_MW_API_KEY}`)
        .then(res => {
            (console.log(res.data[0].def[0].sseq[0][0][1].dt[0][1]))
            // if word does not have a def at this point, ignore it and select a different word. repeat until necessary
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
