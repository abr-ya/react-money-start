import { PageBody } from "@/components";
import { TransactionDataType } from "@/schemas/transaction-form-schema";

interface ILastTransactions {
  transactions: TransactionDataType[];
}

export const LastTransactions = ({ transactions }: ILastTransactions) => {
  console.log("Dashboard, lastTransactions: ", transactions);

  return (
    <PageBody title="Last Transactions">
      <div>LastTransactions</div>
    </PageBody>
  );
};
