import React, { useState, useContext, useEffect } from "react";
import { Form } from "react-bootstrap";
import { GridContext } from "../Grid";
import { IColumn } from "../Interfaces/GridBody/IColumn";
import "./Filters.scss";

const Filters = (props: any) => {
  const sortContext = useContext(GridContext);
  const [showArrow, setShowArrow] = useState(true);
  const [option, setOption] = useState(0);
  const [remove, setRemove] = useState(false);

  let optionsForStrings = [
    "Contains",
    "Not contains",
    "Starts with",
    "Ends with",
    "Equals",
    "Not equals",
  ];

  let optionsForNumbers = ["Equals", "Not equals", "Less than", "Greater than"];

  const convertOption = (column: IColumn) => {
    var filter = sortContext.filters.find((x) => x.name === column.name);

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

  const handleColumnSorting = (column_name: string) => {
    setShowArrow(false);

    if (sortContext.sort.sort_type === "") {
      sortContext.sort.sort_type = "asc";
      sortContext.sort.field_id = column_name;
    } else if (sortContext.sort.field_id === column_name) {
      sortContext.sort.sort_type =
        sortContext.sort.sort_type === "asc" ? "desc" : "";
    } else {
      sortContext.sort.field_id = column_name;
      sortContext.sort.sort_type = "asc";
    }

    sortContext.setSort(sortContext.sort);
    setShowArrow(true);
  };

  const displayOptions = (options: string[]) =>
    options.map((option, index) => <option key={index}>{option}</option>);

  const displayArrows = (name: string) => (
    <span className="sort-icon-container">
      {sortContext.sort.field_id === name &&
      sortContext.sort.sort_type === "asc" ? (
        <i className="fa fa-arrow-up" aria-hidden="true"></i>
      ) : sortContext.sort.field_id === name &&
        sortContext.sort.sort_type === "desc" ? (
        <i className="fa fa-arrow-down" aria-hidden="true"></i>
      ) : (
        <i className="fa fa-arrow-up" hidden={showArrow}></i>
      )}
    </span>
  );

  const displayDeleteIcon = (column: IColumn) => {
    const findFilter = sortContext.filters.findIndex(
      (filter) => filter.name === column.name
    );
    if (findFilter !== -1) {
      if (remove === false) {
        setRemove(true);
      }
      return <i className="icon-trash icon"></i>;
    }
  };

  const getFieldValue = (header: IColumn) => {
    if (header.name === props.filter.name) {
      return props.filter.value;
    }

    var filter = sortContext.filters.find((x) => x.name === header.name);

    return filter !== undefined ? filter.value : "";
  };

  const handleOnUserInput = (e: any, column: IColumn) => {
    props.update_filter({
      name: column.name,
      size: column.size,
      value: e.target.value,
      type: column.type,
      operator: option,
    });

    if (e.target.value === "") {
      handleDeleteFilter(e, column);
      props.update_filter({
        name: "",
        size: "",
        type: "",
        value: "",
        operator: 0,
      });
    }
  };

  const handleOnOptionChange = (e: any, column: IColumn) => {
    props.update_filter({
      name: column.name,
      size: column.size,
      value: getFieldValue(column),
      type: column.type,
      operator: e.target.selectedIndex,
    });

    setOption(e.target.selectedIndex);
  };

  const handleDeleteFilter = (e: any, column: IColumn) => {
    if (column.value !== "") {
      const newList = sortContext.filters.filter(
        (item) => item.name !== column.name
      );
      sortContext.setFilter(newList);
      props.update_filter({
        name: "",
        size: "",
        type: "",
        value: "",
        operator: 0,
      });
      setRemove(false);
    }
  };

  const handleFilterIcon = (header: IColumn) => {
    return sortContext.filters.map((x, index: number) => {
      return header.name === x.name ? (
        <i key={index} className="icon-column fa fa-filter"></i>
      ) : null;
    });
  };

  const handleFilterCloseOnEnter = (event: any) => {
    if (event.key === "Enter") {
      let visibleDropdowns = document.getElementsByClassName("show");

      Array.from(visibleDropdowns).forEach((dropdown) => {
        sortContext.setToggledColumn({
          name: "",
          size: "",
          type: "",
          value: "",
          operator: 0,
        });
        sortContext.setToggledHeader([]);
      });
    }
  };

  const handleSelectionFilter = (header: IColumn) => {
    let filter = sortContext.selectionFilters.filter(
      (filters) => filters.name === header.name
    )[0];

    let selectionValues = filter.values;

    return selectionValues?.map((value, key) => {
      return (
        <Form.Check
          key={key}
          className="form-check"
          type="checkbox"
          label={value}
          checked={handleFilterDisplay(header, props.selectionFilter, value)}
          onChange={(e: any) => {
            e.stopPropagation();
            handleAddSelectionFilter(header, value, e.target.checked);
          }}
          onKeyPress={(e: any) => {
            if (e.key === "Enter") {
              let activeElement = document.activeElement as HTMLElement;

              if (activeElement !== null) {
                activeElement.click();
              }

              handleAddSelectionFilter(header, value, e.target.checked);
            }
          }}
        ></Form.Check>
      );
    });
  };

  const handleFilterDisplay = (
    header: IColumn,
    selectionFilter: string[],
    currentValue: string
  ) => {
    return selectionFilter.some((x) => x === currentValue);
  };

  const handleAddSelectionFilter = (
    header: IColumn,
    option: string,
    checked: boolean
  ) => {
    if (checked === true) {
      let currentFilters = props.selectionFilter;

      let allFilters = currentFilters.concat(option);

      props.update_selection(allFilters);
    }

    if (checked === false) {
      let currentFilters = props.selectionFilter;

      currentFilters = currentFilters.filter((x: any) => x !== option);

      props.update_selection(currentFilters);
    }
  };

  const handleStandardFilter = (header: IColumn) => {
    return (
      <div>
        <Form.Control
          as="select"
          value={convertOption(header)}
          onChange={(e: any) => {
            handleOnOptionChange(e, header);
          }}
        >
          {handleSelectionOptions(header)}
        </Form.Control>
        <Form.Control
          type={header.type}
          placeholder="Filter..."
          onKeyPress={(e: any) => handleFilterCloseOnEnter(e)}
          onChange={(e: any) => handleOnUserInput(e, header)}
          name={header.name}
          value={getFieldValue(header)}
        />
        <div className="input-icons">
          <div
            tabIndex={remove === true ? 0 : -1}
            onKeyPress={(e: any) => {
              handleDeleteFilter(e, header);
              setOption(0);
            }}
            onClick={(e: any) => {
              handleDeleteFilter(e, header);
              setOption(0);
            }}
          >
            {displayDeleteIcon(header)}
          </div>
        </div>
      </div>
    );
  };

  const handleSelectionOptions = (header: IColumn) => {
    switch (header.type) {
      case "number":
        return displayOptions(optionsForNumbers);
      case "date":
        return displayOptions(optionsForNumbers);
      case undefined:
        return displayOptions(optionsForStrings);
    }
  };

  useEffect(() => {
    document.addEventListener("click", (e: any) => {
      let visibleDropdowns = document.getElementsByClassName("show");

      Array.from(visibleDropdowns).forEach((dropdown) => {
        if (
          !dropdown.contains(e.target) &&
          !e.target.classList.contains("fa") &&
          !e.target.classList.contains("form-control")
        ) {
          sortContext.setToggledColumn({
            name: "",
            size: "",
            type: "",
            value: "",
            operator: 0,
          });
          sortContext.setToggledHeader([]);
        }
      });
    });

    document.addEventListener("keydown", (e: any) => {
      if (e.key === "Escape") {
        let visibleDropdowns = document.getElementsByClassName("show");

        Array.from(visibleDropdowns).forEach((dropdown) => {
          sortContext.setToggledColumn({
            name: "",
            size: "",
            type: "",
            value: "",
            operator: 0,
          });
          sortContext.setToggledHeader([]);
        });
      }
    });

    document.addEventListener("keyup", (e: any) => {
      if (e.key === "Tab") {
        let ddown = document.querySelector(".show");

        if (!ddown?.contains(e.target)) {
          let visibleDropdowns = document.getElementsByClassName("show");

          Array.from(visibleDropdowns).forEach((dropdown) => {
            sortContext.setToggledColumn({
              name: "",
              size: "",
              type: "",
              value: "",
              operator: 0,
            });
            sortContext.setToggledHeader([]);
          });
        }
      }
    });
  }, [props, sortContext]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const checkCurrentFilters = () => {
        return !sortContext.filters.some(
          (x) =>
            x.name === props.filter.name &&
            x.size === props.filter.size &&
            x.type === props.filter.type &&
            x.value === props.filter.value &&
            x.operator === props.filter.operator
        );
      };
      if (
        props.filter.value !== undefined &&
        props.filter.value !== "" &&
        checkCurrentFilters()
      ) {
        const handleAddFilter = () => {
          let all_filters = new Array<IColumn>();
          let res = sortContext.filters.filter(
            (x) => x.name !== props.filter.name
          );
          if (res.length > 0) {
            all_filters = all_filters.concat(res);
          }

          all_filters = all_filters.concat({
            name: props.filter.name,
            size: props.filter.size,
            value: props.filter.value,
            type: props.filter.type,
            operator: props.filter.operator,
          });

          sortContext.setFilter(all_filters);
        };

        handleAddFilter();
      }
    }, 1000);
    return () => clearTimeout(timeout);
  }, [props, sortContext]);

  return (
    <div className={"filter-container"}>
      {props.columns.map((header: IColumn, index: number) => (
        <div className="single-filter-wrapper" key={index}>
          <div className="filter">
            <div id="header">
              <div
                className="column-name"
                tabIndex={0}
                onKeyPress={() => handleColumnSorting(header.name)}
                onClick={() => {
                  handleColumnSorting(header.name);
                }}
              >
                {displayArrows(header.name)}
                <p style={{ margin: "0px" }}>{header.name}</p>
                <span>{handleFilterIcon(header)}</span>
              </div>
            </div>
            {header.type === "select" ? handleSelectionFilter(header) : ""}
            {header.type !== "select" ? handleStandardFilter(header) : ""}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Filters;
