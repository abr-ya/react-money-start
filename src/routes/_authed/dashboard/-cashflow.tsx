import { PageWithTable } from "@/components";
import { SimpleSelect } from "@/components/common/simple-select";
import { IMonthlyCashflow } from "@/interfaces/period.interface";
import { useNavigate } from "@tanstack/react-router";

interface ICashflow {
  data: IMonthlyCashflow[];
  year: string;
  yearsRange: number[];
}

export const Cashflow = ({ data, yearsRange, year }: ICashflow) => {
  const navigate = useNavigate();

  const yearSelectHandler = (year: string) => {
    navigate({
      to: "/dashboard",
      search: { year: Number(year) },
    });
  };

  return (
    <PageWithTable
      title="Cashflow"
      headerRight={
        <SimpleSelect
          options={yearsRange.map((year) => ({ value: year.toString(), label: year.toString() }))}
          onSelect={yearSelectHandler}
          value={year}
        />
      }
    >
      <ul>
        {data.map((item) => (
          <li key={item.month}>
            Month: {item.month}, Income: {item.income}, Expenses: {item.expenses}
          </li>
        ))}
      </ul>
    </PageWithTable>
  );
};
