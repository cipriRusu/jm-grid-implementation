import { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { GridContext } from "../Grid";
import { IColumn } from "../Interfaces/GridBody/IColumn";

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
      value: getFieldValue(column),
      type: column.type,
      operator: e.target.selectedIndex,
    });

    setOption(e.target.selectedIndex);
  };

  const getFieldValue = (header: IColumn) => {
    if (header.name === gridContext.activeFilter.name) {
      return gridContext.activeFilter.value;
    }
    var filter = gridContext.filters.find((x) => x.name === header.name);

    return filter !== undefined ? filter.value : "";
  };

  const selectionOptions = (header: IColumn) => {
    switch (header.type) {
      case "number":
        return displayOptions(optionsForNumbers);
      case "date":
        return displayOptions(optionsForNumbers);
      case undefined:
        return displayOptions(optionsForStrings);
    }
  };

  const deleteFilter = (e: any, column: IColumn) => {
    if (column.value !== "") {
      const newList = gridContext.filters.filter(
        (item) => item.name !== column.name
      );
      gridContext.setFilter(newList);

      gridContext.setActiveFilter({
        name: "",
        value: "",
        type: "",
        operator: 0,
        selection: [],
      });

      setRemove(false);
    }
  };

  const closeFilterOnEnter = (event: any) => {
    if (event.key === "Enter") {
      let visibleDropdowns = document.getElementsByClassName("show");

      Array.from(visibleDropdowns).forEach((dropdown) => {
        gridContext.setToggledColumn({
          name: "",
          size: "",
          type: "",
          value: "",
          operator: 0,
        });
        gridContext.setToggledHeader([]);
      });
    }
  };

  const handleUserInput = (e: any, column: IColumn) => {
    gridContext.setActiveFilter({
      name: column.name,
      value: e.target.value,
      type: column.type,
      operator: option,
      selection: [],
    });

    if (e.target.value === "") {
      deleteFilter(e, column);

      gridContext.setActiveFilter({
        name: "",
        value: "",
        type: "",
        operator: 0,
      });
    }
  };

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
