import { ButtonLink, PageWithTable, TransactionsTable } from "@/components";
import { TransactionDataType } from "@/schemas/transaction-form-schema";

interface ILastTransactions {
  transactions: TransactionDataType[];
}

export const LastTransactions = ({ transactions }: ILastTransactions) => (
  <PageWithTable
    title="Last Transactions"
    headerRight={
      <div className="flex gap-4">
        <ButtonLink to="/dashboard/transactions" text="View All" variant="outline" />
        <ButtonLink to="/dashboard/transactions/new" text="New Transaction" />
      </div>
    }
  >
    {transactions.length === 0 ? (
      <p className="text-center py-10 text-lg text-muted-foreground">No transactions found.</p>
    ) : (
      <TransactionsTable data={transactions} />
    )}
  </PageWithTable>
);
