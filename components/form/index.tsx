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
  onSelectChange: (s: ConvertTo) => void;
  convert: (s: string) => void;
}

export function Form({ convertTo, onSelectChange, convert }: Props) {
  const [infix, setInfix] = useState("");

  return (
    <form
      className="space-y-12"
      onSubmit={(event) => {
        event.preventDefault();
        convert(infix);
      }}
    >
      <Input
        type="label"
        aria-label="Enter infix expression"
        placeholder="Enter infix expression"
        className="max-w-[400px] mx-auto border-2"
        spellCheck="false"
        autoComplete="off"
        value={infix}
        onChange={({ target: { value } }) => setInfix(value)}
        aria-required="true"
      />

      <div className="w-fit mx-auto">
        <label htmlFor="select">Convert Infix</label>
        <Select defaultValue={convertTo} onValueChange={onSelectChange}>
          <SelectTrigger className="w-[130px] border-2 mt-1" id="select">
            <SelectValue placeholder="Select a language" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value={CONVERT_TO.postfix}>To Postfix</SelectItem>
              <SelectItem value={CONVERT_TO.prefix} disabled>
                To Prefix
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <button className="group relative block text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 mx-auto">
        <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-indigo-600 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

        <span className="relative block border border-current bg-white px-8 py-3">
          Convert
        </span>
      </button>
    </form>
  );
}
