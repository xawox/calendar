import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactPlayer from 'react-player'
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';

import image01 from './images/01.jpeg';
import image02 from './images/02.jpeg';
import image03 from './images/03.jpeg';
import image04 from './images/04.jpeg';
import image05 from './images/05.jpeg';
import image06 from './images/06.jpeg';
import image07 from './images/07.jpeg';
import image08 from './images/08.jpeg';
import image09 from './images/09.jpeg';
import image10 from './images/10.jpeg';
import image11 from './images/11.jpeg';
import image12 from './images/12.jpeg';
import image13 from './images/13.jpeg';
import image14 from './images/14.jpeg';
import image15 from './images/15.jpeg';
import image16 from './images/16.jpeg';
import image17 from './images/17.jpeg';
import image18 from './images/18.jpeg';
import image19 from './images/19.jpeg';
import image20 from './images/20.jpeg';
import image21 from './images/21.jpeg';
import image22 from './images/22.jpeg';
import image23 from './images/23.jpeg';
import image24 from './images/24.jpeg';


class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            background: '',
            value: null     
        };
        this.changeColor = this.changeColor.bind(this);
    }
    changeImage(i){
      var edit_gift = document.getElementById("giftImage");
      var edit_giftText = document.getElementById("giftText");
      switch (this.props.value){
        case 1:
          edit_gift.src = image01;
          edit_giftText.textContent = "CanetRock!! Fiestaa!!!";
          break;
        case 2:
          edit_gift.src = image02;
          edit_giftText.textContent = "Berlin 2018";
          break;
        case 3:
          edit_gift.src = image03; 
          edit_giftText.textContent = "Muro de Berlin 2018";
          break;
        case 4:
          edit_gift.src = image04;
          edit_giftText.textContent = "Berlin 2018";
          break;
        case 5:
          edit_gift.src = image05;
          edit_giftText.textContent = "Muro de Berlin 2018";
          break;
        case 6:
          edit_gift.src = image06;
          edit_giftText.textContent = "Always pizzaaaa!!";
          break;
        case 7:
          edit_gift.src = image07;
          edit_giftText.textContent = "Horseshoe bend 2016";
          break;
        case 8:
          edit_gift.src = image08;
          edit_giftText.textContent = "Monument Valley 2016";
          break;
        case 9:
          edit_gift.src = image09;
          edit_giftText.textContent = "Grand Canyon 2016";
          break;
        case 10:
          edit_gift.src = image10;
          edit_giftText.textContent = "Las Vegas 2016";
          break;
        case 11:
          edit_gift.src = image11;  
          edit_giftText.textContent = "Viladecans 2019";
          break;
        case 12:
          edit_gift.src = image12;   
          edit_giftText.textContent = "Cumple Laura 2019";
          break;
        case 13:
          edit_gift.src = image13;   
          edit_giftText.textContent = "Alcatraz 2016";
          break;
        case 14:
          edit_gift.src = image14;  
          edit_giftText.textContent = "Berlin 2018";
          break;
        case 15:
          edit_gift.src = image15;   
          edit_giftText.textContent = "Berlin 2018";
          break;
        case 16:
          edit_gift.src = image16;  
          edit_giftText.textContent = "Praga 2018";
          break;
        case 17:
          edit_gift.src = image17;   
          edit_giftText.textContent = "Congost de Montrebei 2018";
          break;
        case 18:
          edit_gift.src = image18;  
          edit_giftText.textContent = "Las Vegas 2016";
          break;
        case 19:
          edit_gift.src = image19;   
          edit_giftText.textContent = "Antilope Canyon 2016";
          break;
        case 20:
          edit_gift.src = image20;   
          edit_giftText.textContent = "Las Vegas 2016";
          break;
        case 21:
          edit_gift.src = image21;  
          edit_giftText.textContent = "Praga 2018";
          break;
        case 22:
          edit_gift.src = image22;  
          edit_giftText.textContent = "Berlin 2018";
          break;
        case 23:
          edit_gift.src = image23;  
          edit_giftText.textContent = "Praga 2018";
          break;
        case 24:
          edit_gift.src = image24;  
          edit_giftText.textContent = "Pragra 2018. Bon Nadal!!!!";
          break;
        default:
          //edit_gift.src = image2;          edit_giftText.textContent = "";
          break;
      }
    }
    changeColor = () => {
      this.setState({
        background: ' #bc1a1a'
      });
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
        style={{backgroundColor:this.state.background}}
        className="square"
        onClick = {() => {
            var today = new Date();
            var date = today.getDate();
            if(date >= this.props.value) {
                //this.setState({value: 'X'})
                this.changeColor();
                this.changeImage(this.props.value)
            }
            else{
               alert("Os hemos pillado! No podeis abrir un día antes de que llegue!")
            }
          }
        }>
          {valueToPrint}
        </button>
      );
    }
  }

  class Gift extends React.Component {
    render(){
      //var imageToPrint = this.props.value;
      return (
        <div>
          {<p style={{color : "black"}} id="giftText">
            Welcome to your calendar!
          </p>}
          {<img src={image2} alt="Gifts" className="photo" id="giftImage" style={{alignContent : "center"}}/>}
         { <ReactPlayer
              id = 'youTubePlayer'
              url='https://youtu.be/aAkMkVFwAoo'
              className='react-player'
              playing
              width='100%'
              height='100%'
            />}
        </div>
     )
    }
  }

  class Board extends React.Component {
    renderSquare(i) {
      return <Square value={i}/>;
      
    }
    renderGift() {
      return <Gift/>;
    }
  
    render() {
      return (
        <div className="Fullboard">
          <h1>Bon Nadal!</h1>
          <h2>Este es vuestro calendario de adviento de este año! Muy importante darle al play del video!</h2>
          <div className="weekdays">
            <li>Mo</li>
            <li>Tu</li>
            <li>We</li>
            <li>Th</li>
            <li>Fr</li>
            <li>Sa</li>
            <li>Su</li>
          </div>
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
            {this.renderSquare()}
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
      var user = prompt("¿Puede indicar su amiga preferida?");
      var pass = prompt("¿Puede indicar su amigo mas fan de starwars?");
      if ((user === "Laura" && pass === "Xavi") || (user === "laura" && pass === "xavi") ) {
        return (        
            <div className="game">
              <Board />
            </div>
        );
      }
      else {
        alert("wrong user and password")
        return(
          <h1>Wrong ID refresh the web to try again</h1>
        );
      }
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );