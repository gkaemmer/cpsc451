import React, { Component } from 'react'

const style = {
  fontWeight: 'bold',
  fontSize: '32px',
  lineHeight: '1.4em',
  marginBottom: '0.4em',
  paddingBottom: '0.4em',
  borderBottom: '1px solid #ddd'
}

export default class Title extends Component {
  render() {
    const { children } = this.props;
    return (
      <h1 style={style}>{children}</h1>
    )
  }
}
