import React from 'react';
import ToDoItem from './ToDoItem.tsx';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface ToDoListProps {
  todos: Todo[];
  onToggleCompleted: (id: number) => void;
  onRemoveTodo: (id: number) => void;
}

function ToDoList({ todos, onToggleCompleted, onRemoveTodo }: ToDoListProps) {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onToggleCompleted={onToggleCompleted}
          onRemoveTodo={onRemoveTodo}
        />
      ))}
    </ul>
  );
}

export default ToDoList;