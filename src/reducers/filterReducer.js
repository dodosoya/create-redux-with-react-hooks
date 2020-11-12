import { filterActions } from '../actions';

const filterReducer = (state, action) => {
  switch (action.type) {
    case filterActions.SHOW_ALL:
      return 'ALL';
    case filterActions.SHOW_COMPLETE:
      return 'COMPLETE';
    case filterActions.SHOW_INCOMPLETE:
      return 'INCOMPLETE';
    default:
      return state;
  }
};

export default filterReducer;
