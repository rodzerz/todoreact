import React from 'react';

function Diary({ id, title, body, date, onDelete }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{body}</p>
      <small>{date}</small>
      {/* Kad nospiež poga, izsaucam onDelete ar id */}
      <button onClick={() => onDelete()}>❌ Dzēst</button>
    </article>
  );
}

export default Diary;
