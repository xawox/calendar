import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import regalos from './images/regalos.jpg';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        var valueToPrint = null;
        if (this.state.value == null) {
            valueToPrint = this.props.value;
        }
        else {
            valueToPrint =  this.state.value;
        }

      return (
        <button
        className="square"
        onClick = {() => {
            var today = new Date();
            var date = today.getDate();
            if(date >= this.props.value) {
                this.setState({value: 'X'})
                return <Gift value={1}/>
            }
            else{
                alert("You can't access yet!")
            }
            }
            }>
            {valueToPrint}
        </button>
      );
    }
  }
  class Gift extends React.Component {
    render() {
        return (
            /*{
                if(this.props.vale == "1") {
                    alert("yo can do that")
                }
                else {
                    <img src={regalos} alt="Gifts"/>
                }
            };*/
            <img src={regalos} alt="Gifts"/>
        )
    }
  }

  class Board extends React.Component {
    renderSquare(i) {
      return <Square value={i}/>;
    }
    renderGift(i) {
      return <Gift value={i}/>;
    }
  
    render() {
      const status = 'El mejor calendario de adviento!';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare()}          
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            {this.renderSquare(6)}

          </div>
          <div className="board-row">
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            {this.renderSquare(9)}
            {this.renderSquare(10)}
            {this.renderSquare(11)}
            {this.renderSquare(12)}
            {this.renderSquare(13)}
          </div>
          <div className="board-row">
            {this.renderSquare(14)}
            {this.renderSquare(15)}
            {this.renderSquare(16)}
            {this.renderSquare(17)}
            {this.renderSquare(18)}
            {this.renderSquare(19)}
            {this.renderSquare(20)}
          </div>
          <div className="board-row">
            {this.renderSquare(21)}
            {this.renderSquare(22)}
            {this.renderSquare(23)}
            {this.renderSquare(24)}
            {this.renderSquare()}
            {this.renderSquare()}
            {this.renderSquare(27)}
          </div>
          <div className="gift">
            {this.renderGift()}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
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
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );