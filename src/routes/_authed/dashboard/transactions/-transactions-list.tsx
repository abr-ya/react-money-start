import { useNavigate } from "@tanstack/react-router";
import { format } from "date-fns";

import { ButtonLink, MonthYearSelector, PageWithTable, TransactionsTable } from "@/components";
import { TransactionDataType } from "@/schemas/transaction-form-schema";
import { IPeriod } from "@/interfaces/period.interface";

interface ITransactionsList {
  transactions: TransactionDataType[];
  month: number;
  year: number;
  yearsRange: number[];
}

const TransactionsList = ({ month, year, yearsRange, transactions }: ITransactionsList) => {
  const formattedSelectedDate = format(new Date(year, month - 1, 1), "MMM yyyy");
  const navigate = useNavigate();

  const goHandler = ({ year, month }: IPeriod) => {
    console.log("GO HANDLER: ", { year, month });
    navigate({
      to: "/dashboard/transactions",
      search: { month, year },
    });
  };

  return (
    <PageWithTable
      title={`${formattedSelectedDate} Transactions`}
      headerRight={
        <div className="flex gap-4">
          <MonthYearSelector month={month} year={year} goHandler={goHandler} yearsRange={yearsRange} />
          <ButtonLink to="/dashboard/transactions/new" text="New Transaction" />
        </div>
      }
    >
      {transactions.length === 0 ? (
        <p className="text-center py-5 text-lg text-muted-foreground">No transactions found for this month.</p>
      ) : (
        <TransactionsTable data={transactions} />
      )}
    </PageWithTable>
  );
};

export default TransactionsList;
