import { Card, CardContent, CardHeader, CardTitle, MonthYearSelector } from "@/components";
import { IPeriod } from "@/interfaces/period.interface";
import { format } from "date-fns";

interface ITransactionsList {
  month: number;
  year: number;
}

const TransactionsList = ({ month, year }: ITransactionsList) => {
  const formattedSelectedDate = format(new Date(year, month - 1, 1), "MMM yyyy");

  const goHandler = (period: IPeriod) => {
    console.log("GO HANDLER: ", period);
  };

  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle className="flex justify-between">
          <span>{formattedSelectedDate} Transactions</span>
          <MonthYearSelector month={month} year={year} goHandler={goHandler} />
        </CardTitle>
      </CardHeader>
      <CardContent>CardContent</CardContent>
    </Card>
  );
};

export default TransactionsList;
