import React, { useState } from "react";
import { Form } from "react-bootstrap";
import DatePicker from "react-date-picker";

const DateFilter = (props: any) => {
  const [option, setOption] = useState(0);
  const [firstDate, setFirstDate] = useState<Date | null>(null);
  const [secondDate, setSecondDate] = useState<Date | null>(null);

  const ConvertOption = (option: number) => {
    return optionsForDate[option];
  };

  let optionsForDate = ["Equals", "After", "Before", "Not Equals", "Between"];

  const displayOptions = (options: string[]) =>
    options.map((option, index) => <option key={index}>{option}</option>);

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
      <DatePicker
        value={firstDate}
        onChange={(value) =>
          setFirstDate(value !== null ? new Date(value.toString()) : null)
        }
        clearIcon={
          firstDate === null ? null : (
            <i className="fa fa-window-close" aria-hidden="true"></i>
          )
        }
      />
      <DatePicker
        className={option === 4 ? "date-filter-display" : "date-filter-hide"}
        value={secondDate}
        onChange={(value) =>
          setSecondDate(value !== null ? new Date(value.toString()) : null)
        }
        clearIcon={
          secondDate === null ? null : (
            <i className="fa fa-window-close" aria-hidden="true"></i>
          )
        }
      />
    </div>
  );
};

export default DateFilter;
