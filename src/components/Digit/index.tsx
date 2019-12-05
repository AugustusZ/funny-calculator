import React, { useState } from 'react';
import {
  isDev,
  getStrokesFromCode,
  getCodeFromStrokes,
  areStrokesValid
} from '../../utils';
import { SVG_ELEMENTS } from './constants';
import './index.css';

const Digit = ({
  code,
  setCode
}: {
  code: string;
  setCode?: (code: string) => void;
}) => {
  const [strokes, setStrokes] = useState<boolean[]>(
    getStrokesFromCode(code || '')
  );

  const getStrokeAt = (index: number): boolean => strokes[index];

  const onClick = (event: any) => {
    const strokeIndex: number = parseInt(event.target.dataset['stroke'], 10);
    const newStroke = !getStrokeAt(strokeIndex);
    const newStrokes = strokes.map((s, i) =>
      strokeIndex === i ? newStroke : s
    );
    setStrokes(newStrokes);

    // up pass the code when valid
    if (areStrokesValid(newStrokes) && typeof setCode === 'function') {
      setCode(getCodeFromStrokes(newStrokes));
    }
  };

  return (
    <div className={'digit' + (areStrokesValid(strokes) ? '' : ' invalid')}>
      {isDev && <code className="code">{getCodeFromStrokes(strokes)}</code>}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283 431">
        <g fillRule="evenodd">
          {SVG_ELEMENTS.map((elem, index) => {
            const { tag, ...attrs } = elem;
            const status = getStrokeAt(index);
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
