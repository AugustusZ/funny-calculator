import { evaluate, format } from 'mathjs';

export const checkExpression = (expression: string): number | undefined => {
  try {
    const value = evaluate(expression);
    return parseFloat(format(value, 14));
  } catch {
    return undefined;
  }
};

const VALID_COMMAND = ['🆑', '='];

/**
 * Parse the expression
 *
 * @param expression
 * @returns if `value` is `undefined`, then the `expression` is invalid.
 */
export const parseExpression = (
  expression: string
): { value?: number; command?: string } => {
  // Expression after single command digit removed from the end
  const cleanExpression = expression.replace(/🆑|=$/g, '');
  const value = checkExpression(cleanExpression);

  const command = VALID_COMMAND.find(validCommand =>
    expression.endsWith(validCommand)
  );

  return {
    command,
    value
  };
};
