import React from "react";
import "font-awesome/css/font-awesome.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import { IColumn } from "../../Interfaces/GridBody/IColumn";
import { GridContext } from "../../Grid";
import Filters from "../../GridTools/Filters";
import { IFilter } from "../../Interfaces/GridTools/IFilter";
import { ColumnSizes } from "../../CustomTypes/ColumnSizes";
import { ColumnCollapsable } from "../../CustomTypes/ColumnCollapsable";
import { MinimumVisibility } from "../../CustomTypes/ColumnVisibility";
import StyledColumn from "./StyledColumn";

class Column extends React.Component<IColumn, IColumn> {
  constructor(props: IColumn) {
    super(props);
    this.state = {
      name: this.props.name,
      size: this.props.size,
      type: this.props.type,
      toggled: this.props.toggled,
      minVisibility: this.props.minVisibility,
      collapsable: this.props.collapsable,
      side: this.props.side,
    };
  }

  getSide() {
    window.addEventListener("click", (e) => {
      if (e.target !== null) {
        let targetClickElement = e.target as Element;

        if (targetClickElement.classList.contains("fa-filter")) {
          if (e.pageX < 200) {
            let element = document.getElementsByClassName("show")[0];
            if (element !== undefined) {
              element.classList.add("right-side");
            }
          } else {
            let element = document.getElementsByClassName("show")[0];
            if (element !== undefined) {
              element.classList.add("left-side");
            }
          }
        }
      }
    });

    return "";
  }

  handleColumnSorting(value: any) {
    if (value.sort.sort_type === "") {
      value.sort.sort_type = "asc";
      value.sort.field_id = this.props.name;
      value.sort.field_type = this.props.type;
    } else if (value.sort.field_id === this.props.name) {
      value.sort.sort_type = value.sort.sort_type === "asc" ? "desc" : "";
    } else {
      value.sort.field_id = this.props.name;
      value.sort.sort_type = "asc";
    }

    if (value.sort.sort_type === "") {
      value.sort.field_id = "";
      value.sort.field_type = this.props.type;
    }

    value.setSort(value.sort);
  }

  handleFilterIcon(value: any) {
    switch (this.state.type) {
      case undefined:
      case "number":
      case "boolean":
      case "date":
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
      <StyledColumn>
        <div className={`column-container ${this.props.size}`}>
          <GridContext.Consumer>
            {(value) => (
              <Dropdown>
                <div className="column">
                  <div
                    style={{ maxWidth: "11rem", overflow: "hidden" }}
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
                        value.setToggledColumn({
                          name: "",
                          size: ColumnSizes.StandardColumn,
                          toggled: false,
                          minVisibility: MinimumVisibility.SmallVisible,
                          collapsable: ColumnCollapsable.collapsable,
                        });
                      } else {
                        value.setToggledColumn(this.state);
                      }
                    }}
                    onKeyPress={() => {
                      if (value.toggledColumn === this.state) {
                        value.setToggledColumn({
                          name: "",
                          size: ColumnSizes.StandardColumn,
                          toggled: false,
                          minVisibility: MinimumVisibility.SmallVisible,
                          collapsable: ColumnCollapsable.collapsable,
                        });
                      } else {
                        value.setToggledColumn(this.state);
                      }
                    }}
                  >
                    {this.handleFilterIcon(value)}
                  </div>
                </div>
                <div
                  className={
                    "filter-dropdown" +
                    `${
                      this.state === value.toggledColumn
                        ? `${this.getSide()} show`
                        : ""
                    }`
                  }
                >
                  <Filters columns={[this.props]} />
                </div>
              </Dropdown>
            )}
          </GridContext.Consumer>
        </div>
      </StyledColumn>
    );
  }
}

export default Column;
