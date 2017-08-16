import React from 'react'
import { partial } from './../../lib/utils'

export const TodoItem = (props) => {
  const handleToggle = partial(props.handleToggle, props.id)
  const handleRemove = partial(props.handleRemove, props.id)
  return (
    <li>
      <span className='Todo-delete'><a href='' onClick={handleRemove}>X</a></span>
      <input type='checkbox'
        onChange={handleToggle}
        checked={props.isComplete}
      />
      { props.name }
    </li>
  )
}
