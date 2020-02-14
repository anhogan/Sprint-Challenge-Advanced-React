import React, { Component } from 'react';
import Header from './components/Header';
import PlayerCard from './components/PlayerCard';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  };

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then(response => {
        console.log(response.data);
        this.setState({ players: response.data });
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <PlayerCard players={this.state.players} />
      </div>
    );
  }
}

export default App;
