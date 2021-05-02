import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import { Form } from "react-bootstrap";
import { GridContext } from "../Grid";

import "react-datepicker/dist/react-datepicker.css";

const DateFilter = (props: any) => {
  const [option, setOption] = useState(0);
  const [firstDate, setFirstDate] = useState<Date | null>(null);
  const [secondDate, setSecondDate] = useState<Date | null>(null);
  const gridContext = useContext(GridContext);

  const ConvertOption = (option: number) => {
    return optionsForDate[option];
  };

  let optionsForDate = ["Equals", "After", "Before", "Not Equals", "Between"];

  const displayOptions = (options: string[]) =>
    options.map((option, index) => <option key={index}>{option}</option>);

  const handleUserInputDate = (newDate: Date | Date[] | null) => {
    if (newDate !== null) {
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
      gridContext.setFilter([]);
      setOption(0);
    }

    setFirstDate(newDate !== null ? new Date(newDate.toString()) : null);
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
          popperPlacement="bottom-end"
          selected={firstDate}
          onChange={(value) => handleUserInputDate(value)}
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          isClearable={true}
          shouldCloseOnSelect={false}
          tabIndex={0}
        ></DatePicker>
      </div>

      <div
        className={option === 4 ? "date-filter-display" : "date-filter-hide"}
      >
        <DatePicker
          popperPlacement="bottom-end"
          selected={secondDate}
          onChange={(value) =>
            setSecondDate(value !== null ? new Date(value.toString()) : null)
          }
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          isClearable={true}
          shouldCloseOnSelect={false}
          tabIndex={0}
        ></DatePicker>
      </div>
    </div>
  );
};

export default DateFilter;
