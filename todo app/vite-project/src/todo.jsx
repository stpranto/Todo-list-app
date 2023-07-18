import React from 'react';

const ToDo = ({ task, onDelete }) => {
  return (
    <li>
      {task}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default ToDo;
