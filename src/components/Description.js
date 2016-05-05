import React, { Component } from 'react'
import { imageHeight } from './Image'

const style = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: imageHeight / 2,
  boxSizing: 'border-box',
  backgroundColor: 'rgba(0,0,0,0.5)',
  zIndex: 3,
  color: '#fff',
  padding: 20,
  fontSize: '14px',
  lineHeight: '1.4em'
};

export default class Description extends Component {
  render() {
    return (
      <div className="description" style={style}>{this.props.children}</div>
    );
  }
}
