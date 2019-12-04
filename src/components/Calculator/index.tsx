import React, { useState, useRef } from 'react';
import Display from '../Display';
import FooterButton from '../FooterButton';
import Help from '../Help';

import './index.css';
import { checkExpression } from '../../utils/expression';

const initValue = NaN;
const Calculator: React.FC = () => {
  const [answer, setAnswer] = useState(initValue);
  const [key, setKey] = useState(0);
  const [isShowingHelp, setIsShowingHelp] = useState(true);
  const answerRef = useRef(initValue);

  const setExpression = (expression?: string) => {
    if (typeof expression === 'undefined') {
      answerRef.current = initValue;
      console.log('Reset');
      return;
    }

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
    setExpression();
    calculate();
    setKey(Date.now());
  };

  const showHelp = () => {
    setIsShowingHelp(true);
  };

  const hideHelp = () => {
    setIsShowingHelp(false);
  };

  return (
    <div className="calculator">
      <Display key={key} setExpression={setExpression} value={answer} />
      <footer>
        <FooterButton
          onClick={reset}
          isDangerous={true}
          onDoubleClick={showHelp}>
          {'↺'}
        </FooterButton>
        <FooterButton onClick={calculate}>{'＝'}</FooterButton>
      </footer>
      {isShowingHelp && (
        <div className="full-screen" role="button" onDoubleClick={hideHelp}>
          <Help />
        </div>
      )}
    </div>
  );
};

export default Calculator;
