'use client';

import React, { useState } from 'react';
import ToDoCard from '../components/ToDoCard';

const initialState = [
  {
    done: false,
    title: 'today i have to smile',
    description: 'smile really hard a lot today',
    id: 1,
  },
  {
    done: true,
    title: 'go to the butcher',
    description: 'i must purvey',
    id: 2,
  },
];

function Home() {
  const [toDos, setToDos] = useState(initialState);
  setToDos(initialState);

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      {toDos.map((todo) => (
        <ToDoCard key={todo.id} toDoObject={todo} />
      ))}
    </div>
  );
}

export default Home;
