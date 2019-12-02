import React, { useState, useEffect, useRef } from 'react';
import Digit from '../Digit';

import './index.css';
import { checkExpression } from '../../utils/expression';

const getInitDigits = (value: number) =>
  String(isNaN(value) ? '' : value)
    .split('')
    .concat(Array(100).fill(''));
const Display = ({
  value,
  setExpression
}: {
  value: number;
  setExpression: (expression: string) => void;
}) => {
  const [digits, setDigits] = useState<string[]>(getInitDigits(value));
  const ref = useRef<HTMLDivElement>(null);

  const setDigitAt = (newDigit: string, index: number) => {
    const newDigits = digits.map((d, i) => (index === i ? newDigit : d));
    setDigits(newDigits);

    //
    const expression = newDigits.join('');
    if (typeof checkExpression(expression) !== 'undefined') {
      setExpression(expression);
    }
  };

  useEffect(() => {
    setDigits(getInitDigits(value));

    if (ref.current) {
      ref.current.scrollLeft = 0;
    }
  }, [value]);

  return (
    <div className="display" ref={ref}>
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
