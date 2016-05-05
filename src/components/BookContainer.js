import React, { Component } from 'react'

const style = {
  padding: '0 40px',
  fontFamily: 'Lato, Helvetica, Arial, sans-serif',
  fontSize: '14px',
  lineHeight: '1.4em'
}

export default class BookContainer extends Component {
  render() {
    return (
      <div style={style}>
        {this.props.children}
      </div>
    )
  }
}
