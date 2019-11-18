import React from 'react';
import Calculator from './components/Calculator';
import './App.css';

const App: React.FC = () => (
  <div className="app">
    <div className="container">
      <Calculator />
    </div>
  </div>
);

export default App;
