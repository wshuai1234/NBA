import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../styles/App.css';
import { TopNavBar } from './TopNavBar';
import {Main} from './Main';

class App extends Component {
  render() {
    return (
        <div className="App">
            <TopNavBar />
            <Main/>
        </div>
    );
  }
}

export default App;
