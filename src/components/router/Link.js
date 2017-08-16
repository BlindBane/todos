import React, { Component } from 'react'

export class Link extends Component {
  handleClick = (event) => {
    event.preventDefault()
    const history = window.history
    history.pushState(null, '', this.props.to)
  }
  render () {
    return (
      <a href='' onClick={this.handleClick}>{this.props.children}</a>
    )
  }
}
