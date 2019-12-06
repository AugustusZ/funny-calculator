import React, { useState, useRef } from 'react';
import Display from '../Display';
import Help from '../Help';
import { parseExpression } from '../../utils';
import './index.css';

const initValue = NaN;
const Calculator: React.FC = () => {
  const [key, setKey] = useState(0);
  const [isShowingHelp, setIsShowingHelp] = useState(false);
  const answerRef = useRef(initValue);

  const setExpression = (expression: string) => {
    console.debug('Expression:', expression);
    const { command, value, evaluable, executable } = parseExpression(
      expression
    );

    if (evaluable) {
      answerRef.current = value as number; // don't set state yet
      console.log('Answer:', value);
    }

    if (executable) {
      // execute command
      if (command === '=') {
        displayAnswer();
      } else if (command === '🆑') {
        clear();
      }
    }
  };

  const displayAnswer = () => {
    // force a re-render to display the answer
    setKey(Date.now());
  };

  const clear = () => {
    answerRef.current = initValue;
    console.log('Clear');
    displayAnswer();
  };

  const showHelp = () => {
    setIsShowingHelp(true);
  };

  const hideHelp = () => {
    setIsShowingHelp(false);
  };

  return (
    <div className="calculator">
      <Display
        key={key}
        setExpression={setExpression}
        answerValue={answerRef.current}
      />
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
