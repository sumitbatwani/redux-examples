import React from 'react';
import Counter from './components/Counter';
import store from './store';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Counter
        value={store.getState()}
        onIncrement={() => {
          store.dispatch({ type: 'INCREMENT' });
        }}
        onDecrement={() => {
          store.dispatch({ type: 'DECREMENT' });
        }}
      />
    </div>
  );
}

export default App;
