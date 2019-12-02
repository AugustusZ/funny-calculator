import React from 'react';
import Display from '../Display';
import FooterButton from '../FooterButton';

import './index.css';

const Calculator: React.FC = () => {
  return (
    <div className="calculator">
      <Display />
      <footer>
        <FooterButton onClick={console.log} />
      </footer>
    </div>
  );
};

export default Calculator;
