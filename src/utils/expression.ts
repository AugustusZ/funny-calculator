export const checkExpression = (expression: string): number | undefined => {
  try {
    return Function(`"use strict";return (${expression})`)();
  } catch {
    return undefined;
  }
};
