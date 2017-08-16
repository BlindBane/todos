import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { TodoForm, TodoList, InputError } from './components/todo/index'
import { addTodo, newId, findById, toggleTodo, updateTodo } from './lib/todoHelpers'

class App extends Component {
  state = {
    todos: [
      { id: 1, name: 'Find a pizza hut', isComplete: false },
      { id: 2, name: 'Order a pizza', isComplete: true },
      { id: 3, name: 'Eat the pizza', isComplete: false }
    ],
    selectedTodo: ''
  }
  handleInputChange = (event) => {
    this.setState({
      selectedTodo: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    const newTodo = {
      id: newId(),
      name: this.state.selectedTodo,
      isComplete: false
    }
    const updatedTodos = addTodo(this.state.todos, newTodo)
    this.setState({
      todos: updatedTodos,
      selectedTodo: '',
      inputErrorMsg: ''
    })
  }
  handleInvalidSubmit = (event) => {
    event.preventDefault()
    this.setState({
      inputErrorMsg: 'Please write a todo.'
    })
  }
  handleToggle = (id) => {
    const todo = findById(id, this.state.todos)
    const toggled = toggleTodo(todo)
    const updatedTodos = updateTodo(this.state.todos, toggled)
    this.setState({
      todos: updatedTodos
    })
  }
  render () {
    const submitHandler = this.state.selectedTodo ? this.handleSubmit : this.handleInvalidSubmit
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>React Todo's</h2>
        </div>
        <div className='Todo-app'>
          {this.state.inputErrorMsg && <InputError inputErrorMsg={this.state.inputErrorMsg} />}
          <TodoForm
            selectedTodo={this.state.selectedTodo}
            handleInputChange={this.handleInputChange}
            handleSubmit={submitHandler}
          />
          <TodoList handleToggle={this.handleToggle} todos={this.state.todos} />
        </div>
      </div>
    )
  }
}

export default App
