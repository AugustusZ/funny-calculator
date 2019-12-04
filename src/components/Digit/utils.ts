import { MAPPING_CHAR_TO_CODE, MAPPING_CODE_TO_CHAR } from './constants';

export const getCodeFromDigit = (char: string) => {
  const c = char.length > 1 ? char.charAt(0) : char;
  return MAPPING_CHAR_TO_CODE[c];
};

export const getDigitFromCode = (code: string) => {
  return MAPPING_CODE_TO_CHAR[code];
};
