import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');
  const [filter, setFilter] = useState('all');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputText.trim() !== '') {
      const newTodo = {
        id: Math.random().toString(36).substr(2, 9),
        text: inputText,
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInputText('');
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') {
      return todo.completed;
    } else if (filter === 'active') {
      return !todo.completed;
    } else {
      return true;
    }
  });

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add</button>
      <div className="filter-buttons">
      <button onClick={() => handleFilterChange('all')}>All</button>
      <button onClick={() => handleFilterChange('active')}>Active</button>
      <button onClick={() => handleFilterChange('completed')}>Completed</button>
    </div>
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleComplete(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
