import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    allSushi: [],
    selectedSushi: {}
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(sushiJSON => {
      this.setState({
        allSushi: sushiJSON.slice(0, 4)
      })
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer allSushi={this.state.allSushi} />
        <Table />
      </div>
    );
  }
}

export default App;
