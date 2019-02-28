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
        axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/cat?key=${process.env.REACT_APP_MW_API_KEY}`)
        .then(res => {
            this.setState({
                etResult: res.data
            })
        });
        console.log(this.state.etResult);
    }


  render() {

    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
