import React, { useState, useEffect, useRef } from 'react';
import Digit from '../Digit';
import {
  checkExpression,
  getCodeFromDigit,
  getDigitFromCode
} from '../../utils';
import './index.css';

const getInitDigits = (value: number) =>
  String(isNaN(value) ? '' : value)
    .split('')
    .concat(Array(100).fill(''));

const getInitialCodes = (value: number) =>
  getInitDigits(value).map(getCodeFromDigit);

const Display = ({
  answerValue,
  setExpression
}: {
  answerValue: number;
  setExpression: (expression: string) => void;
}) => {
  const [codes, setCodes] = useState<string[]>(getInitialCodes(answerValue));
  const ref = useRef<HTMLDivElement>(null);

  const setCodeAt = (newCode: string, index: number) => {
    const newCodes = codes.map((code, i) => (index === i ? newCode : code));
    setCodes(newCodes);

    // up pass the expression when valid
    const expression = newCodes.map(getDigitFromCode).join('');
    if (typeof checkExpression(expression) !== 'undefined') {
      setExpression(expression);
    }
  };

  // triggered when value is changed AKA displaying the calculated result
  useEffect(() => {
    setCodes(getInitialCodes(answerValue));

    if (ref.current) {
      ref.current.scrollLeft = 0;
    }
  }, [answerValue]);

  return (
    <div className="display" ref={ref}>
      {codes.map((code, index) => {
        const setCode = (newCode: string) => {
          setCodeAt(newCode, index);
        };
        return <Digit key={code + '@' + index} code={code} setCode={setCode} />;
      })}
    </div>
  );
};

export default Display;
