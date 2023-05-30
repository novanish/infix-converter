import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@edge-ui/react";

const GroceryList = [
  {
    ID: 1,
    Item: "Milk",
    Quantity: "2 gallons",
    Amount: "$5.00",
  },
  {
    ID: 2,
    Item: "Bread",
    Quantity: "3 loaves",
    Amount: "$6.00",
  },
  {
    ID: 3,
    Item: "Eggs",
    Quantity: "1 dozen",
    Amount: "$2.50",
  },
  {
    ID: 4,
    Item: "Cheese",
    Quantity: "1 block",
    Amount: "$3.00",
  },
  {
    ID: 5,
    Item: "Apples",
    Quantity: "5 lbs.",
    Amount: "$4.00",
  },
  {
    ID: 6,
    Item: "Bananas",
    Quantity: "1 bunch (6)",
    Amount: "$2.00",
  },
  {
    ID: 7,
    Item: "Chicken breasts",
    Quantity: "2 lbs.",
    Amount: "$8.00",
  },
  {
    ID: 9,
    Item: "Pasta sauce",
    Quantity: "1 jar (24 oz.)",
    Amount: "$3.50",
  },
  {
    ID: 10,
    Item: "Spaghetti noodles",
    Quantity: "1 box (16 oz.)",
    Amount: "$2.00",
  },
];

export function TableUI() {
  return (
    <Table className="max-w-[700px] mx-auto border-2">
      <TableCaption>Infix to Postfix</TableCaption>
      <TableHeader className="border-b-2">
        <TableRow>
          {["Symbol", "Stack", "Postfix", "Amount"].map((data) => (
            <TableHead className="font-semibold last:text-right" key={data}>
              {data}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className="border-2">
        {GroceryList.map((item, idx) => (
          <TableRow key={idx}>
            <TableCell className="font-medium">{item.ID}</TableCell>
            <TableCell>{item.Item}</TableCell>
            <TableCell>{item.Quantity}</TableCell>
            <TableCell className="text-right">{item.Amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
