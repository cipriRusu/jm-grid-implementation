import React from "react";
import "./Column.scss";
import "font-awesome/css/font-awesome.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import { IColumn } from "../../Interfaces/GridBody/IColumn";
import { GridContext } from "../../Grid";
import Filters from "../../GridTools/Filters";
import { IFilter } from "../../Interfaces/GridTools/IFilter";

class Column extends React.Component<IColumn, IColumn> {
  constructor(props: IColumn) {
    super(props);
    this.state = {
      name: this.props.name,
      size: this.props.size,
      value: this.props.value,
      type: this.props.type,
      operator: this.props.operator,
      toggled: this.props.toggled,
    };
  }

  handleColumnSorting(value: any) {
    if (value.sort.sort_type === "") {
      value.sort.sort_type = "asc";
      value.sort.field_id = this.props.name;
    } else if (value.sort.field_id === this.props.name) {
      value.sort.sort_type = value.sort.sort_type === "asc" ? "desc" : "";
    } else {
      value.sort.field_id = this.props.name;
      value.sort.sort_type = "asc";
    }

    if (value.sort.sort_type === "") {
      value.sort.field_id = "";
    }

    value.setSort(value.sort);
  }

  handleFilterIcon(value: any) {
    switch (this.state.type) {
      case undefined:
      case "number":
      case "boolean":
        if (
          value.filters.some((x: IFilter) => {
            return x.name === this.state.name;
          })
        ) {
          return (
            <i
              className="filter-icon-column-visible fa fa-filter"
              aria-hidden="true"
            ></i>
          );
        } else {
          return (
            <i
              className="filter-icon-column fa fa-filter"
              aria-hidden="true"
            ></i>
          );
        }
      case "select":
        if (
          value.filters.some((x: IFilter) => {
            return (
              x.name === this.state.name &&
              x.selection !== undefined &&
              x.selection.length > 0
            );
          })
        ) {
          return (
            <i
              className="filter-icon-column-visible fa fa-filter"
              aria-hidden="true"
            ></i>
          );
        } else {
          return (
            <i
              className="filter-icon-column fa fa-filter"
              aria-hidden="true"
            ></i>
          );
        }
      default:
        return (
          <i className="filter-icon-column fa fa-filter" aria-hidden="true"></i>
        );
    }
  }

  handleSortIcon(value: any) {
    return value.sort.field_id === this.props.name &&
      value.sort.sort_type === "asc" ? (
      <i className="fa fa-arrow-up" aria-hidden="true"></i>
    ) : value.sort.field_id === this.props.name &&
      value.sort.sort_type === "desc" ? (
      <i className="fa fa-arrow-down" aria-hidden="true"></i>
    ) : (
      <i className="fa fa-arrow-down hidden-icon" aria-hidden="true"></i>
    );
  }

  render() {
    return (
      <div className={`column-container ${this.props.size}`}>
        <GridContext.Consumer>
          {(value) => (
            <Dropdown>
              <div className="column">
                <div
                  className="sort"
                  tabIndex={0}
                  onKeyPress={() => this.handleColumnSorting(value)}
                  onClick={() => this.handleColumnSorting(value)}
                >
                  {this.handleSortIcon(value)}
                  {this.props.name}
                </div>
                <div
                  tabIndex={0}
                  className="filter"
                  onClick={() => {
                    if (value.toggledColumn === this.state) {
                      value.setToggledColumn({ name: "", size: "" });
                    } else {
                      value.setToggledColumn(this.state);
                    }
                  }}
                  onKeyPress={() => {
                    if (value.toggledColumn === this.state) {
                      value.setToggledColumn({ name: "", size: "" });
                    } else {
                      value.setToggledColumn(this.state);
                    }
                  }}
                >
                  {this.handleFilterIcon(value)}
                </div>
              </div>
              <div
                className={`filter-dropdown ${
                  this.state === value.toggledColumn ? "show" : ""
                }`}
              >
                <Filters columns={[this.props]} />
              </div>
            </Dropdown>
          )}
        </GridContext.Consumer>
      </div>
    );
  }
}

export default Column;
