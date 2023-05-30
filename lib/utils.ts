export const isOperator = (s: string) =>
  [42, 43, 45, 47, 94].includes(s.charCodeAt(0));

export const isDigitOrAlphabet = (s: string) => {
  const charCode = s.toLowerCase().charCodeAt(0);
  return (
    (charCode >= 97 && charCode <= 122) || (charCode >= 49 && charCode <= 57)
  );
};

export const getPrecedence = (s: string) =>
  ({ "+": 1, "-": 1, "/": 2, "*": 2, "^": 3 }[s] as number);
