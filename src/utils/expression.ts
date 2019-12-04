import { evaluate, format } from 'mathjs';
export const checkExpression = (expression: string): number | undefined => {
  try {
    const value = evaluate(expression);
    return parseFloat(format(value, 14));
  } catch {
    return undefined;
  }
};
