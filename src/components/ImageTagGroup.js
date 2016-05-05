import React, { Component } from 'react'

const style = {
  margin: '40px -20px'
}

export default class ImageTagGroup extends Component {
  render() {
    return (
      <div style={style}>
        {this.props.children}
        <br style={{clear: 'both'}} />
      </div>
    )
  }
}
