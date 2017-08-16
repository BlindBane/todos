import React from 'react'

export const TodoItem = (props) => {
  return (
    <li>
      <input type='checkbox'
        onChange={() => props.handleToggle(props.id)}
        checked={props.isComplete}
      />
      { props.name }
    </li>
  )
}
