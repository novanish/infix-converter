"use client";
import { Dialog } from "@/components/dialog";
import { Form } from "@/components/form";
import { CONVERT_TO, ConvertTo, TableUI } from "@/components/table";
import { Info, toPostfix } from "@/lib/postfix";
import { useState } from "react";
import { Heading, Paragraph } from "@edge-ui/react";
import { AlertNote } from "@/components/alert";
import { revExpression } from "@/lib/utils";

type State = {
  convertTo: ConvertTo;
  info: Info;
  infix: string;
};

export default function Home() {
  const [state, setState] = useState<State>({
    convertTo: CONVERT_TO.postfix,
    info: [],
    infix: "",
  });

  const { convertTo, info, infix } = state;

  const [isOpen, setIsOpen] = useState(false);

  function onConvert({ infix, convertTo }: Omit<State, "info">) {
    setState((p) => ({ ...p, infix, convertTo }));

    const trimmedInfix = infix.trim();
    if (!trimmedInfix) {
      setIsOpen(true);
      return;
    }

    const output = toPostfix(
      convertTo === CONVERT_TO.postfix ? infix : revExpression(infix)
    );

    setState((p) => ({ ...p, ...output }));
  }

  return (
    <>
      <AlertNote />
      <Heading.H1 className="text-center">Infix Converter</Heading.H1>
      <Form convertTo={convertTo} onConvert={onConvert} />
      {info.length > 0 && (
        <>
          <div className="text-lg mx-auto w-fit space-y-4">
            <Paragraph>
              <strong>Infix expression: </strong>
              {infix}
            </Paragraph>
            {CONVERT_TO.prefix === convertTo ? (
              <>
                <p>
                  <strong>Reversed infix expression: </strong>{" "}
                  {revExpression(infix)}
                </p>
                <p>
                  <strong>Prefix expression: </strong>
                  {revExpression(info[info.length - 1].postfix)}
                </p>
              </>
            ) : (
              <p>
                <strong>Postfix expression: </strong>{" "}
                {info[info.length - 1].postfix}
              </p>
            )}
          </div>
          <TableUI info={info} convertTo={convertTo} />
        </>
      )}
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
