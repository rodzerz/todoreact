import React, { useState } from 'react';
import ToDo from './ToDo';
import DiariesList from './DiariesList';  
import { useEffect } from "react";



function getLocalTodos() {
  const stored = localStorage.getItem("todos");
  return stored ? JSON.parse(stored) : [];
}


function App() {
  const [todos, setTodos] = useState(getLocalTodos);

  const [newTask, setNewTask] = useState("");

  const handleAdd = (event) => {
    event.preventDefault();
    if (newTask.trim()) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Date.now(), task: newTask, completed: false },
      ]);
      setNewTask("");
    }
  };

  const handleToggle = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  return (
    <>
      <h1>Veicamie uzdevumi</h1>

      {todos.map((todo) => (
        <ToDo
          key={todo.id}
          {...todo}
          onToggle={() => handleToggle(todo.id)}
          onDelete={() => handleDelete(todo.id)}
        />
      ))}

      <form onSubmit={handleAdd}>
        <label>
          Jauns uzdevums:
          <input
            type="text"
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
          />
        </label>
        <button type="submit">Pievienot uzdevumu</button>
      </form>

      {/* Pievienojam DiariesList, lai parādītu dienasgrāmatas ierakstus */}
      <DiariesList />
    </>
  );
}

export default App;
