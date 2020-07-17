import React from 'react';
import Board from './Board';

const calculateWinner = (squares) => {
  const winnerLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winnerLines.length; i += 1) {
    const [a, b, c] = winnerLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xIsNext: true,
      stepNumber: 0,
      history: [
        { squares: Array(9).fill(null) },
      ],

    };
    this.handleClick = this.handleClick.bind(this);
    this.jumpTo = this.jumpTo.bind(this);
  }

  jumpTo(step) {
    const { history } = this.state;
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
      history: history.slice(0, step + 1),
    });
  }

  handleClick(i) {
    const { history, stepNumber, xIsNext } = this.state;
    const slicedHistory = history.slice(0, stepNumber + 1);
    const current = slicedHistory[slicedHistory.length - 1];
    const squares = current.squares.slice();
    const winner = calculateWinner(squares);
    if (winner || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat({
        squares,
      }),
      xIsNext: !xIsNext,
      stepNumber: history.length,
    });
  }

  render() {
    const { history, xIsNext } = this.state;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ? `Go to #${move}` : 'Start the Game';
      return (
        <li key={move}>
          <button type="button" onClick={() => this.jumpTo(move)}>
            {desc}
          </button>
        </li>
      );
    });

    const status = winner ? `Winner is ${winner}` : `Next player is ${xIsNext ? 'X' : 'O'}`;
    return (
      <div className="game">
        <div className="game-board">
          <Board onClick={this.handleClick} squares={current.squares} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ul>
            {moves}
          </ul>
        </div>

      </div>
    );
  }
}
