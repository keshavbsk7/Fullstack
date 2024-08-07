import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count+1);
  };
  const decrement = () => {
    setCount(count-1);
  };
  return (
    <div className="counter">
      <h1>Counter</h1>
      <p>{count}</p>
      <button className="button" onClick={decrement}>-</button>
      <button className="button" onClick={increment}>+</button>

    </div>
  );
}
export default App;
