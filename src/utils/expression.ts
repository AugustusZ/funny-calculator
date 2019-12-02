export const checkExpression = (expression: string): number | undefined => {
  try {
    // eslint-disable-next-line
    return Function(`"use strict";return (${expression})`)();
  } catch {
    return undefined;
  }
};
