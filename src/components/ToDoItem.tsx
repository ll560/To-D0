import React from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface ToDoItemProps {
  todo: Todo;
  onToggleCompleted: (id: number) => void;
  onRemoveTodo: (id: number) => void;
}

function ToDoItem({ todo, onToggleCompleted, onRemoveTodo }: ToDoItemProps) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleCompleted(todo.id)}
      />
      <span>{todo.text}</span>
      <button onClick={() => onRemoveTodo(todo.id)}>Remove</button>
    </li>
  );
}

export default ToDoItem;