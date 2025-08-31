import { TransactionDataType } from "@/schemas/transaction-form-schema";

// todo: optimize? just copy it from info DataLoader
// this interface from select: getTransactionsByMonth, getLastTransactions, but they can be changed
interface ILoadedTransaction {
  id: number;
  description: string;
  amount: string;
  transactionDate: string;
  category: string | null;
  transactionType: "income" | "expense" | null;
}

export const normaliseTransactions = (databaseTransactions: ILoadedTransaction[]): TransactionDataType[] =>
  databaseTransactions.map((tx) => ({
    ...tx,
    transactionDate: new Date(tx.transactionDate),
    category: tx.category || "Uncategorized",
  }));
