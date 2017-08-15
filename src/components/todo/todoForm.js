import React from 'react'

export const TodoForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <input
      type='text'
      placeholder='Add a new Todo...'
      onChange={props.handleInputChange}
      value={props.selectedTodo} />
  </form>
)
