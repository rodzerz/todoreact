import React, { useState, useEffect } from 'react';
import Diary from './Diary';

function getLocalDiaries() {
  const stored = localStorage.getItem("diaries");
  return stored ? JSON.parse(stored) : [];
}

function DiariesList() {
  const [diaries, setDiaries] = useState(getLocalDiaries);

  const handleAddDiary = (title, body) => {
    const newDiary = {
      id: Date.now(),
      title,
      body,
      date: new Date().toISOString()
    };
    setDiaries((prevDiaries) => [...prevDiaries, newDiary]);
  };

  const handleDeleteDiary = (id) => {
    setDiaries((prevDiaries) =>
      prevDiaries.filter((diary) => diary.id !== id)
    );
  };

  useEffect(() => {
    localStorage.setItem("diaries", JSON.stringify(diaries));
  }, [diaries]);

  return (
    <>
      <h1>Dienasgrāmatas ieraksti</h1>

      {diaries.map((diary) => (
        <Diary
          key={diary.id}
          {...diary}
          onDelete={() => handleDeleteDiary(diary.id)}
        />
      ))}

      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleAddDiary(
            event.target.title.value,
            event.target.body.value
          );
          event.target.reset();
        }}
      >
        <label>
          Tituls:
          <input type="text" name="title" required />
        </label>
        <label>
          Saturs:
          <textarea name="body" required />
        </label>
        <button type="submit">Pievienot dienasgrāmatu</button>
      </form>
    </>
  );
}

export default DiariesList;
