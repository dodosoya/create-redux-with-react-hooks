import React, { useContext } from 'react';
import { DispatchContext } from '../../contexts';
import { todoActions } from '../../actions';

const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(DispatchContext);

  const handleChange = () =>
    dispatch({
      type: todo.complete ? todoActions.UNDO_TODO : todoActions.DO_TODO,
      id: todo.id,
    });

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleChange}
        />
        {todo.task}
      </label>
    </li>
  );
};

export default TodoItem;
