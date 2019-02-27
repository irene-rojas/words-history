import React, { Component } from 'react';
import './App.css';
import axios from 'axios';



class App extends Component {

    state = {
        etResult: ""
    }

    componentDidMount() {
        // const API_KEY = process.env.REACT_APP_MW_API_KEY;
        axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/cat?key=${process.env.REACT_APP_MW_API_KEY}`)
        .then(res => {
            this.setState({
                etResult: res.data[0].meta.id
            })
        });
        console.log(this.state.etResult);
    }


  render() {

    return (
      <div className="App">

        {/* <h1>{this.state.results}</h1> */}

        {/* {this.state.results.map((index, result) => 
            <h1 key={index}>{result.hwi}</h1>
        )} */}

      </div>
    );
  }
}

export default App;
