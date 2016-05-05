import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Book from './Book'

export default class Image extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired
  };

  render() {
    const { children, expanded, name } = this.props
    return (
      <Book name={name}>
        {children}
      </Book>
    )
  }
}
