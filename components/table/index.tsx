import { Info } from "@/lib/postfix";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@edge-ui/react";

interface Props {
  info: Info;
  convertTo: ConvertTo;
}

export const CONVERT_TO = { postfix: "POSTFIX", prefix: "PREFIX" } as const;
export type ConvertTo = (typeof CONVERT_TO)[keyof typeof CONVERT_TO];

export function TableUI({ info }: Props) {
  return (
    <Table className="max-w-[700px] mx-auto border-[1px] border-[#333]">
      <TableCaption className="capitalize">Infix to Postfix</TableCaption>
      <TableHeader>
        <TableRow className="border-b-[1px] border-b-[#333]">
          {["Symbol", "Stack", "Postfix"].map((data) => (
            <TableHead
              className="font-semibold last:text-right text-lg even:text-center"
              key={data}
            >
              {data}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className="border-[1px] border-[#333]">
        {info.map(({ symbol, stack, postfix }, idx) => (
          <TableRow key={idx} className="text-lg border-b-2 last:border-0">
            <TableCell className="font-medium">{symbol}</TableCell>
            <TableCell className="text-center">{stack}</TableCell>
            <TableCell className="text-right">{postfix}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
