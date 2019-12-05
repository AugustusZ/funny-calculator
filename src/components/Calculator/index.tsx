import React, { useState, useRef } from 'react';
import Display from '../Display';
import FooterButton from '../FooterButton';
import Help from '../Help';
import { parseExpression } from '../../utils';
import './index.css';

const initValue = NaN;
const Calculator: React.FC = () => {
  const [answer, setAnswer] = useState(initValue);
  const [key, setKey] = useState(0);
  const [isShowingHelp, setIsShowingHelp] = useState(false);
  const answerRef = useRef(initValue);

  const setExpression = (expression: string) => {
    const { command, value: newAnswer } = parseExpression(expression);
    if (typeof newAnswer === 'number') {
      answerRef.current = newAnswer; // don't set state yet
      console.log('Answer:', newAnswer);

      // execute command
      if (command === '=') {
        displayAnswer();
      } else if (command === '🆑') {
        clear();
      }
    } else {
      console.error('Invalid expression:', expression);
    }
  };

  const displayAnswer = () => {
    setAnswer(answerRef.current);
  };

  const clear = () => {
    answerRef.current = initValue;
    console.log('Clear');
    displayAnswer();
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
      <Display key={key} setExpression={setExpression} answerValue={answer} />
      <footer>
        <button onClick={showHelp}></button>
      </footer>
      {isShowingHelp && (
        <div className="full-screen" role="button" onClick={hideHelp}>
          <Help />
        </div>
      )}
    </div>
  );
};

export default Calculator;
