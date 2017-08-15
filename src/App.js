import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { TodoForm, TodoList } from './components/todo/index'

class App extends Component {
  constructor () {
    super()
    this.state = {
      todos: [
        { id: 1, name: 'Find a pizza hut', isComplete: false },
        { id: 2, name: 'Order a pizza', isComplete: true },
        { id: 3, name: 'Eat the pizza', isComplete: false }
      ],
      selectedTodo: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  handleInputChange (event) {
    this.setState({
      selectedTodo: event.target.value
    })
  }
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>React Todo's</h2>
        </div>
        <div className='Todo-app'>
          <TodoForm selectedTodo={this.state.selectedTodo} handleInputChange={this.handleInputChange} />
          <TodoList todos={this.state.todos} />
        </div>
      </div>
    )
  }
}

export default App
