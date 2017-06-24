import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../static/css/front.css';

class App extends Component {
  componentWillMount() {
    fetch(
      'https://api.sygictravelapi.com/0.2/en/places/list?tags=hotel&levels=poi&parents=country:5',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'x-api-key': 'nSCQiwW9R88zlr0P7J2VocUXBnKejmO26m9eIUl8',
        },
      },
    ).then(resp => {
      console.log(response);
    });
  }
  render() {
    return <div className="App" />;
  }
}

export default App;
