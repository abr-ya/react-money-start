import { ButtonLink, Card, CardContent, CardHeader, CardTitle, MonthYearSelector } from "@/components";
import { IPeriod } from "@/interfaces/period.interface";
import { format } from "date-fns";

import { useNavigate } from "@tanstack/react-router";

interface ITransactionsList {
  month: number;
  year: number;
  yearsRange: number[];
}

const TransactionsList = ({ month, year, yearsRange }: ITransactionsList) => {
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
    <Card className="mt-4">
      <CardHeader>
        <CardTitle className="flex justify-between">
          <span>{formattedSelectedDate} Transactions</span>
          <MonthYearSelector month={month} year={year} goHandler={goHandler} yearsRange={yearsRange} />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ButtonLink to="/dashboard/transactions/new" text="New Transaction" />
      </CardContent>
    </Card>
  );
};

export default TransactionsList;
