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

  // (price + tax) * quantity => ["(" , "price","+",")","*", "quantity"]
  const symbols = expression.split(/([\(\)\+\-\*\/^])/);
  const { length } = symbols;
  const stack = new Stack<string>(length);

  for (let index = 0; index < length; index++) {
    const symbol = symbols[index].trim();
    if (symbol === "") continue;

    if (isDigitOrAlphabet(symbol)) {
      output.postfix += symbol + " ";
    }

    if (symbol === "(") {
      stack.push(symbol);
    }

    if (symbol === ")") {
      while (true) {
        const symbol = stack.pop();
        if (symbol === "(") break;

        output.postfix += symbol;
      }
    }

    if (isOperator(symbol)) {
      while (
        !stack.isEmpty() &&
        stack.peek() !== "(" &&
        getPrecedence(stack.peek()) >= getPrecedence(symbol)
      ) {
        output.postfix += stack.pop();
      }

      stack.push(symbol);
    }

    output.info.push({
      symbol,
      stack: stack.getStack.join(", "),
      postfix: output.postfix.split(/([-+*/^])/).join(" "),
    });
  }

  while (!stack.isEmpty()) {
    output.postfix += stack.pop();
  }

  output.info.push({
    symbol: "",
    stack: stack.getStack.join(", "),
    postfix: output.postfix.split(/([-+*/^])/).join(" "),
  });

  return output;
}
