import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { GridContext } from "../Grid";
import DatePicker from "./DatePicker";
import "./DateFilter.scss";
import { IFilter } from "../Interfaces/GridTools/IFilter";

const DateFilter = (props: any) => {
  const [option, setOption] = useState(0);
  const [firstDate, setFirstDate] = useState<Date | undefined>(undefined);
  const [secondDate, setSecondDate] = useState<Date | undefined>(undefined);

  const gridContext = useContext(GridContext);

  let optionsForDate = ["Equals", "After", "Before", "Not Equals", "Between"];

  const addNewFilter = (newDate: Date | null) => {
    let allFilters = gridContext.filters.filter((x: IFilter) => {
      return x.name !== props.header.name;
    });

    let newFilter = {
      name: props.header.name,
      type: "date",
      values: [newDate],
      operator: option,
    };

    allFilters = allFilters.concat(newFilter);

    gridContext.setFilter(allFilters);
  };

  const convertOption = (option: number) => {
    return optionsForDate[option];
  };

  const displayOptions = (options: string[]) =>
    options.map((option, index) => <option key={index}>{option}</option>);

  const handleDateChange = (newDate: Date | null, id: string) => {
    if (newDate !== null) {
      setFieldById(id, newDate);

      if (option !== 4) {
        addNewFilter(newDate);
      }
    }

    if (newDate === null) {
      setFieldById(id, undefined);
      removeFilter();

      if (option !== 4) {
        setOption(0);
      }
    }
  };

  const removeFilter = () => {
    gridContext.setFilter(
      gridContext.filters.filter((x: IFilter) => {
        return x.name !== props.header.name;
      })
    );
  };

  const setFieldById = (id: string, date: Date | undefined) => {
    switch (id) {
      case "first-date":
        setFirstDate(date);
        break;
      case "second-date":
        setSecondDate(date);
        break;
    }
  };

  return (
    <div className="date-filter">
      <Form.Control
        as="select"
        value={convertOption(option)}
        onChange={(e: any) => {
          setOption(e.target.selectedIndex);
          setFirstDate(undefined);
          setSecondDate(undefined);
          removeFilter();
        }}
      >
        {displayOptions(optionsForDate)}
      </Form.Control>
      <div className="date-filter-display">
        <DatePicker
          id="first-date"
          date={firstDate}
          handleUserInputDate={handleDateChange}
        />
      </div>
      <div
        className={option === 4 ? "date-filter-display" : "date-filter-hide"}
      >
        <DatePicker
          id="second-date"
          date={secondDate}
          handleUserInputDate={handleDateChange}
        />
      </div>
    </div>
  );
};

export default DateFilter;
