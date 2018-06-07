import React, { Component } from 'react';

import './App.css';
import Validate from './Validate/Validate';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {


  state = {
    theInput: '',
    theLeangth: 0,
    theMessage: ''
    
}

  messageHandler = (amount) => {
    let theMessage = '';
    if(amount < 5){
      theMessage = "Too Short";
    } else if (amount > 10) {
      theMessage = "Text Too long"
    }

    this.setState({theMessage: theMessage});

    console.log(theMessage);
  }



  inputLengthHandler =(event) => {
    //create a string variable
    let inputedString = event.target.value;
    let theCount = 0;
    this.messageHandler(this.state.theLeangth);
    this.setState({theInput: inputedString, theLeangth: (theCount + this.state.theInput.split('').length + 1)});
    console.log("changed " + event.target.value + " " + this.state.theLeangth);

    
 }

   deleteHandler = (index) => {
      const text = this.state.theInput.split('');
      text.splice(index, 1);

      this.setState({theInput: text.join('')})
   }


  render() {

    let boxes = null;
    
    if(this.state.theLeangth >= 1){
     boxes = (
      <div>
        {this.state.theInput.split('').map((box, index) => {
          return <CharComponent letter={box} Key={index} clicked={() => this.deleteHandler(index)}/>
        })}
      </div>
     );
    }


    return (
      <div className="app">
        <h1>Leangth Tester</h1>
        <input type="text" value={this.state.theInput} onChange={(event) => this.inputLengthHandler(event)}/>
        <p>Count: {this.state.theLeangth}</p>
        <Validate theMessage={this.state.theMessage}/>

        {boxes}
      </div>
    );
  }
}

export default App;
