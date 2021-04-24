import "./Filters.scss";
import React, { useState, useContext, useEffect } from "react";
import { GridContext } from "../Grid";
import { IColumn } from "../Interfaces/GridBody/IColumn";
import { IFilter } from "../Interfaces/GridTools/IFilter";
import SelectionFilter from "./SelectionFilter";
import StandardFilter from "./StandardFilter";

const Filters = (props: any) => {
  const sortContext = useContext(GridContext);
  const [showArrow, setShowArrow] = useState(true);

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

  const handleFilterIcon = (header: IColumn) => {
    return sortContext.filters.map((x, index: number) => {
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
            x.name === sortContext.activeFilter.name &&
            x.type === sortContext.activeFilter.type &&
            x.value === sortContext.activeFilter.value &&
            x.operator === sortContext.activeFilter.operator &&
            x.selection === sortContext.activeFilter.selection
        );
      };
      if (
        sortContext.activeFilter.value !== undefined &&
        sortContext.activeFilter.value !== "" &&
        checkCurrentFilters()
      ) {
        const handleAddFilter = () => {
          let all_filters = new Array<IFilter>();
          let res = sortContext.filters.filter(
            (x) => x.name !== sortContext.activeFilter.name
          );
          if (res.length > 0) {
            all_filters = all_filters.concat(res);
          }

          all_filters = all_filters.concat({
            name: sortContext.activeFilter.name,
            value: sortContext.activeFilter.value,
            type: sortContext.activeFilter.type,
            operator: sortContext.activeFilter.operator,
            selection: [],
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
