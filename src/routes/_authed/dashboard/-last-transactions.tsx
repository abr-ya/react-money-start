import { PageBody, TransactionsTable } from "@/components";
import { TransactionDataType } from "@/schemas/transaction-form-schema";

interface ILastTransactions {
  transactions: TransactionDataType[];
}

// todo: the same PageBody style as -transactions-list
export const LastTransactions = ({ transactions }: ILastTransactions) => (
  <PageBody title="Last Transactions">
    {transactions.length === 0 ? (
      <p className="text-center py-10 text-lg text-muted-foreground">No transactions found.</p>
    ) : (
      <TransactionsTable data={transactions} />
    )}
  </PageBody>
);
