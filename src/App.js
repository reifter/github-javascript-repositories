import React from 'react';
import Header from './common/components/app/Header';
import Repositories from './modules/Repositories/containers';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Repositories />
    </>
  );
}

export default App;
