import React, { useState, useEffect, useRef } from 'react';
import Digit from '../Digit';
import {
  getCodesFromValue,
  getDigitFromCode,
  parseExpression
} from '../../utils';
import './index.css';

const Display = ({
  answerValue,
  setExpression
}: {
  answerValue: number;
  setExpression: (expression: string) => void;
}) => {
  const [codes, setCodes] = useState<string[]>(getCodesFromValue(answerValue));
  const ref = useRef<HTMLDivElement>(null);

  const setCodeAt = (newCode: string, index: number) => {
    const newCodes = codes.map((code, i) => (index === i ? newCode : code));
    setCodes(newCodes);

    // up pass the expression when meaningful (executable/parsable)
    const expression = newCodes.map(getDigitFromCode).join('');
    const { evaluable, executable } = parseExpression(expression);
    if (evaluable || executable) {
      setExpression(expression);
    }
  };

  // triggered when value is changed AKA displaying the calculated result
  useEffect(() => {
    setCodes(getCodesFromValue(answerValue));

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
