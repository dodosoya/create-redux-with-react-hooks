import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DispatchContext } from '../../contexts';
import { todoActions } from '../../actions';

const AddTodo = () => {
  const { dispatch } = useContext(DispatchContext);
  const [task, setTask] = useState('');

  const handleSubmit = event => {
    if (task) {
      dispatch({ type: todoActions.ADD_TODO, task, id: uuidv4() });
    }

    setTask('');
    event.preventDefault();
  };

  const handleChange = event => setTask(event.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={task} onChange={handleChange} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
