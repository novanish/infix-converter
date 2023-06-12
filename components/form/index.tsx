import {
  Input,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@edge-ui/react";
import { useState } from "react";
import { CONVERT_TO, ConvertTo } from "../table";

interface Props {
  convertTo: ConvertTo;
  onConvert: (o: { infix: string; convertTo: ConvertTo }) => void;
}

export function Form({ convertTo, onConvert }: Props) {
  const [expression, setExpression] = useState({ infix: "", convertTo });
  return (
    <form
      className="space-y-12"
      onSubmit={(event) => {
        event.preventDefault();
        onConvert(expression);
      }}
    >
      <Input
        type="label"
        aria-label="Enter infix expression"
        placeholder="Enter infix expression"
        className="max-w-[400px] py-5 mx-auto border-[1px] border-[#333] text-base"
        spellCheck="false"
        autoComplete="off"
        value={expression.infix}
        onChange={({ target: { value: infix } }) => {
          setExpression((p) => ({ ...p, infix }));
        }}
        aria-required="true"
      />

      <div className="w-fit mx-auto">
        <label htmlFor="select">Convert Infix</label>
        <Select
          defaultValue={expression.convertTo}
          onValueChange={(convertTo: ConvertTo) => {
            setExpression((p) => ({ ...p, convertTo }));
          }}
        >
          <SelectTrigger
            className="w-[130px] border-[1px] border-[#333] mt-1"
            id="select"
          >
            <SelectValue placeholder="Convert to" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value={CONVERT_TO.postfix}>To Postfix</SelectItem>
              <SelectItem value={CONVERT_TO.prefix}>To Prefix</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <button
        className="group relative block text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 mx-auto"
        aria-label="Convert"
      >
        <span
          className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-[#ff6702] transition-transform group-hover:translate-y-0 group-hover:translate-x-0"
          aria-hidden="true"
        ></span>

        <span className="relative z-10 block border border-current bg-white px-8 py-3">
          Convert
        </span>
      </button>
    </form>
  );
}
