import React from "react";
import { useContext, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { ColumnCollapsable } from "../CustomTypes/ColumnCollapsable";
import { ColumnSizes } from "../CustomTypes/ColumnSizes";
import { MinimumVisibility } from "../CustomTypes/ColumnVisibility";
import { GridContext } from "../Grid";
import { IColumn } from "../Interfaces/GridBody/IColumn";
import { IFilter } from "../Interfaces/GridTools/IFilter";

const StandardFilter = (props: any) => {
  let optionsForStrings = [
    "Contains",
    "Not contains",
    "Starts with",
    "Ends with",
    "Equals",
    "Not equals",
  ];

  let optionsForNumbers = ["Equals", "Not equals", "Less than", "Greater than"];

  const gridContext = useContext(GridContext);
  const [option, setOption] = useState(0);
  const [remove, setRemove] = useState(false);

  const convertOption = (column: IColumn) => {
    var filter = gridContext.filters.find((x) => x.name === column.name);

    if (filter === undefined) {
      switch (column.type) {
        case "number":
          return optionsForNumbers[option];
        default:
          return optionsForStrings[option];
      }
    } else {
      switch (column.type) {
        case "number":
          return optionsForNumbers[
            filter.operator === undefined ? 0 : filter.operator
          ];
        default:
          return optionsForStrings[
            filter.operator === undefined ? 0 : filter.operator
          ];
      }
    }
  };

  const displayDeleteIcon = (column: IColumn) => {
    const findFilter = gridContext.filters.findIndex(
      (filter) => filter.name === column.name
    );
    if (findFilter !== -1) {
      if (remove === false) {
        setRemove(true);
      }
      return <i className="icon-trash icon"></i>;
    }
  };

  const displayOptions = (options: string[]) =>
    options.map((option, index) => <option key={index}>{option}</option>);

  const handleOnOptionChange = (e: any, column: IColumn) => {
    gridContext.setActiveFilter({
      name: column.name,
      values: getFieldValue(column) as string[],
      type: column.type,
      operator: e.target.selectedIndex,
    });

    setOption(e.target.selectedIndex);
  };

  const getFieldValue = (header: IColumn) => {
    if (header.name === gridContext.activeFilter.name) {
      return gridContext.activeFilter.values;
    }
    var filter = gridContext.filters.find((x) => x.name === header.name);

    return filter !== undefined ? filter.values : "";
  };

  const selectionOptions = (header: IColumn) => {
    switch (header.type) {
      case "number":
        return displayOptions(optionsForNumbers);
      case "date":
        return displayOptions(optionsForNumbers);
      case undefined:
      case "text":
        return displayOptions(optionsForStrings);
    }
  };

  const deleteFilter = (e: any, column: IColumn) => {
    const newList = gridContext.filters.filter(
      (item) => item.name !== column.name
    );

    gridContext.setFilter(newList);

    gridContext.setActiveFilter({
      name: "",
      values: [],
      type: "",
      operator: 0,
    });

    setRemove(false);
  };

  const closeFilterOnEnter = (event: any) => {
    if (event.key === "Enter") {
      let visibleDropdowns = document.getElementsByClassName("show");

      Array.from(visibleDropdowns).forEach((dropdown) => {
        gridContext.setToggledColumn({
          name: "",
          size: ColumnSizes.StandardColumn,
          type: "",
          minVisibility: MinimumVisibility.SmallVisible,
          collapsable: ColumnCollapsable.collapsable,
        });
        gridContext.setToggledHeader([]);
      });
    }
  };

  const handleUserInput = (e: any, column: IColumn) => {
    gridContext.setActiveFilter({
      name: column.name,
      values: e.target.value,
      type: column.type,
      operator: option,
    });

    if (e.target.value === "") {
      deleteFilter(e, column);

      gridContext.setActiveFilter({
        name: "",
        values: [],
        type: "",
        operator: 0,
      });
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      const checkCurrentFilters = () => {
        return !gridContext.filters.some(
          (x) =>
            x.name === gridContext.activeFilter.name &&
            x.type === gridContext.activeFilter.type &&
            x.values === gridContext.activeFilter.values &&
            x.operator === gridContext.activeFilter.operator
        );
      };
      if (
        gridContext.activeFilter.values[0] !== undefined &&
        gridContext.activeFilter.values[0] !== [] &&
        checkCurrentFilters()
      ) {
        const handleAddFilter = () => {
          let all_filters = new Array<IFilter>();
          let res = gridContext.filters.filter(
            (x) => x.name !== gridContext.activeFilter.name
          );
          if (res.length > 0) {
            all_filters = all_filters.concat(res);
          }

          all_filters = all_filters.concat({
            name: gridContext.activeFilter.name,
            type: gridContext.activeFilter.type,
            values: gridContext.activeFilter.values,
            operator: gridContext.activeFilter.operator,
          });

          gridContext.setFilter(all_filters);
        };

        handleAddFilter();
      }
    }, 1000);
    return () => clearTimeout(timeout);
  }, [gridContext]);

  return (
    <>
      <Form.Control
        as="select"
        value={convertOption(props.header)}
        onChange={(e: any) => {
          handleOnOptionChange(e, props.header);
        }}
      >
        {selectionOptions(props.header)}
      </Form.Control>
      <Form.Control
        type={props.header.type}
        placeholder="Filter..."
        onKeyPress={(e: any) => closeFilterOnEnter(e)}
        onChange={(e: any) => handleUserInput(e, props.header)}
        name={props.header.name}
        value={getFieldValue(props.header)}
      />
      <div className="input-icons">
        <div
          className="delete-icon"
          tabIndex={remove === true ? 0 : -1}
          onKeyPress={(e: any) => {
            deleteFilter(e, props.header);
            setOption(0);
          }}
          onClick={(e: any) => {
            deleteFilter(e, props.header);
            setOption(0);
          }}
        >
          {displayDeleteIcon(props.header)}
        </div>
      </div>
    </>
  );
};

export default StandardFilter;
