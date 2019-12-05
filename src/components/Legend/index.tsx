import React from 'react';
import Digit from '../Digit';
import { MAPPING_CHAR_TO_CODE_LIST } from '../Digit/constants';
import './index.css';

export const Legend = () => (
  <div className="legend">
    <ul>
      {Object.keys(MAPPING_CHAR_TO_CODE_LIST).map(char => (
        <li key={char} className="legend-char-section">
          <h3>
            <kbd>{char || '(Empty)'}</kbd>
          </h3>
          <ul className="legend-code-list">
            {MAPPING_CHAR_TO_CODE_LIST[char].map(code => (
              <li key={code}>
                <Digit code={code} />
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </div>
);

export default Legend;
