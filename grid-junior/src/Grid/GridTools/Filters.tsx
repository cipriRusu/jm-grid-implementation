import "./Filters.scss";
import React, { useState, useContext, useEffect } from "react";
import { GridContext } from "../Grid";
import { IColumn } from "../Interfaces/GridBody/IColumn";
import SelectionFilter from "./SelectionFilter";
import StandardFilter from "./StandardFilter";

const Filters = (props: any) => {
  const gridContext = useContext(GridContext);
  const [showArrow, setShowArrow] = useState(true);

  const handleColumnSorting = (column_name: string) => {
    setShowArrow(false);

    if (gridContext.sort.sort_type === "") {
      gridContext.sort.sort_type = "asc";
      gridContext.sort.field_id = column_name;
    } else if (gridContext.sort.field_id === column_name) {
      gridContext.sort.sort_type =
        gridContext.sort.sort_type === "asc" ? "desc" : "";
    } else {
      gridContext.sort.field_id = column_name;
      gridContext.sort.sort_type = "asc";
    }

    gridContext.setSort(gridContext.sort);
    setShowArrow(true);
  };

  const displayArrows = (name: string) => (
    <span className="sort-icon-container">
      {gridContext.sort.field_id === name &&
      gridContext.sort.sort_type === "asc" ? (
        <i className="fa fa-arrow-up" aria-hidden="true"></i>
      ) : gridContext.sort.field_id === name &&
        gridContext.sort.sort_type === "desc" ? (
        <i className="fa fa-arrow-down" aria-hidden="true"></i>
      ) : (
        <i className="fa fa-arrow-up" hidden={showArrow}></i>
      )}
    </span>
  );

  const handleFilterIcon = (header: IColumn) => {
    return gridContext.filters.map((x, index: number) => {
      return header.name === x.name ? (
        <i key={index} className="icon-column fa fa-filter"></i>
      ) : null;
    });
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
          gridContext.setToggledColumn({
            name: "",
            size: "",
            type: "",
            value: "",
            operator: 0,
          });
          gridContext.setToggledHeader([]);
        }
      });
    });

    document.addEventListener("keydown", (e: any) => {
      if (e.key === "Escape") {
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
    });

    document.addEventListener("keyup", (e: any) => {
      if (e.key === "Tab") {
        let ddown = document.querySelector(".show");

        if (!ddown?.contains(e.target)) {
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
      }
    });
  }, [props, gridContext]);

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
            {header.type === "select" ? (
              <SelectionFilter header={header} />
            ) : (
              ""
            )}
            {header.type === undefined ? (
              <StandardFilter header={header} />
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Filters;
