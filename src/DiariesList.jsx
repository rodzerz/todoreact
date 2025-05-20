import React from 'react';
import Diary from './Diary';

function DiariesList() {
  const diaries = [
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
  ];

  return (
    <>
      <h1>Dienasgrāmata</h1>
      {diaries.map(diary => (
        <Diary key={diary.id} {...diary} />
      ))}
    </>
  );
}

export default DiariesList;
