import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import AddToDo from './components/AddToDo';
import './app.css'

const LOCAL_STORAGE_KEY = 'todos'

interface Todo{
    id: number;
    text: string;
    completed: boolean;
}

const App: React.FC = () => {

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

  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };

  const currentDate = new Date().toLocaleDateString('en-US', options);

    return (
        <div className='app'>
            <Header title="To Do App"/>
             <div className="current-date">{currentDate}</div>
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