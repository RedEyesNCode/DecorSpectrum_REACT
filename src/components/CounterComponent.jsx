import React, { useState } from 'react';

const CounterComponent = () => {
  // Initialize state variable count with initial value 0
  const [count, setCount] = useState(1);

  // Function to increment count
  const incrementCount = () => {
    setCount(count + 1);
  };

  // Function to decrement count
  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
    <h2>Counter</h2>
    {count === 0 ? (
      <ZeroCounterComponent />
    ) : (
      <>
        <button onClick={decrementCount}>Decrement</button>
        <span style={{margin :"10px"}}>{count}</span>
        <button onClick={incrementCount}>Increment</button>
      </>
    )}
  </div>
  );
};
const ZeroCounterComponent = () => {
    return (
      <div>
        <p>Cart Empty!</p>
      </div>
    );
  };

export default CounterComponent;
