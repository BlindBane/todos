import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { TodoForm, TodoList, InputError, Footer } from './components/todo'
import { addTodo, newId, findById, toggleTodo, updateTodo, removeTodo, filterTodos } from './lib/todoHelpers'
import { pipe, partial } from './lib/utils'
import { loadTodos, postNewTodo, putTodo, deleteTodo } from './lib/todoServer'

class App extends Component {
  state = {
    todos: [],
    selectedTodo: '',
    inputErrorMsg: '',
    message: ''
  }
  static contextTypes = {
    route: React.PropTypes.string
  }
  componentDidMount() {
    loadTodos()
    .then(todos => this.setState({todos}))
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
    let updatedTodos
    this.setState({
      todos: (updatedTodos = addTodo(this.state.todos, newTodo), updatedTodos),
      selectedTodo: '',
      inputErrorMsg: ''
    })
    postNewTodo(newTodo).then((res) => this.showTmpMessage('Todo Added!'))
  }
  handleInvalidSubmit = (event) => {
    event.preventDefault()
    this.setState({
      inputErrorMsg: 'Please write a todo.'
    })
  }
  handleToggle = (id) => {
    const getToggledTodo = pipe(findById, toggleTodo)
    const updated = getToggledTodo(id, this.state.todos)
    const getUpdatedTodos = partial(updateTodo, this.state.todos)
    const updatedTodos = getUpdatedTodos(updated)
    this.setState({
      todos: updatedTodos
    })
    putTodo(updated).then((res) => this.showTmpMessage('Todo Updated!'))
  }
  handleRemove = (id, event) => {
    event.preventDefault()
    const doomedTodo = findById(id, this.state.todos)
    const updatedTodos = removeTodo(this.state.todos, id)
    this.setState({
      todos: updatedTodos
    })
    deleteTodo(doomedTodo).then(res => this.showTmpMessage('Todo deleted!'))
  }
  showTmpMessage = (msg) => {
    this.setState({message: msg})
    setTimeout(() => this.setState({message: ''}), 1773)
  }
  render () {
    const submitHandler = this.state.selectedTodo ? this.handleSubmit : this.handleInvalidSubmit
    const displayTodos = filterTodos(this.state.todos, this.context.route)
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>React Todo's</h2>
        </div>
        <div className='Todo-app'>
          {this.state.inputErrorMsg && <InputError inputErrorMsg={this.state.inputErrorMsg} />}
          {this.state.message && <span className='Todo-added'>{this.state.message}</span>}
          <TodoForm
            selectedTodo={this.state.selectedTodo}
            handleInputChange={this.handleInputChange}
            handleSubmit={submitHandler}
          />
          <TodoList 
            handleToggle={this.handleToggle} 
            handleRemove={this.handleRemove}
            todos={displayTodos} 
          />
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
