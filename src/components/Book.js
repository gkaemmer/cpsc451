import React, { Component, PropTypes } from 'react';
import Title from './Title';

const style = {
  borderWidth: '2px 0 0 2px',
  borderStyle: 'solid',
  margin: '0 -40px',
  paddingTop: 40,
  paddingBottom: 40,
  boxShadow: 'inset rgba(0,0,0,0.2) 0 0 3px'
};

export default class Book extends Component {
  static childContextTypes = {
    level: PropTypes.number
  };

  static contextTypes = {
    level: PropTypes.number
  };

  getChildContext() {
    const level = this.context.level || 0
    return {
      level: level + 1
    };
  }

  render() {
    const { name, children } = this.props;
    const level = this.context.level || 0;
    const grayness = (255 - level*15);
    const space = 40 - level * 2;
    const finalStyle = {
      ...style,
      paddingLeft: space,
      paddingRight: space,
      margin: '0 ' + (-(space+2)) + 'px',
      backgroundColor: 'rgb('+[grayness,grayness,grayness].join(',')+')'
    };
    return (
      <div style={finalStyle}>
        <Title>{name}</Title>
        {children}
      </div>
    );
  }
}
