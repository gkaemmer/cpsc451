import React, { Component, PropTypes } from 'react'

const style = {
  color: '#bbb',
  fontSize: '14px',
  margin: '1em 0',
  display: 'block',
  textAlign: 'center'
}

export default class CloseButton extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  };

  render() {
    return (
      <a href="#" style={style} onClick={(e) => { this.props.onClick(); e.preventDefault() }}>
        Click to close this sub-book.
      </a>
    )
  }
}
