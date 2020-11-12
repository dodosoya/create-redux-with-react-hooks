import React, { useContext } from 'react';
import { DispatchContext } from '../../contexts';
import { filterActions } from '../../actions';

const Filter = () => {
  const { state, dispatch } = useContext(DispatchContext);
  const { filter } = state;

  const handleShowAll = () => {
    dispatch({ type: filterActions.SHOW_ALL });
  };

  const handleShowComplete = () => {
    dispatch({ type: filterActions.SHOW_COMPLETE });
  };

  const handleShowIncomplete = () => {
    dispatch({ type: filterActions.SHOW_INCOMPLETE });
  };

  return (
    <div>
      <button type="button" onClick={handleShowAll} style={{ color : filter === 'ALL' ? 'red' : 'black' }}>
        Show All
      </button>
      <button type="button" onClick={handleShowComplete} style={{ color : filter === 'COMPLETE' ? 'red' : 'black' }}>
        Show Complete
      </button>
      <button type="button" onClick={handleShowIncomplete} style={{ color : filter === 'INCOMPLETE' ? 'red' : 'black' }}>
        Show Incomplete
      </button>
    </div>
  );
};

export default Filter;
