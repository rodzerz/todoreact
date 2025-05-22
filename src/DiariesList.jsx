import React, { useState } from 'react';
import Diary from './Diary';

function DiariesList() {
  const [diaries, setDiaries] = useState([
    {
      id: 1,
      title: "Pirmdienas piedzīvojums",
      body: "Šodien bija saulaina diena un devos pastaigā pa mežu.",
      date: "2025-05-19"
    },
    {
      id: 2,
      title: "Otrdienas pārdomas",
      body: "Strādāju pie React projekta un iemācījos par komponentēm.",
      date: "2025-05-20"
    },
    {
      id: 3,
      title: "Trešdienas miers",
      body: "Pavadīju dienu ar grāmatu rokās un dzēru tēju.",
      date: "2025-05-21"
    },
  ]);

  const handleAddDiary = (title, body) => {
    const newDiary = { id: Date.now(), title, body, date: new Date().toISOString() };
    setDiaries((prevDiaries) => [...prevDiaries, newDiary]);
  };

  const handleDeleteDiary = (id) => {
    setDiaries((prevDiaries) => prevDiaries.filter(diary => diary.id !== id));
  };

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

      {/* Formas pievienošana dienasgrāmatas ieraksta pievienošanai */}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleAddDiary(event.target.title.value, event.target.body.value);
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
