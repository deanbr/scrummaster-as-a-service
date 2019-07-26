import React, { Component } from 'react';
import { AwesomeButton } from 'react-awesome-button'
import Quote from  './components/quote';
import 'react-awesome-button/dist/themes/theme-blue.css';
import './App.css';
var FontAwesome = require('react-fontawesome');

class App extends Component {
  state = {
    quotes: [
      'Which one of you can teach me how to read?',
      'I realized I could either work really hard and be a mediocre Software Engineer, or work an average amount and be a mediocre Scrum Master.',
      'Negotiable? No, I said ne-goat-able.  It’s when you have a goat and the entrails fall out…',
      'Maybe they just realized that y’all are completely useless!',
      'My talent is in the illusion of competence… so you could say I’m at the top of my field.',
      'Living for the next meal, that’s me.  Why am I here? So I can get a paycheck so I can buy food.',
      'Outcome, not output.',
      'Writing code, that’s work. Writing code so you don’t need a scrum master. That’s an outcome.',
      'Movin’ and groovin’',
      'Are you working towards the dream?',
      'All I wanna hear from you is clicky-clack.',
      'That’s the only metric - clicks and clacks.',
      'I’ve developed such a comfort level, that they feel comfortable saying that.',
      'For me, networking is what we’re doing right now.',
      'You can build a multi-million dollar company off that idea. Just asking people’s questions back to them slightly differently.',
      'If someone’s a dick to you, it’s not you, it’s about them.',
      'You can’t drink all day if you don’t start in the morning.',
      'Life is only going to get continually worse after you graduate.',
      'Did you throw up? Hahahahaha.',
      'Let’s think back to the gospel of Luke. - That one’s taken.',
      'I think we’re in violent agreement.',
      'I have no idea',
      'Even I have no idea what\'s going on up here',
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

        <AwesomeButton type="primary" action={this.selectQuote}>
          Impart wisdom <FontAwesome name="hat-wizard" />
        </AwesomeButton>
      </div>
    );
  }
}

export default App;
