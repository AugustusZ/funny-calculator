import React, { useState } from 'react';
import Display from '../Display';
import FooterButton from '../FooterButton';

import './index.css';
import { checkExpression } from '../../utils/expression';

const Calculator: React.FC = () => {
  const [answer, setAnswer] = useState(0);
  const setExpression = (expression: string) => {
    const newAnswer = checkExpression(expression);
    if (typeof newAnswer === 'number') {
      setAnswer(newAnswer);
      console.log('Answer:', newAnswer);
    } else {
      console.error('Invalid expression:', expression);
    }
  };

  return (
    <div className="calculator">
      <Display setExpression={setExpression} />
      <footer>
        <FooterButton onClick={console.log} />
      </footer>
    </div>
  );
};

export default Calculator;
