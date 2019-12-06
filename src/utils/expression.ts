import { evaluate, format } from 'mathjs';

export const checkExpression = (expression: string): number | undefined => {
  try {
    const value = evaluate(expression);
    return parseFloat(format(value, 14));
  } catch {
    return undefined;
  }
};

const hasCommandEqual = (expression: string): boolean =>
  expression.endsWith('=');

const hasCommandClear = (expression: string): boolean =>
  expression.includes('🆑');

/**
 * Parse the expression
 *
 * E.g.
 *
 * | Expression | Evaluable | Executable |
 * |:-------:|:---:|:---:|
 * | `"-="`  | ❌ | ❌ |
 * | `"🆑-"` | ❌ | ✅ |
 * | `"-1"`  | ✅ | ❌ |
 * | `"-1="` | ✅ | ✅ |
 *
 * @param expression
 * @returns
 *   - `evaluable`: the expression (after removing commands) can be evaluated to a number
 *   - `executable`:
 *     - has `🆑` at any position
 *     - evaluable and has `=` at the end
 */
export const parseExpression = (
  expression: string
): {
  value?: number;
  command?: string;
  evaluable: boolean;
  executable: boolean;
} => {
  // Expression after removing: `🆑` at any position; single `=` at the end
  const cleanExpression = expression.replace(/🆑|=$/g, '');
  const value = checkExpression(cleanExpression);
  const evaluable = typeof value === 'number'; // check NaN?
  const command = hasCommandEqual(expression)
    ? '='
    : hasCommandClear(expression)
    ? '🆑'
    : undefined;

  return {
    command,
    value,
    evaluable,
    executable:
      hasCommandClear(expression) || (evaluable && hasCommandEqual(expression))
  };
};
