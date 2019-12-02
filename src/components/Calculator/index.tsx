import React, { useState, useRef } from 'react';
import Display from '../Display';
import FooterButton from '../FooterButton';

import './index.css';
import { checkExpression } from '../../utils/expression';

const initValue = 0;
const Calculator: React.FC = () => {
  const [answer, setAnswer] = useState(initValue);
  const [key, setKey] = useState(0);
  const answerRef = useRef(initValue);

  const setExpression = (expression: string) => {
    const newAnswer = checkExpression(expression);
    if (typeof newAnswer === 'number') {
      answerRef.current = newAnswer; // don't set state yet
      console.log('Answer:', newAnswer);
    } else {
      console.error('Invalid expression:', expression);
    }
  };

  const calculate = () => {
    setAnswer(answerRef.current);
  };

  const reset = () => {
    setExpression('0');
    calculate();
    setKey(Date.now());
  };

  return (
    <div className="calculator">
      <Display key={key} setExpression={setExpression} value={answer} />
      <footer>
        <FooterButton onClick={reset} isDangerous={true}>
          {'↺'}
        </FooterButton>
        <FooterButton onClick={calculate}>{'＝'}</FooterButton>
      </footer>
    </div>
  );
};

export default Calculator;
