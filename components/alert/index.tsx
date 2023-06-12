import { AlertTitle, Center, Alert, AlertDescription } from "@edge-ui/react";
import { AlertCircle } from "lucide-react";

export function AlertNote() {
  return (
    <Center>
      <Alert
        variant="destructive"
        className="max-w-[300px] bg-[#FFFFFF] text-[#EB0000]"
      >
        <AlertCircle />
        <AlertTitle className="ml-[0.2rem] text-base">Note</AlertTitle>
        <AlertDescription className="ml-[0.2rem] text-[0.9rem]">
          This converter doesn't validate your input
        </AlertDescription>
      </Alert>
    </Center>
  );
}
