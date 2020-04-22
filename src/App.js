import React from 'react';
import Repositories from './modules/Repositories/containers';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>GitHub Star Rating</div>
      <Repositories />
    </div>
  );
}

export default App;
