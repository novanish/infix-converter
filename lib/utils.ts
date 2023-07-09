export const isOperator = (s: string) =>
  [42, 43, 45, 47, 94].includes(s.charCodeAt(0));

export const isDigitOrAlphabet = (s: string) => {
  const charCode = s.toLowerCase().charCodeAt(0);
  return (
    (charCode >= 97 && charCode <= 122) || (charCode >= 48 && charCode <= 57)
  );
};

export const getPrecedence = (s: string) =>
  ({ "+": 1, "-": 1, "/": 2, "*": 2, "^": 3 }[s] as number);

// can reverse both infix and postfix expression
export function revExpression(expression: string) {
  let revInfixExpression = "";
  const { length } = expression;
  let operand = "";

  for (let index = 0; index < length; index++) {
    const element = expression[index];

    if (element === " " || isOperator(element)) {
      revInfixExpression = element + operand + revInfixExpression;
      operand = "";
    } else if (isDigitOrAlphabet(element)) {
      operand += element;
    } else if (element === "(") {
      revInfixExpression = ")" + revInfixExpression;
    } else if (element === ")") {
      revInfixExpression = "(" + operand + revInfixExpression;
      operand = "";
    }
  }

  return operand + revInfixExpression;
}
