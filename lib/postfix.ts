import { Stack } from "./stack";
import { getPrecedence, isDigitOrAlphabet, isOperator } from "./utils";

export type Info = {
  stack: string;
  symbol: string;
  postfix: string;
}[];

interface Output {
  postfix: string;
  info: Info;
}

export function toPostfix(expression: string) {
  const output: Output = {
    postfix: "",
    info: [],
  };

  const { length } = expression;
  const stack = new Stack<string>(length);

  for (let index = 0; index < length; index++) {
    const symbol = expression[index];
    if (symbol === " ") continue;

    if (isDigitOrAlphabet(symbol)) {
      output.postfix += symbol;
    }

    if (symbol === "(") {
      stack.push(symbol);
    }

    if (symbol === ")") {
      while (true) {
        const symbol = stack.pop();
        if (symbol === "(") break;

        output.postfix += " " + symbol;
      }
    }

    if (isOperator(symbol)) {
      output.postfix += " ";
      while (
        !stack.isEmpty() &&
        getPrecedence(stack.peek()) >= getPrecedence(symbol) &&
        stack.peek() !== "("
      ) {
        output.postfix += " " + stack.pop() + " ";
      }

      stack.push(symbol);
    }

    output.info.push({
      symbol,
      stack: stack.getStack.join(", "),
      postfix: output.postfix,
    });
  }

  const isEmpty = stack.isEmpty();
  while (!stack.isEmpty()) {
    output.postfix += " " + stack.pop() + " ";
  }

  if (!isEmpty) {
    output.info.push({
      symbol: "",
      stack: stack.getStack.join(", "),
      postfix: output.postfix,
    });
  }

  return output;
}
