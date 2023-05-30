"use client";
import { Form } from "@/components/form";
import { TableUI } from "@/components/table";
import {
  Heading,
  Alert,
  AlertDescription,
  AlertTitle,
  Center,
} from "@edge-ui/react";
import { AlertCircle } from "lucide-react";

export const metadata = {
  title: "Infix Conversion",
  description: "Convert infix to postfix or prefix",
};
export default function Home() {
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
      <Form />
      <TableUI />
    </>
  );
}
