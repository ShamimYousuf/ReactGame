import React from 'react';

class Fun extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
        };
    }

    componentDidMount() {
        const result = fetch('https://official-joke-api.appspot.com/jokes/programming/random')
            .then((response) => response.json())
            .then((response) => ({
                q: response[0].setup,
                a: response[0].punchline,
            }))
            .then((data) => {
                console.log(data.q);
                console.log(data.a);
                this.setState({
                    data,
                });
            });
    }

    render() {
        return (
            <div>
                <h2>Programming Jokes</h2>
                <details>
                    <summary>{this.state.data.q}</summary>
                    {this.state.data.a}
                </details>
            </div>
        );
    }
}

export default Fun;
