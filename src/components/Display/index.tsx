import React, { useState } from 'react';
import Digit from '../Digit';

import './index.css';
import { checkExpression } from '../../utils/expression';

const Display = ({
  setExpression
}: {
  setExpression: (expression: string) => void;
}) => {
  const [digits, setDigits] = useState<string[]>(['1', '*', '2']);
  const setDigitAt = (newDigit: string, index: number) => {
    const newDigits = digits.map((d, i) => (index === i ? newDigit : d));
    setDigits(newDigits);

    //
    const expression = newDigits.join('');
    if (typeof checkExpression(expression) !== 'undefined') {
      setExpression(expression);
    }
  };

  return (
    <div className="display">
      {digits.map((digit, index) => {
        const setDigit = (value: string) => {
          setDigitAt(value, index);
        };
        return (
          <Digit key={digit + '@' + index} digit={digit} setDigit={setDigit} />
        );
      })}
    </div>
  );
};

export default Display;
