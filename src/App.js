import React, { Component } from 'react';
import './App.css';


const API_KEY = process.env.REACT_APP_MW_API_KEY;

class App extends Component {

    state = {
        results: []
    }



  render() {


    return (
      <div className="App">

        {this.state.results}


      </div>
    );
  }
}

export default App;
