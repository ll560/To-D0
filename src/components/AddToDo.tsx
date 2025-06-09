import React, { useState } from 'react';
import '../styles/addToDo.css'

interface AddToDoProps {
  onAddTodo: (text: string) => void;
}

function AddToDo({ onAddTodo }: AddToDoProps) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTodo(text);
      setText('');
    }
  };

  return (
    <form className="add-todo" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new task"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddToDo;