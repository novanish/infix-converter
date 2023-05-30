import { ConvertTo } from "@/app/page";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@edge-ui/react";

interface Props {
  isOpen: boolean;
  convertTo: ConvertTo;
  onOpenChange: (c: boolean) => void;
}

export function Dialog({ onOpenChange, isOpen, convertTo }: Props) {
  return (
    <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Infix is Required</AlertDialogTitle>
          <AlertDialogDescription>
            Cannot Convert Empty String to {convertTo}. Please provide a valid
            infix expression
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>Got It!</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
