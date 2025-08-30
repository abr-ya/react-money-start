import { format } from "date-fns";
import { PencilIcon } from "lucide-react";

import { TransactionDataType } from "@/schemas/transaction-form-schema";
import { Button, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "..";

interface ITransactionsTableProps {
  data: TransactionDataType[];
}

export const TransactionsTable = ({ data }: ITransactionsTableProps) => {
  console.log("TransactionsTable data: ", data);

  return (
    <Table className="mt-4">
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead />
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell>{format(transaction.transactionDate, "do MMM yyyy")}</TableCell>
            <TableCell>{transaction.description}</TableCell>
            {/* todo: Badge */}
            <TableCell className="capitalize">{transaction.transactionType}</TableCell>
            <TableCell>{transaction.category}</TableCell>
            <TableCell>{transaction.amount} usd</TableCell>
            <TableCell className="text-right">
              <Button variant="outline" size="icon" aria-label="Edit transaction" asChild>
                {/* todo: Add Edit Link! */}
                <PencilIcon className="w-[20px] h-[20px]" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
