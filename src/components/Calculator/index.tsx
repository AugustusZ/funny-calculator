import React from 'react';
import Display from '../Display';

import './index.css';

const Calculator: React.FC = () => {
  return (
    <div className="calculator">
      <Display />
      <footer>Button</footer>
    </div>
  );
};

export default Calculator;
