import {
  MAPPING_CHAR_TO_CODE,
  MAPPING_CODE_TO_CHAR,
  MAPPING_CHAR_TO_CODE_LIST
} from '../components/Digit/constants';

//-------------------
// code <--> digit
//-------------------

const getItemFromListRandomly = <T>(list: T[]): T =>
  list[Math.floor(Math.random() * list.length)];

/**
 * '' --> 00000000000000000
 * @param digit
 */
const getCodeFromDigit = (digit: string): string => {
  const char = digit.length > 1 ? digit.charAt(0) : digit;
  const possibleCodes = MAPPING_CHAR_TO_CODE_LIST[char];
  return Array.isArray(possibleCodes)
    ? getItemFromListRandomly(possibleCodes)
    : MAPPING_CHAR_TO_CODE['']; // fallback
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

/**
 * 10 -?-> ['00000010000001000', '11100010010001110']
 * @param value
 */
export const getCodesFromValue = (value: number): string[] =>
  String(isNaN(value) ? '' : value)
    .split('')
    .concat(Array(100).fill(''))
    .map(getCodeFromDigit);
