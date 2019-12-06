/**
 * ```txt
 * ---0--- --1----
 * |  \   |   /  |
 * 2   3  4  5   6
 * |    \ | /    |
 * ---7--- ---8---
 * |    / | \    |
 * 9  10  11 12 13
 * | /    |   \  |
 * ---14-- --15---  16
 * ```
 */

export const MAPPING_CHAR_TO_CODE: Record<string, string> = {
  '0': '11100010010001110',
  '1': '00000010000001000',
  '2': '11000011110000110',
  '3': '11000011100001110',
  '4': '00100011100001000',
  '5': '11100001100001110',
  '6': '11100001110001110',
  '7': '11000010000001000',
  '8': '11100011110001110',
  '9': '11100011100001110',
  '.': '00000000000000001',
  '+': '00001001100100000',
  '-': '00000001100000000',
  '*': '00010100001010000',
  '/': '00000100001000000',
  '(': '00000100000010000',
  ')': '00010000001000000',

  I: '11001000000100110',
  P: '11100011110000000',

  '': '00000000000000000'
};

export const MAPPING_CODE_TO_CHAR: Record<string, string> = {
  '11100010010001110': '0',
  '11110010010011110': '0', // full 0 with \
  '11100110011001110': '0', // full 0 with /
  '11100011100000000': '0', // upper half
  '00000001110001110': '0', // lower half
  '10101000010100100': '0', // half 0 on left
  '01001010000101010': '0', // half 0 on right
  '10101001000000000': '0', // quarter 0 on upper left
  '10111001000000000': '0', // quarter 0 on upper left with bar
  '01001010100000000': '0', // quarter 0 on upper right
  '01001110100000000': '0', // quarter 0 on upper right with bar
  '00000001010100100': '0', // quarter 0 on lower left
  '00000001011100100': '0', // quarter 0 on lower left with bar
  '00000000100101010': '0', // quarter 0 on lower right
  '00000000100111010': '0', // quarter 0 on lower right with bar

  '00000010000001000': '1', // right 1
  '00001000000100000': '1', // middle 1
  '00100000010000000': '1', // left 1
  '10001000000100110': '1', // fancy 1 with top and bottom bar
  '00000110000001000': '1', // Less fancy 1 with diagonal line
  '00100000000000000': '1', // Small 1 on upper left
  '00001000000000000': '1', // Small 1 on upper center
  '00000010000000000': '1', // Small 1 on upper right
  '00000000010000000': '1', // Small 1 on lower left
  '00000000000100000': '1', // Small 1 on lower center
  '00000000000001000': '1', // Small 1 on lower right

  '11000011110000110': '2',
  '11000100001000110': '2', // Z
  '11100100001000110': '2', // Z with starting serif
  '11000101010000110': '2', // Z variant
  '11000010101000110': '2', // ...
  '11100010101000110': '2', // ...
  '10001000001000100': '2', // ... left half
  '10101000001000100': '2', // ... left half with starting serif
  '10101000001000110': '2', // ... left half with long tail serif
  '10001001010000100': '2', // half 2 on left
  '01000010100100010': '2', // half 2 on right
  '01000100100000000': '2', // half z on upper right
  '00000001001000100': '2', // half z on lower left

  '11000011100001110': '3', // ∃
  '11000010100001110': '3', // ∃ with shorter center bar
  '11000010110001110': '3', // ∃ with shorter center bar and tail
  '11100010100001110': '3', // ∃ with shorter center bar and bun
  '11000100100001110': '3', // ㇋
  '11000100110001110': '3', // \㇋
  '11000101000010110': '3', // flipped ∑ w/ center bar
  '11000100000010110': '3', // flipped ∑
  '10001001000100100': '3', // half 3 on left
  '10001001001000000': '3', // half 3 on left w/ diagonal tail
  '01000010100001010': '3', // half 3 on right
  '00010001001000000': '3', // ⪫

  '00100011100001000': '4',
  '00100101101000000': '4', // diagonal stem with tail
  '00100101001000000': '4', // diagonal stem without tail
  '00101001100100000': '4', // 4 like /+
  '00001010100001000': '4', // right 丩
  '00101001000100000': '4', // left 丩
  '00000110100001000': '4', // right 4 with ⊿

  '11100001100001110': '5',
  '11010000000010110': '5', // like Z
  '11100001000010110': '5', // like Z
  '11010000010010110': '5', // like Z
  '11001000100001110': '5', // 丂
  '11001000110001110': '5', // \丂
  '10100001000100100': '5', // half 5 on left
  '01001000100001110': '5', // half 5 on right w/ long tail
  '01001000100001010': '5', // half 5 on right
  '10100001001000000': '5', // half 5 on left w/ diagonal tail
  '11100001001000000': '5', // half 5 on left w/ diagonal tail & long hair
  '00000000100010010': '5', // lower right
  '10010001000000000': '5', // upper left

  '11100001110001110': '6',
  '10100001110001110': '6', // short bun
  '00100001110001110': '6', // b
  '00100001010010110': '6', // trapezoid base
  '10100001010010110': '6', // trapezoid base with bun
  '11100001010010110': '6', // trapezoid base with long bun
  '10100000111001110': '6', // trapezoid base with long bun
  '11100000111001110': '6', // trapezoid base with long bun
  '11100000011010110': '6', // triangle base with long bun
  '00000100101001110': '6', // /]
  '11100001010100100': '6', // left half with long bun
  '10100001010100100': '6', // half 6 on left
  '01001000100101010': '6', // half 6 on right
  '00000100100101010': '6', // half 6 with diagonal line
  '00100001010100100': '6', // half 6 on left without top bar
  '00001000100101010': '6', // half 6 on right without top bar
  '00000100001010110': '6', // triangle base
  '00001000000110010': '6', // right triangle base
  '01001000000110010': '6', // right triangle base with bun
  '00000100000110010': '6', // right triangle base with diagonal neck
  '00100001011000000': '6', // left triangle base
  '10100001011000000': '6', // left triangle base with bun

  '11000010000001000': '7',
  '11000100001000000': '7', // ⧶
  '11000101101000000': '7', // handwriting 7 with bar ヌ
  '11100010000001000': '7', // 7 with serif at the beginning
  '10001000000100000': '7', // half 7 on left
  '10001001100100000': '7', // half 7 on left with bar
  '01000010000001000': '7', // half 7 on right
  '10101000000100000': '7', // half 7 on left with serif at the beginning
  '01001010000001000': '7', // half 7 on right with serif at the beginning
  '10001000000000000': '7', // quarter 7 on upper left
  '01000010000000000': '7', // quarter 7 on upper right
  '00000001000100000': '7', // quarter 7 on lower left
  '00000000100001000': '7', // quarter 7 on lower right
  '01000100000000000': '7', // small ⧶ on upper right
  '00000001001000000': '7', // small ⧶ on lower left

  '11100011110001110': '8',
  '11010100001010110': '8', // ⧖
  '10101001010100100': '8', // half 8 on left
  '01001010100101010': '8', // half 8 on right

  '11100011100001110': '9',
  '11100011100001000': '9', // 9 without tail
  '10101001000100100': '9', // half 9 on left
  '01001010100001010': '9', // half 9 on right
  '10101001000100000': '9', // half 9 on left without tail
  '01001010100001000': '9', // half 9 on right without tail
  '10101001001000000': '9', // half 9 on left with diagonal line

  '00000000000000001': '.',

  '00001001100100000': '+',

  '00000001100000000': '-',
  '00000001000000000': '-', // small - on center left
  '00000000100000000': '-', // small - on center right

  '00010100001010000': '*', // X
  '00001001101010000': '*', // asterisk (5 petals)
  '00010101101010000': '*', // ⦒⦑

  '00000100001000000': '/',
  '00000100000000000': '/', // divide on top right
  '00000000001000000': '/', // divide on bottom left

  '00000100000010000': '(',
  '00010000001000000': ')',

  // '00000110101001000': 'A', // Avengers' A
  // '11100011110001000': 'A', // fat
  // '11000011110001110': 'a', // flipped 6
  '11001000000100110': 'I',
  '11100011110000000': 'P',

  '00000000000000000': '',

  // command code:
  '11000000000000110': '=',
  '11000001100000000': '=', // half = on top
  '00000001100000110': '=', // half = on bottom
  '10000001000000000': '=', // quarter = on upper left
  '01000000100000000': '=', // quarter = on upper right
  '00000001000000100': '=', // quarter = on lower left
  '00000000100000010': '=', // quarter = on lower right
  '00011101101110000': '🆑'
};

const getMappingCharToCodeList = () => {
  const reversedMapping: { [char: string]: string[] } = {};
  Object.keys(MAPPING_CODE_TO_CHAR).forEach(code => {
    const char = MAPPING_CODE_TO_CHAR[code];
    if (typeof reversedMapping[char] === 'undefined') {
      reversedMapping[char] = [code];
    } else {
      reversedMapping[char].push(code);
    }
  });
  return reversedMapping;
};

export const MAPPING_CHAR_TO_CODE_LIST = getMappingCharToCodeList();

export const SVG_ELEMENTS = [
  { tag: 'path', d: 'M138.74 0v11.602L123.255 27h-79.64L30.909 13.5 44.56 0z' },
  {
    tag: 'path',
    d: 'M145.908 0v11.602L161.393 27h79.64l12.707-13.5L240.088 0z'
  },
  {
    tag: 'path',
    d:
      'M26.11 18l12.54 13.184-5.688 162.59L19.497 207 6.962 193.774l5.687-162.59z'
  },
  {
    tag: 'path',
    d: 'M61.047 33l56.568 113.507L116.024 192h-7.08L44.572 61.987 45.586 33z'
  },
  {
    tag: 'path',
    d:
      'M142.11 18l12.54 13.184-5.688 162.59L135.497 207l-12.535-13.226 5.687-162.59z'
  },
  {
    tag: 'path',
    d: 'M237.586 33l-1.014 28.987L163.103 192h-7.08l1.592-45.493L222.125 33z'
  },
  {
    tag: 'path',
    d:
      'M258.11 18l12.54 13.184-5.688 162.59L251.497 207l-12.535-13.226 5.687-162.59z'
  },
  {
    tag: 'path',
    d: 'M117.633 198l12.708 13.5L116.69 225h-79.64l-12.708-13.5L37.994 198z'
  },
  {
    tag: 'path',
    d: 'M233.633 198l12.708 13.5L232.69 225h-79.64l-12.708-13.5 13.653-13.5z'
  },
  {
    tag: 'path',
    d: 'M19.148 217l12.54 13.184L26 392.774 12.536 406 0 392.774l5.688-162.59z'
  },
  {
    tag: 'path',
    d: 'M33.062 391l1.014-28.987L107.545 232h7.08l-1.592 45.493L48.523 391z'
  },
  {
    tag: 'path',
    d:
      'M135.148 217l12.54 13.184L142 392.774 128.536 406 116 392.774l5.688-162.59z'
  },
  {
    tag: 'path',
    d:
      'M161.704 232l64.372 130.013L225.062 391h-15.461l-56.568-113.507L154.624 232z'
  },
  {
    tag: 'path',
    d:
      'M251.148 217l12.54 13.184L258 392.774 244.536 406 232 392.774l5.688-162.59z'
  },
  {
    tag: 'path',
    d: 'M125.74 423v-11.602L110.255 396h-79.64l-12.707 13.5L31.56 423z'
  },
  {
    tag: 'path',
    d: 'M132.908 423v-11.602L148.393 396h79.64l12.707 13.5-13.652 13.5z'
  },
  {
    tag: 'circle',
    cx: 266.908,
    cy: 415,
    r: 16
  }
];
