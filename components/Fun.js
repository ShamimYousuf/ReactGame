import React from 'react';

class Fun extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    fetch('https://official-joke-api.appspot.com/jokes/programming/random')
      .then((response) => response.json())
      .then((response) => ({
        question: response[0].setup,
        answer: response[0].punchline,
      }))
      .then((data) => {
        this.setState({
          data,
        });
      });
  }

  render() {
    const { data: { question, answer } } = this.state;
    return (
      <div>
        <h2>Programming Jokes</h2>
        <details>
          <summary>{question}</summary>
          {answer}
        </details>
      </div>
    );
  }
}

export default Fun;
