import React from 'react'

export const TodoItem = (props) => {
  const handleToggle = props.handleToggle.bind(null, props.id)
  return (
    <li>
      <input type='checkbox'
        onChange={handleToggle}
        checked={props.isComplete}
      />
      { props.name }
    </li>
  )
}
