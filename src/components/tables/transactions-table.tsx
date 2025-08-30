import { TransactionDataType } from "@/schemas/transaction-form-schema";

interface ITransactionsTableProps {
  data: TransactionDataType[];
}

export const TransactionsTable = ({ data }: ITransactionsTableProps) => {
  console.log("TransactionsTable data: ", data);

  return <div>TransactionsTable</div>;
};
