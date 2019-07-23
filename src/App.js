import React, { Component } from 'react';
import Quote from  './components/quote';
import './App.css';
var FontAwesome = require('react-fontawesome');

class App extends Component {
  state = {
    quotes: [
      'test quote 1',
      'test quote 2'
    ],
    selectedQuote: null
  }

  render() {
    return (
      <div className='App'>
        <h1>Scrum Master as a Service</h1>
        <Quote quote={this.state.selectedQuote} />
        <button>Impart some wisdom <FontAwesome name="hat-wizard" /></button>
      </div>
    );
  }
}

export default App;
