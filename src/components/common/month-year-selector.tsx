import { IPeriod } from "@/interfaces/period.interface";

interface IMonthYearSelector extends IPeriod {
  goHandler?: (period: IPeriod) => void;
}

const MonthYearSelector = ({ month, year }: IMonthYearSelector) => {
  // const [selectedMonth, setSelectedMonth] = useState(month);
  // const [selectedYear, setSelectedYear] = useState(year);
  console.log(month, year);

  return <div>MonthYearSelector</div>;
};

export default MonthYearSelector;
