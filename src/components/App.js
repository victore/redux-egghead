import React, { Component } from 'react'
import CounterWithRedux from './CounterWithRedux';

class App extends Component {
  state = {
    count: 0
  }
  incrementCount = () => {
		this.setState({
      count: this.state.count + 1
    })
  }
  
  decrementCount = () => {
		this.setState({
      count: this.state.count - 1
    })
  }
  
  render () {
    return (
        <div className="container">
          <div className="row">
            <div className="col-6">
                <h3>Counter with State</h3>
                <h1>{this.state.count}</h1>
              <div className="row">
                <button type="button" className="btn btn-outline-primary" onClick={this.decrementCount}>-</button>
                <button type="button" className="btn btn-outline-secondary" onClick={this.incrementCount}>+</button>
              </div>
            </div>
            <div className="col-6">
            <div className="container">
              <h3>Counter with Redux</h3>
              <CounterWithRedux />
            </div>
          </div>
          </div>
        </div>
    )
  }
}

export default App