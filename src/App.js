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
        axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/winter?key=${process.env.REACT_APP_MW_API_KEY}`)
        .then(res => {
            (console.log(res.data[0].def[0].sseq[0][0][1].dt[0][1]))
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
