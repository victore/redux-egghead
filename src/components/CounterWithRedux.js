import React, { Component } from 'react'
import { createStore } from 'redux'
import counterReducer from '../reducers'
import { connect } from 'react-redux'

// store
const store = createStore(counterReducer)

class Counter extends Component {
  incrementCount = () => {
    store.dispatch({ type: 'INCREMENT'})
    console.log(store.getState())
  }
  
  decrementCount = () => {
    store.dispatch({ type: 'DECREMENT'})
    console.log(store.getState())		
  }
  
  render () {
    return (
      <div className="container">
        <div className="row">
          <h1>{store.getState()}</h1>
        </div>
        <div className="row">
          <button type="button" className="btn btn-outline-primary" onClick={this.decrementCount}>-</button>
          <button type="button" className="btn btn-outline-secondary" onClick={this.incrementCount}>+</button>
        </div>
      </div>
    )
  } 
}

const mapStateToProps = state => {
  return {
    count: counterReducer()
  }
}

const CounterWithRedux = connect(
  mapStateToProps
)(Counter)

export default CounterWithRedux
