import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { GridContext } from "../Grid";
import DatePicker from "./DatePicker";
import { IFilter } from "../Interfaces/GridTools/IFilter";
import StyledDateFilter from "./StyledDateFilter";

enum DateOptions {
  "Equals",
  "After",
  "Before",
  "Not Equals",
  "Between",
}

const DateFilter = (props: any) => {
  const gridContext = useContext(GridContext);

  const getCurrentFilter = () => {
    return gridContext.filters.filter((x: IFilter) => {
      return props.header.name === x.name;
    })[0];
  };

  const [option, setOption] = useState(
    getCurrentFilter() !== undefined ? getCurrentFilter().operator : 0
  );

  let optionsForDate = ["Equals", "After", "Before", "Not Equals", "Between"];

  const addNewFilter = (newDate: Date | null) => {
    let updatedFilters = getAllFiltersExceptCurrent(gridContext.filters);
    updatedFilters = updatedFilters.concat(createNewFilter(newDate));
    gridContext.setFilter(updatedFilters);
  };

  const updateExistingFilter = (newDate: Date | null, id: string) => {
    let currentFilter = getCurrentFilter();
    let updatedFilters = getAllFiltersExceptCurrent(gridContext.filters);

    if (newDate === null) {
      currentFilter.values.pop();
      updatedFilters = updatedFilters.concat(currentFilter);
      gridContext.setFilter(updatedFilters);
    } else {
      if (currentFilter.operator !== DateOptions.Between) {
        let allFilters = getAllFiltersExceptCurrent(gridContext.filters);
        allFilters.push(createNewFilter(newDate));
        gridContext.setFilter(allFilters);
      }

      if (currentFilter.operator === DateOptions.Between) {
        if (currentFilter.values.length > 1) {
          if (id === "first-date") {
            currentFilter.values.shift();
            currentFilter.values.unshift(newDate);
          }

          if (id === "second-date") {
            currentFilter.values.pop();
            currentFilter.values.push(newDate);
          }
        } else {
          if (id === "first-date") {
            currentFilter.values.pop();
            currentFilter.values.push(newDate);
          }

          if (id === "second-date") {
            currentFilter.values.push(newDate);
          }
        }

        updatedFilters = updatedFilters.concat(currentFilter);
        gridContext.setFilter(updatedFilters);
      }
    }
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

  const getDateValue = (id: string) => {
    let currentFilter = getCurrentFilter();

    if (id === "first-date") {
      return currentFilter !== undefined && currentFilter !== undefined
        ? (currentFilter.values[0] as Date)
        : undefined;
    }

    if (id === "second-date") {
      return currentFilter !== undefined && currentFilter !== undefined
        ? (currentFilter.values[1] as Date)
        : undefined;
    }
  };

  const getOption = () => {
    let currentFilter = getCurrentFilter();

    return currentFilter !== undefined && currentFilter !== undefined
      ? currentFilter.operator
      : option;
  };

  const isDateInterval = () => {
    let currentFilter = getCurrentFilter();

    return currentFilter !== undefined &&
      currentFilter.operator === DateOptions.Between
      ? true
      : false;
  };

  const removeCurrentFilter = () => {
    gridContext.setFilter(getAllFiltersExceptCurrent(gridContext.filters));
  };

  const handleDateChange = (newDate: Date | null, id: string) => {
    let currentFilter = getCurrentFilter();

    if (newDate !== null) {
      if (option !== DateOptions.Between && currentFilter === undefined) {
        addNewFilter(newDate);
      }

      if (option !== DateOptions.Between && currentFilter !== undefined) {
        updateExistingFilter(newDate, id);
      }

      if (option === DateOptions.Between && currentFilter === undefined) {
        addNewFilter(newDate);
      }

      if (option === DateOptions.Between && currentFilter !== undefined) {
        updateExistingFilter(newDate, id);
      }
    }

    if (newDate === null) {
      switch (id) {
        case "first-date":
          setOption(0);
          removeCurrentFilter();
          break;
        case "second-date":
          updateExistingFilter(null, id);
          break;
      }
    }
  };

  return (
    <StyledDateFilter>
      <div className="date-filter">
        <Form.Control
          as="select"
          value={convertOption(getOption())}
          onChange={(e: any) => {
            setOption(e.target.selectedIndex);
            removeCurrentFilter();
          }}
        >
          {displayOptions(optionsForDate)}
        </Form.Control>
        <div className="date-filter-display">
          <DatePicker
            id="first-date"
            date={getDateValue("first-date")}
            handleUserInputDate={handleDateChange}
          />
        </div>
        <div
          className={
            isDateInterval() ? "date-filter-display" : "date-filter-hide"
          }
        >
          <DatePicker
            id="second-date"
            date={getDateValue("second-date")}
            handleUserInputDate={handleDateChange}
          />
        </div>
      </div>
    </StyledDateFilter>
  );
};

export default DateFilter;
