import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import Heading from './components/heading';
import Image from './components/image';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading></Heading>
        <Image></Image>
        <Heading></Heading>
      </div>
    )
  }
}

export default App;
