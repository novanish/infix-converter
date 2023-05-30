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

const CONVERT_TO = { postfix: "POSTFIX", prefix: "PREFIX" };

const text = "Enter infix expression";

export function Form() {
  const [state, setState] = useState({
    infix: "",
    convertTo: CONVERT_TO.prefix,
  });

  const { infix, convertTo } = state;

  return (
    <form className="space-y-12">
      <Input
        type="text"
        aria-label={text}
        placeholder={text}
        className="max-w-[400px] mx-auto border-2"
        spellCheck="false"
        autoComplete="off"
        value={infix}
        required
      />

      <div className="w-fit mx-auto">
        <label htmlFor="select">Convert Infix</label>
        <Select
          defaultValue={convertTo}
          onValueChange={(convertTo: string) => {
            setState((p) => ({ ...p, convertTo }));
          }}
        >
          <SelectTrigger className="w-[180px] border-2 mt-1" id="select">
            <SelectValue placeholder="Select a language" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value={CONVERT_TO.prefix}>To Postfix</SelectItem>
              <SelectItem value={CONVERT_TO.postfix}>To Prefix</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </form>
  );
}
