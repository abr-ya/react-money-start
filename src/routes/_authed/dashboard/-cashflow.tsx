import { PageWithTable } from "@/components";
import { IMonthlyCashflow } from "@/interfaces/period.interface";

interface ICashflow {
  data: IMonthlyCashflow[];
}

export const Cashflow = ({ data }: ICashflow) => (
  <PageWithTable title="Cashflow">
    <ul>
      {data.map((item) => (
        <li key={item.month}>
          Month: {item.month}, Income: {item.income}, Expenses: {item.expenses}
        </li>
      ))}
    </ul>
  </PageWithTable>
);
