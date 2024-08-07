import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className='counter-container' style={{ border: '1px solid #333', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <button onClick={incrementCount} style={{ backgroundColor: 'green', color: 'white', marginRight: '5px',width:'50px',height:'50px' }}>+</button>
      <button onClick={decrementCount} style={{ backgroundColor: 'red', color: 'white', marginRight: '5px',width:'50px',height:'50px' }}>-</button>
      <button onClick={resetCount} style={{ backgroundColor: 'gray', color: 'white',width:'50px',height:'50px' }}>Reset</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default Counter;
