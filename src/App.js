import React, { Component } from 'react';
import './App.css';
import Button from './button';

class App extends Component {
constructor(){
  super();
  this.state={isi:[]}
}

componentDidMount(){
  this.setState({isi:['Klik','me','senpai!']})
}
  render() {
    let i=1;
    let button = this.state.isi.map(value => (
      <Button key={i++} isi = {value}/>
    ));

    return (
      <div>
        <h1> Hello World </h1>
        <p> Welcome to my web </p>
        {button}
      </div>
      
    );
  }
}

export default App;
