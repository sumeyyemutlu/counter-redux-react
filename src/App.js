import React from 'react';
import './App.css';
import DecreaseCounter from './components/DecreaseCounter';
import IncreaseByTwoCounter from './components/IncreaseByTwoCounter';
import IncreaseCounter from './components/IncreaseCounter';
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <Counter />
      <IncreaseCounter />
      <DecreaseCounter />
      <IncreaseByTwoCounter />
      
    </div>
  );
}

export default App;
