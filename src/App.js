import "./App.css"
import React, { Component } from "react"

import Lottery from "./Lottery"

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Lottery />
        <Lottery title="Mini Daily" maxNum={10} numBalls={4} />
      </div>
    )
  }
}

export default App
