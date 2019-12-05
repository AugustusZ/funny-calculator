import {
  MAPPING_CHAR_TO_CODE,
  MAPPING_CODE_TO_CHAR
} from '../components/Digit/constants';

//-------------------
// code <--> digit
//-------------------

/**
 * '' --> 00000000000000000
 * @param digit
 */
export const getCodeFromDigit = (digit: string): string => {
  const c = digit.length > 1 ? digit.charAt(0) : digit;
  return MAPPING_CHAR_TO_CODE[c];
};

/**
 * 00000000000000000 --> ''
 * @param code
 */
export const getDigitFromCode = (code: string): string =>
  MAPPING_CODE_TO_CHAR[code];

//-------------------
// strokes <--> code
//-------------------

/**
 * 00000000000000000 --> [false, false, ..., false]
 * @param code
 */
export const getStrokesFromCode = (code: string): boolean[] =>
  code.split('').map(char => char === '1');

/**
 * [false, false, ..., false] --> 00000000000000000
 * @param strokes
 */
export const getCodeFromStrokes = (strokes: boolean[]): string =>
  strokes.map(stroke => (stroke ? '1' : '0')).join('');

export const areStrokesValid = (strokes: boolean[]): boolean =>
  getCodeFromStrokes(strokes) in MAPPING_CODE_TO_CHAR;
