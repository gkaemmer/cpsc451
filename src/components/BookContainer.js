import React, { Component } from 'react'

const style = {
  margin: '0 auto',
  width: '80%',
  boxSizing: 'border-box',
  padding: '0 40px',
  fontFamily: 'Lato, Helvetica, Arial, sans-serif',
  fontSize: '18px',
  lineHeight: '1.6em'
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
