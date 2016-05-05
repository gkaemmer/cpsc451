import React, { Component } from 'react';
import Icon from 'react-fa';
import Description from './Description';
import '../css/image.css';

const containerStyle = {
  float: 'left',
  padding: '0 20px',
  boxSizing: 'border-box',
  height: '200px',
  position: 'relative'
}

const wrapperStyle = {
  position: 'relative',
  overflow: 'hidden',
  height: '200px'
}

const imgStyle = {
  width: '100%',
  height: 'auto',
  position: 'absolute',
  zIndex: 2
}

const buttonStyle = {
  border: '0 none',
  backgroundColor: '#000',
  width: 40,
  height: 40,
  borderRadius: 20,
  position: 'absolute',
  left: '50%',
  marginLeft: -20,
  bottom: -20,
  color: '#fff',
  outline: '0 none',
  transition: 'transform 0.4s',
  zIndex: 4,
  cursor: 'pointer'
}

const shadowStyle = {
  backgroundColor: '#000',
  width: 40,
  position: 'absolute',
  left: '50%',
  marginLeft: -20,
  height: 40,
  transition: 'bottom 0.4s',
  zIndex: 1
}

export default class ImageTag extends Component {
  render() {
    const { src, description } = this.props.image.props;
    const { expanded, expandable, group, onClick, width } = this.props;
    return (
      <div style={{...containerStyle, width}} onClick={expandable ? onClick : null}>
        <div className="image-wrapper" style={{...wrapperStyle, cursor: expandable ? 'pointer' : 'normal'}}>
          <img src={src} style={imgStyle} />
          { description ? <Description>{description}</Description> : null }
        </div>
        { expandable ?
          <div>
            <div style={{...shadowStyle, bottom: expanded ? -40 : 0 }} />
            <button style={{...buttonStyle, transform: 'rotate(' + (expanded ? 180 : 0) + 'deg)'}}>
              <Icon name="arrow-down" />
            </button>
          </div>
          : null }
      </div>
    );
  }
}
