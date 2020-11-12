import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DispatchContext } from './contexts';
import { filterReducer, todoReducer } from './reducers';
import useCombinedReducers from 'use-combined-reducers';
import Filter from './components/Filter';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const initialFilter = 'ALL';
const initialTodos = [
  {
    id: uuidv4(),
    task: 'Learn React',
    complete: true,
  },
  {
    id: uuidv4(),
    task: 'Learn Firebase',
    complete: true,
  },
  {
    id: uuidv4(),
    task: 'Learn GraphQL',
    complete: false,
  },
];

function App() {
  const [state, dispatch] = useCombinedReducers({
    filter: useReducer(filterReducer, initialFilter),
    todos: useReducer(todoReducer, initialTodos),
  });

  const { filter, todos } = state;
  const filteredTodos = todos.filter(todo => {
    if (filter === 'ALL') {
      return true;
    }
    if (filter === 'COMPLETE' && todo.complete) {
      return true;
    }
    if (filter === 'INCOMPLETE' && !todo.complete) {
      return true;
    }

    return false;
  });

  return (
    <DispatchContext.Provider value={{ state, dispatch }}>
      <div style={{ padding: '10px' }}>
        <AddTodo />
        <TodoList todos={filteredTodos} />
        <Filter />
      </div>
    </DispatchContext.Provider>
  );
}

export default App;
