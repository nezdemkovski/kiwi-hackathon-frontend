import React, { Component } from 'react';
import * as SygicTravelSDK from 'sygic-travel-js-sdk';
import CitiesCount from './CitiesCount';
import './App.css';
import '../static/css/front.css';

const apiUrl = 'https://api.sygictravelapi.com/0.1/en/';
const clientKey = 'nSCQiwW9R88zlr0P7J2VocUXBnKejmO26m9eIUl8';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
    };
  }
  componentWillMount() {}
  render() {
    return <div className="App"><CitiesCount /></div>;
  }
}

export default App;
