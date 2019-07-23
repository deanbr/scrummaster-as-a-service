import React, { Component } from 'react';
import Quote from  './components/quote';
import './App.css';

class App extends Component {
  state = {
    quotes: [
      'test quote 1',
      'test quote 2'
    ]
  }

  render() {
    return (
      <div className='App'>
        <Quote quotes={this.state.quotes} />
      </div>
    );
  }
}

export default App;
