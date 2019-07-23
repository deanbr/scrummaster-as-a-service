import React, { Component } from 'react';

class Quote extends Component {
  render() {
    return <div>{this.props.quotes.map((quote, i) =>
        <div key={i}>
          <span>{quote}</span>
          <br />
        </div>
    )}</div>;
  }
}

export default Quote;
