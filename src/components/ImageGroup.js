import React, { Component, PropTypes, Children, cloneElement } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import { open, close, selectExpanded } from '../ducks/book'
import ImageTagGroup from './ImageTagGroup'
import ImageTag from './ImageTag'

function mapStateToProps(state, ownProps) {
  return {
    expanded: selectExpanded(state, ownProps.id)
  };
}

@connect(mapStateToProps, {
  open,
  close
})
export default class ImageGroup extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired
  };

  render() {
    const { id, children, open, close } = this.props;
    const expanded = typeof this.props.expanded == 'undefined' ? -1 : this.props.expanded;
    const width = (1 / Children.count(children) * 100) + '%'
    return (
      <div>
        {/* Image Tags */}
        <ImageTagGroup>
        { Children.map(children, (image, key) => (
          <ImageTag group={id} key={key} image={image} expanded={expanded == key}
            expandable={!!image.props.children} width={width}
            onClick={() => (expanded == key ? close(id, key) : open(id, key))} />
        ))}
        </ImageTagGroup>
        {/* Content */}
        <ReactCSSTransitionGroup transitionName='book' transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          { expanded > -1 ? cloneElement(Children.toArray(children)[expanded], { key: expanded })
            : null }
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
