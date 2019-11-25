import React, { useState } from 'react';
import Digit from '../Digit';

import './index.css';

const Display: React.FC = () => {
  const [digits, setDigits] = useState<string[]>(['1', '*', '2']);
  const setDigitAt = (newDigit: string, index: number) => {
    setDigits(digits.map((d, i) => (index === i ? newDigit : d)));
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
