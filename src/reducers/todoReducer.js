import { todoActions } from '../actions';

const todoReducer = (state, action) => {
  switch (action.type) {
    case todoActions.DO_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, complete: true };
        } else {
          return todo;
        }
      });
    case todoActions.UNDO_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, complete: false };
        } else {
          return todo;
        }
      });
    case todoActions.ADD_TODO:
      return state.concat({
        task: action.task,
        id: action.id,
        complete: false,
      });
    default:
      return state;
  }
};

export default todoReducer;
