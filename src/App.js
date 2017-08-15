import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>React Todo's</h2>
        </div>
        <div className='Todo-app'>
          <form>
            <div className='Todo-list'>
              <ul>
                <li><input type='checkbox' />Find a pizza hut</li>
                <li><input type='checkbox' />Order a pizza</li>
                <li><input type='checkbox' />Eat the pizza</li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default App
