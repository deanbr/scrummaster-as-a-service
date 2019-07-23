import React, { Component } from 'react';

class Quote extends Component {
  render() {
    return <div className='app-quote'>
      <span>{this.props.quote}</span>
    </div>;
  }
}

export default Quote;
