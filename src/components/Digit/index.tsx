import React, { useState } from 'react';
import './index.css';
import * as utils from './utils';
import { SVG_ELEMENTS } from './constants';

const Digit = ({
  digit,
  setDigit
}: {
  digit: string;
  setDigit: (value: string) => void;
}) => {
  const [code, setCode] = useState<string>(utils.getCodeFromDigit(digit || ''));

  const getStatusAt = (index: number) => code.charAt(index) === '1';

  const onClick = (event: any) => {
    const strokeIndex: number = parseInt(event.target.dataset['stroke'], 10);
    const newStatus = !getStatusAt(strokeIndex);
    const newCode = code
      .split('')
      .map((c, i) => (strokeIndex === i ? (newStatus ? '1' : '0') : c))
      .join('');
    setCode(newCode);

    const newDigit = utils.getDigitFromCode(newCode);
    if (typeof newDigit === 'string') {
      setDigit(newDigit);
    }
  };

  const isValid = typeof utils.getDigitFromCode(code) === 'string';
  return (
    <div className={'digit' + (isValid ? '' : ' invalid')}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283 431">
        <g fillRule="evenodd">
          {SVG_ELEMENTS.map((elem, index) => {
            const { tag, ...attrs } = elem;
            const status = getStatusAt(index);
            const props = {
              ...attrs,
              onClick,
              key: String(status) + index,
              className: status ? 'on' : '',
              'data-stroke': index
            };
            return tag === 'path' ? (
              <path {...props} />
            ) : tag === 'circle' ? (
              <circle {...props} />
            ) : null;
          })}
        </g>
      </svg>
    </div>
  );
};

export default Digit;
