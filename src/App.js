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

  selectQuote = () => {
    const rand = Math.round(Math.random() * (this.state.quotes.length - 1));
    const quote = this.state.quotes[rand];
    this.setState({selectedQuote: quote})
  }

  render() {
    return (
      <div className='App'>
        <h1>Scrum Master as a Service</h1>
        <Quote quote={this.state.selectedQuote} />
        <button onClick={this.selectQuote}>Impart some wisdom <FontAwesome name="hat-wizard" /></button>
      </div>
    );
  }
}

export default App;
