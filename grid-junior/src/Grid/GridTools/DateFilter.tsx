import React, { useContext, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { GridContext } from "../Main";
import DatePicker from "./DatePicker";
import "./DateFilter.scss";
import { IFilter } from "../Interfaces/GridTools/IFilter";

enum DateOptions {
  "Equals",
  "After",
  "Before",
  "Not Equals",
  "Between",
}

const DateFilter = (props: any) => {
  const [option, setOption] = useState(0);
  const [firstDate, setFirstDate] = useState<Date | undefined>(undefined);
  const [secondDate, setSecondDate] = useState<Date | undefined>(undefined);

  const gridContext = useContext(GridContext);

  let optionsForDate = ["Equals", "After", "Before", "Not Equals", "Between"];

  const addNewFilter = (newDate: Date | null) => {
    let updatedFilters = getAllFiltersExceptCurrent(gridContext.filters);
    updatedFilters = updatedFilters.concat(createNewFilter(newDate));
    gridContext.setFilter(updatedFilters);
  };

  const convertOption = (option: number) => {
    return DateOptions[option];
  };

  const createNewFilter = (newDate: Date | null) => {
    return {
      name: props.header.name,
      type: "date",
      values: [newDate],
      operator: option,
    };
  };

  const displayOptions = (options: string[]) =>
    options.map((option, index) => <option key={index}>{option}</option>);

  const getAllFiltersExceptCurrent = (allFilters: IFilter[]) => {
    return allFilters.filter((x: IFilter) => {
      return x.name !== props.header.name;
    });
  };

  const handleDateChange = (newDate: Date | null, id: string) => {
    if (newDate !== null) {
      setFieldById(id, newDate);

      if (option !== DateOptions.Between) {
        addNewFilter(newDate);
      }
    }

    if (newDate === null) {
      setFieldById(id, undefined);

      if (option !== DateOptions.Between) {
        removeFilter();
        setOption(0);
      } else {
        let updatedFilters = getAllFiltersExceptCurrent(gridContext.filters);
        gridContext.setFilter(updatedFilters);
      }
    }
  };

  const removeFilter = () => {
    gridContext.setFilter(getAllFiltersExceptCurrent(gridContext.filters));
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

  useEffect(() => {
    if (firstDate !== undefined && secondDate !== undefined) {
      let newFilter = {
        name: props.header.name,
        type: "date",
        values: [firstDate, secondDate],
        operator: option,
      };

      let allFilters = gridContext.filters.filter((x: IFilter) => {
        return x.name !== props.header.name;
      });

      allFilters = allFilters.concat(newFilter);

      gridContext.setFilter(allFilters);
    }
    // eslint-disable-next-line
  }, [
    firstDate,
    secondDate,
    option,
    props.header.name,
    setFirstDate,
    setSecondDate,
  ]);

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
        className={
          option === DateOptions.Between
            ? "date-filter-display"
            : "date-filter-hide"
        }
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
