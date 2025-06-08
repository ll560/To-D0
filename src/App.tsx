import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import AddToDo from './components/AddToDo';

const LOCAL_STORAGE_KEY = 'todos'
//src/types.ts --> import {Todo} from './types';
interface Todo{
    id: number;
    text: string;
    completed: boolean;
}

const App: React.FC = () => {
//     const [todos, setTodos] = useState<Todo[]>([
//     { id: 1, text: 'Buy milk', completed: false },
//     { id: 2, text: 'Walk the dog', completed: false },
//   ]);

 const [todos, setTodos] = useState<Todo[]>(() => {
    const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const handleToggleCompleted = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const handleRemoveTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
    return (
        <div>
            <Header title="To Do App"/>
            <p>This is a simple React application using Vite.</p>
            <AddToDo onAddTodo={handleAddTodo} />
            <ToDoList
        todos={todos}
        onToggleCompleted={handleToggleCompleted}
        onRemoveTodo={handleRemoveTodo}
      />
        </div>
    );
};

export default App;