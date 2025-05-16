import React from 'react';
import ToDo from './ToDo'; 

function App() {
  const todos = [
    { task: "Iemācīties React", completed: false },
    { task: "Iemācīties Laravel", completed: true },
    { task: "Nopirkt pienu", completed: false },
  ];
  return (
    <div>
      <h1>Mani uzdevumi</h1>
      <ToDo task="Iemācīties React" completed={false} />
      <ToDo task="Nokārtot eksāmenu" completed={true} />
      <ToDo task="Iemācīties Laravel" completed={false} />
      <ToDo task="Nopirkt pienu " completed={false} />
    </div>
  );
}

export default App;
