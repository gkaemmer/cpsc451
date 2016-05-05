import React, { Component } from 'react'

const style = {
  float: 'right',
  color: '#bbb',
  fontSize: '16px',
  position: 'relative',
  top: '20px'
}

export default class Credit extends Component {
  render() {
    return (
      <div style={style}>{this.props.children}</div>
    )
  }
}
