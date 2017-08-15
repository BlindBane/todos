import React from 'react'

const style = {
  color: 'green',
  fontStyle: 'italic'
}

export const InputError = (props) => {
  return (
    <span style={style} className={props.style}>{props.inputErrorMsg}</span>
  )
}
