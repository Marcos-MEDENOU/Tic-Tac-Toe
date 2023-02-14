import logo from '././../../src/logo.svg';
import '././../../src/App.css';
import React from 'react';
import Board from './Board';
import NavBar from './NavBar';

class Game extends React.Component {

    constructor(props){
        super(props);
        this.state= {
            history : [{
                squares: Array(9).fill(null),
            }],
            xIsNext : true,
        }
    }

    render() {

        // const history =this.state.history;

        // const current = history[history.length - 1];

        // const winner = calculateWinner(current.squares)

      return (
        <div className="game">
          <div className="">
            <NavBar/>
          </div>
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
}

export default Game;