import React, { Component } from 'react'

const style = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: 100,
  boxSizing: 'border-box',
  backgroundColor: 'rgba(0,0,0,0.5)',
  zIndex: 3,
  color: '#fff',
  padding: 20
};

export default class Description extends Component {
  render() {
    return (
      <div className="description" style={style}>{this.props.children}</div>
    );
  }
}
