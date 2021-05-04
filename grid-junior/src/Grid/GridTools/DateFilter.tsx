import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { GridContext } from "../Grid";
import DatePicker from "./DatePicker";

const DateFilter = (props: any) => {
  const [option, setOption] = useState(0);
  const [firstDate, setFirstDate] = useState<Date | undefined>(undefined);
  const [secondDate, setSecondDate] = useState<Date | undefined>(undefined);

  const gridContext = useContext(GridContext);

  const ConvertOption = (option: number) => {
    return optionsForDate[option];
  };

  let optionsForDate = ["Equals", "After", "Before", "Not Equals", "Between"];

  const displayOptions = (options: string[]) =>
    options.map((option, index) => <option key={index}>{option}</option>);

  const handleUserInputDate = (newDate: Date | null) => {
    newDate?.setHours(0, 0, 0, 0);
    if (newDate !== null) {
      setFirstDate(newDate);
      gridContext.setFilter([
        {
          name: props.header.name,
          type: "date",
          value: [newDate],
          operator: option,
        },
      ]);
    }

    if (newDate === null) {
      setFirstDate(undefined);
      gridContext.setFilter([]);

      if (option !== 4) {
        setOption(0);
      }
    }
  };

  return (
    <div className="date-filter-containers">
      <Form.Control
        as="select"
        value={ConvertOption(option)}
        onChange={(e: any) => {
          setOption(e.target.selectedIndex);
        }}
      >
        {displayOptions(optionsForDate)}
      </Form.Control>
      <div className="date-filter-display">
        <DatePicker
          firstDate={firstDate}
          handleUserInputDate={handleUserInputDate}
        />
      </div>
      <div
        className={option === 4 ? "date-filter-display" : "date-filter-hide"}
      >
        <DatePicker
          firstDate={secondDate}
          handleUserInputDate={handleUserInputDate}
        />
      </div>
    </div>
  );
};

export default DateFilter;
