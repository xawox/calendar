import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }
    changeImage(i){
      var edit_gift = document.getElementById("giftImage");
      var edit_giftText = document.getElementById("giftText");
      switch (this.props.value){
        case 1:
          edit_gift.src = image1;
          edit_giftText.textContent = "";
          break;
        case 2:
          edit_gift.src = image2;
          edit_giftText.textContent = "";
          break;
        case 3:
          edit_gift.src = image1; 
          edit_giftText.textContent = "";
          break;
        case 4:
          edit_gift.src = image1;
          edit_giftText.textContent = "";
          break;
        case 5:
          edit_gift.src = image1;
          edit_giftText.textContent = "";
          break;
        case 6:
          edit_gift.src = image1;
          edit_giftText.textContent = "";
          break;
        case 7:
          edit_gift.src = image1;
          edit_giftText.textContent = "";
          break;
        case 8:
          edit_gift.src = image1;
          edit_giftText.textContent = "";
          break;
        case 9:
          edit_gift.src = image1;
          edit_giftText.textContent = "";
          break;
        case 10:
          edit_gift.src = image1;
          edit_giftText.textContent = "";
          break;
        case 11:
          edit_gift.src = image1;  
          edit_giftText.textContent = "";
          break;
        case 12:
          edit_gift.src = image1;   
          edit_giftText.textContent = "";
          break;
        case 13:
          edit_gift.src = image1;   
          edit_giftText.textContent = "";
          break;
        case 14:
          edit_gift.src = image1;  
          edit_giftText.textContent = "";
          break;
        case 15:
          edit_gift.src = image1;   
          edit_giftText.textContent = "";
          break;
        case 16:
          edit_gift.src = image1;  
          edit_giftText.textContent = "";
          break;
        case 17:
          edit_gift.src = image1;   
          edit_giftText.textContent = "";
          break;
        case 18:
          edit_gift.src = image1;  
          edit_giftText.textContent = "";
          break;
        case 19:
          edit_gift.src = image1;   
          edit_giftText.textContent = "";
          break;
        case 20:
          edit_gift.src = image1;   
          edit_giftText.textContent = "";
          break;
        case 21:
          edit_gift.src = image1;  
          edit_giftText.textContent = "";
          break;
        case 22:
          edit_gift.src = image1;  
          edit_giftText.textContent = "";
          break;
        case 23:
          edit_gift.src = image1;  
          edit_giftText.textContent = "";
          break;
        case 24:
          edit_gift.src = image1;  
          edit_giftText.textContent = "";
          break;
        default:
          //edit_gift.src = image2;          edit_giftText.textContent = "";
          break;
      }
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
                //this.setState({value: 'X'})
                this.changeImage(this.props.value)
                return <Gift value={this.props.value}/>
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
    render(i){
      //var imageToPrint = this.props.value;
      return (
        <div>
          <div>
            {<img src={image1} alt="Gifts" id="giftImage"/>}
          </div>
          <div>
            {
              <p style={{color : "black", fontSize : "500%"}} id="giftText">
                Hello!
              </p>
            }
          </div>
        </div>



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
            {this.renderSquare(32)}
          </div>
          <div className="gift">
            {this.renderGift(0)}
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