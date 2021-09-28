import React from 'react';

const Counter = ({ value, onIncrement, onDecrement }) => {
  return (
    <div>
      <div>Current value: {value}</div>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
};

export default Counter;
