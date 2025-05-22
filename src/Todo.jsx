import React from 'react';

function ToDo({ id, task, completed, onToggle, onDelete }) {
  return (
    <article>
      <label>
      <input
  type="checkbox"
  checked={completed}
  onChange={() => onToggle(id)}
/>
   
        <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
          {task}
        </span>
      </label>
      
      {/* Šī ir dzēšanas poga */}
      <button onClick={onDelete}>❌</button>
    </article>
  );
}

export default ToDo;
