import React from 'react';
import ToDo from './ToDo';
import DiariesList from './DiariesList'; 

function App() {
  const todos = [
    { id: 1, task: "Iemācīties React", completed: false },
    { id: 2, task: "Iemācīties Laravel", completed: true },
    { id: 3, task: "Nopirkt pienu", completed: false },
  ];

  return (
    <>
      <h1>Veicamie uzdevumi</h1>

      {todos.map((todo) => {
        return <ToDo key={todo.id} {...todo} />;
      })}
          <DiariesList />
    </>
  );
}

export default App;
