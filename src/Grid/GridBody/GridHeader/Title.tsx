import React from "react";
import StyledTitle from "./StyledTitle";
import Dropdown from "react-bootstrap/Dropdown";
import { ITitle } from "../../Interfaces/GridBody/ITitle";
import Filters from "../../GridTools/Filters";
import { GridContext } from "../../Grid";
import "font-awesome/css/font-awesome.min.css";
import { IColumn } from "../../Interfaces/GridBody/IColumn";
import { ISortStats } from "../../Interfaces/GridBody/ISortStats";
import { IFilter } from "../../Interfaces/GridTools/IFilter";

function handleSortIcon(sort: ISortStats, columns: IColumn[]) {
  let currentSort = null;

  columns.forEach((x) => {
    if (x.name === sort.field_id && sort.sort_type === "asc") {
      currentSort = (
        <i className="sort-icon-title fa fa-arrow-up" aria-hidden="true" />
      );
    } else if (x.name === sort.field_id && sort.sort_type === "desc") {
      currentSort = (
        <i className="sort-icon-title fa fa-arrow-down" aria-hidden="true" />
      );
    }
  });

  if (currentSort === null) {
    currentSort = (
      <i className="sort-icon-title fa fa-arrow-down hidden-icon" />
    );
  }

  return currentSort;
}

function handleFilterIcon(filter: IFilter[], columns: IColumn[]) {
  let currentFilter = null;

  columns.forEach((column) => {
    filter.forEach((filter) => {
      if (filter !== undefined && column.name === filter.name) {
        currentFilter = (
          <i
            tabIndex={0}
            className="fa fa-filter filter-icon"
            aria-hidden="true"
          />
        );
      }
    });
  });

  if (currentFilter === null) {
    currentFilter = (
      <i
        tabIndex={0}
        className="fa fa-filter filter-icon-hoverable"
        aria-hidden="true"
      />
    );
  }

  return currentFilter;
}

function Title(props: ITitle) {
  return (
    <StyledTitle>
      <GridContext.Consumer>
        {(value) => (
          <Dropdown className="title-container">
            <div className="title">
              <div
                className="title-bar"
                onClick={() => {
                  if (props.columns === value.toggledHeader) {
                    value.setToggledHeader([]);
                  } else {
                    value.setToggledHeader(props.columns);
                  }
                }}
                onKeyPress={() => {
                  if (props.columns === value.toggledHeader) {
                    value.setToggledHeader([]);
                  } else {
                    value.setToggledHeader(props.columns);
                  }
                }}
              >
                {handleSortIcon(value.sort, props.columns)}
                <p>{props.title}</p>
                {handleFilterIcon(value.filters, props.columns)}
              </div>
            </div>
            <div
              className={`title-dropdown ${
                props.columns === value.toggledHeader ? "show" : ""
              }`}
            >
              <div style={{ backgroundColor: "white", borderRadius: 5 }}>
                {props.columns.map((x: IColumn, y: number) => {
                  return <Filters key={y} columns={[x]} />;
                })}
              </div>
            </div>
          </Dropdown>
        )}
      </GridContext.Consumer>
    </StyledTitle>
  );
}

export default Title;
