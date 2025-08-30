import { Link, useRouter } from "@tanstack/react-router";
import { format } from "date-fns";
import { PencilIcon } from "lucide-react";

import { TransactionDataType } from "@/schemas/transaction-form-schema";
import { Button, Table, TableBody, TableCell, TableHead, TableHeader, TableRow, Badge } from "..";

interface ITransactionsTableProps {
  data: TransactionDataType[];
}

export const TransactionsTable = ({ data }: ITransactionsTableProps) => {
  console.log("TransactionsTable data: ", data);
  const router = useRouter();

  return (
    <Table className="mt-4">
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Category</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead />
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell>{format(transaction.transactionDate, "do MMM yyyy")}</TableCell>
            <TableCell>{transaction.description}</TableCell>
            <TableCell className="capitalize">
              <Badge className={transaction.transactionType === "income" ? "bg-lime-500" : "bg-orange-500"}>
                {transaction.transactionType}
              </Badge>
            </TableCell>
            <TableCell>{transaction.category}</TableCell>
            <TableCell className="text-right">{transaction.amount} usd</TableCell>
            <TableCell className="text-right">
              <Button variant="outline" size="icon" aria-label="Edit transaction" asChild>
                <Link
                  onClick={() => {
                    router.clearCache({
                      filter: (route) => route.pathname !== `/dashboard/transactions/${transaction.id}`,
                    });
                  }}
                  // @ts-expect-error this work, but... todo: check ts!
                  to={`/dashboard/transactions/${transaction.id.toString()}`}
                >
                  <PencilIcon className="w-[20px] h-[20px]" />
                </Link>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
