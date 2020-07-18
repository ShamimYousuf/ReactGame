import React from 'react';

class Fun extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }

  componentDidMount() {
    this.setState({
      data: 'Call me',
    });
  }

  render() {
    return (<h2>{this.state.data}</h2>);
  }
}

export default Fun;
