import { Card, CardContent, CardHeader, CardTitle, MonthYearSelector } from "@/components";
import { format } from "date-fns";

interface ITransactionsList {
  month: number;
  year: number;
}

const TransactionsList = ({ month, year }: ITransactionsList) => {
  const selectedDate = new Date(year, month - 1, 1);

  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle className="flex justify-between">
          <span>{format(selectedDate, "MMM yyyy")} Transactions</span>
          <div className="flex gap-1">
            <MonthYearSelector month={month} year={year} />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>CardContent</CardContent>
    </Card>
  );
};

export default TransactionsList;
