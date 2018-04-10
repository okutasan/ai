import React, { Component } from 'react';
import './App.css';
import {
  Route,
  BrowserRouter as Router,
  NavLink,
  Redirect,
  Link,
} from 'react-router-dom';
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
    const Home = () => (
      <div>
        <h1>Ini Homenya</h1>
      </div>
    )
    const About = () => (
      <div>
        <h1>Tentang</h1>
      </div>
    )
    const Contact= () => (
      <div>
        <ul>
          <li><Link to="/Contact/Me">Me</Link></li>
          <li><Link to="/Contact/You">You</Link></li>
          <li><Link to="/Contact/ai">Ai</Link></li>
        </ul>
        <Route path="/Contact/:name" component={subContact}/>
      </div>
    )
    const subContact = ({match}) => (
      <h1>{match.params.name}</h1>
    )

    let i=1;
    let button = this.state.isi.map(value => (
      <Button key={i++} isi = {value}/>
    ));

    return (
      <div>
        <h1> Hello World </h1>
        <p> Welcome to my web </p>
        <Router>
          <div>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/About">About</NavLink></li>
              <li><NavLink to="/Contact">Contact</NavLink></li>
            </ul>
            <Route path="/" component={Home}/>
            <Route path="/About" component={About}/>
            <Route path="/Contact" component={Contact}/>
          </div>
        </Router>
      </div>
      
    );
  }
}

export default App;
