import { omit } from 'lodash';

const OPEN = 'OPEN';
const CLOSE = 'CLOSE';

const DEFAULT_STATE = {};

export default function reduce(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case OPEN:
      return {
        ...state,
        [action.group]: action.image
      };
    case CLOSE:
      return omit(state, action.group);
  }
  return state;
}

export function open(group, image) {
  return {
    type: OPEN,
    group,
    image
  };
}

export function close(group) {
  return {
    type: CLOSE,
    group
  };
}

export function selectExpanded(state, group) {
  return state.book[group];
}
