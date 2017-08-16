import React from 'react'
import { TodoItem } from './index'

export const TodoList = (props) => {
  return (
    <div className='Todo-list'>
      <ul>
        { props.todos.map(todo =>
          <TodoItem key={todo.id}
            id={todo.id}
            isComplete={todo.isComplete}
            name={todo.name}
            handleToggle={props.handleToggle}
          />)
        }
      </ul>
    </div>
  )
}
