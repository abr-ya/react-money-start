import { useState } from "react";
import { format } from "date-fns";

import { IPeriod } from "@/interfaces/period.interface";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "..";

interface IMonthYearSelector extends IPeriod {
  goHandler?: (period: IPeriod) => void;
}

const MonthYearSelector = ({ month, year, goHandler }: IMonthYearSelector) => {
  const [selectedMonth, setSelectedMonth] = useState(month);
  const [selectedYear, setSelectedYear] = useState(year);
  const selectedDate = new Date(year, month - 1, 1);

  const yearsRange = Array.from({ length: 5 }, (_, i) => new Date().getFullYear() - i);
  const handleGo = () => {
    if (goHandler) {
      goHandler({ month: selectedMonth, year: selectedYear });
    } else {
      console.log("No goHandler provided");
    }
  };

  return (
    <div className="flex gap-1">
      <Select value={selectedMonth.toString()} onValueChange={(value) => setSelectedMonth(Number(value))}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {Array.from({ length: 12 }).map((_, i) => (
            <SelectItem key={i} value={`${i + 1}`}>
              {format(new Date(selectedDate.getFullYear(), i, 1), "MMM")}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select value={selectedYear.toString()} onValueChange={(value) => setSelectedYear(Number(value))}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {yearsRange.map((year) => (
            <SelectItem value={year.toString()} key={year}>
              {year}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button onClick={handleGo}>Go</Button>
    </div>
  );
};

export default MonthYearSelector;
