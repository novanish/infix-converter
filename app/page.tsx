"use client";
import { Dialog } from "@/components/dialog";
import { Form } from "@/components/form";
import { TableUI } from "@/components/table";
import { Info, toPostfix } from "@/lib/postfix";
import {
  Heading,
  Alert,
  AlertDescription,
  AlertTitle,
  Center,
} from "@edge-ui/react";
import { AlertCircle } from "lucide-react";
import { useState } from "react";

export const metadata = {
  title: "Infix Converter",
  description: "Convert infix to postfix or prefix",
};

export const CONVERT_TO = { postfix: "POSTFIX", prefix: "PREFIX" } as const;
export type ConvertTo = (typeof CONVERT_TO)[keyof typeof CONVERT_TO];

type State = {
  convertTo: ConvertTo;
  info: Info;
  postfix: string;
};

export default function Home() {
  const [state, setState] = useState<State>({
    convertTo: CONVERT_TO.postfix,
    info: [],
    postfix: "",
  });

  const { convertTo, info, postfix } = state;

  const [isOpen, setIsOpen] = useState(false);

  function onSelectChange(convertTo: ConvertTo) {
    setState((p) => ({ ...p, convertTo }));
  }

  function convert(infix: string) {
    const trimmedInfix = infix.trim();
    if (!trimmedInfix) {
      setIsOpen(true);
      return;
    }

    const output = toPostfix(infix);

    setState((p) => ({ ...p, ...output }));
  }

  
  return (
    <>
      <Center>
        <Alert variant="destructive" className="max-w-[300px]">
          <AlertCircle />
          <AlertTitle className="ml-[0.2rem]">Note</AlertTitle>
          <AlertDescription className="ml-[0.2rem]">
            This converter doesn't validate your input
          </AlertDescription>
        </Alert>
      </Center>

      <Heading.H1 className="text-center">Infix Converter</Heading.H1>
      <Form
        convertTo={state.convertTo}
        onSelectChange={onSelectChange}
        convert={convert}
      />
      {info.length > 0 && <TableUI info={info} convertTo={convertTo} />}
      <Dialog
        convertTo={state.convertTo}
        isOpen={isOpen}
        onOpenChange={(c: boolean) => {
          setIsOpen(c);
        }}
      />
    </>
  );
}
