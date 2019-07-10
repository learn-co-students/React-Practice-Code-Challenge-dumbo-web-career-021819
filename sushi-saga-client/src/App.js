import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    startingIndex: 0,
    endingIndex: 4,
    allSushi: [],
    eatenSushi: []
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(sushiJSON => {
      this.setState({
        allSushi: sushiJSON
      })
    })
  }

  filterSushi = () => {
    return this.state.allSushi.filter(sushi => sushi.name !== "Genki Toro")
  }

  getSomeSushi = () => {
    return this.filterSushi().slice(this.state.startingIndex, this.state.endingIndex)
  }

  getMoreSushi = () => {
    this.setState({
      startingIndex: this.state.startingIndex + 4,
      endingIndex: this.state.endingIndex + 4
    })
  }

  getPreviousSushi = () => {
    this.setState({
      startingIndex: this.state.startingIndex - 4,
      endingIndex: this.state.endingIndex - 4
    })
  }

  eatSushi = (sushi) => {
    // debugger
    // add this sushi to the array of eaten sushi
    this.setState({
      eatenSushi: [...this.state.eatenSushi, sushi]
    })
  }

  render() {
    return (
      <div className="app">

        <SushiContainer

        allSushi={this.filterSushi()}
        someSushi={this.getSomeSushi()}

        startingIndex={this.state.startingIndex}
        endingIndex={this.state.endingIndex}

        getPreviousSushi={this.getPreviousSushi}
        getMoreSushi={this.getMoreSushi}

        eatSushi={this.eatSushi}
        eatenSushi={this.state.eatenSushi} />

        <Table eatenSushi={this.state.eatenSushi} />

      </div>
    );
  }
}

export default App;
