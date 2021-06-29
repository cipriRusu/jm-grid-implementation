import React from "react";
import { useContext } from "react";
import { Form } from "react-bootstrap";
import { GridContext } from "../Grid";
import { IColumn } from "../Interfaces/GridBody/IColumn";
import { IFilter } from "../Interfaces/GridTools/IFilter";

const SelectionFilter = (props: any) => {
  let gridContext = useContext(GridContext);

  let filter = gridContext.selectionOptions.filter(
    (filters) => filters.name === props.header.name
  )[0];

  const addSelectionFilter = (
    header: IColumn,
    option: string[],
    checked: boolean
  ) => {
    if (checked === true) {
      let filters = gridContext.filters;

      if (filters.some((x: IFilter) => x.name === header.name)) {
        let defaultFilter = filters.filter(
          (x: IFilter) => x.name === header.name
        )[0];

        if (
          defaultFilter.values !== undefined &&
          !defaultFilter.values.includes(option)
        ) {
          defaultFilter.values = defaultFilter.values.concat(option);

          gridContext.setFilter(filters);
        }
      } else {
        let newFilter = {
          name: header.name,
          type: header.type,
          values: option,
          operator: 0,
        };

        let current = [...gridContext.filters, newFilter];
        gridContext.setFilter(current);
      }
    }

    if (checked === false) {
      let filters = gridContext.filters;

      let defaultFilter = filters.filter((x: IFilter) => {
        return x.name === header.name;
      })[0];

      if (defaultFilter !== undefined) {
        defaultFilter.values = defaultFilter.values.filter((x: string) => {
          return !option.includes(x);
        });
      }

      if (defaultFilter !== undefined && defaultFilter.values.length === 0) {
        filters = filters.filter((x: IFilter) => {
          return x.name !== header.name;
        });
      }

      gridContext.setFilter(filters);
    }
  };

  const displayCheck = (
    header: IColumn,
    currentValue: string,
    allValues: string[]
  ) => {
    let filter = gridContext.filters.filter((filter: IFilter) => {
      return filter.name === header.name;
    })[0];

    if (
      filter !== undefined &&
      filter.values !== undefined &&
      allValues.every(
        (x: string) => filter.values !== undefined && filter.values.includes(x)
      )
    ) {
      return true;
    }

    if (filter !== undefined && filter.values !== undefined) {
      return filter.values.includes(currentValue) ? true : false;
    }

    return false;
  };

  return (
    <>
      <Form.Check
        className="form-check all-selector"
        type="checkbox"
        label={"Select All"}
        checked={displayCheck(
          props.header,
          "Select All",
          filter.options || new Array<string>()
        )}
        onChange={(e: any) => {
          addSelectionFilter(
            props.header,
            filter.options || new Array<string>(),
            e.target.checked
          );
        }}
        onKeyPress={(e: any) => {
          if (e.key === "Enter") {
            let activeElement = document.activeElement as HTMLElement;

            if (activeElement !== null) {
              activeElement.click();
            }
          }
        }}
      ></Form.Check>
      {filter.options?.map((value, key) => {
        return (
          <Form.Check
            key={key}
            className="form-check"
            type="checkbox"
            label={value.name}
            checked={displayCheck(
              props.header,
              value,
              filter.options || new Array<string>()
            )}
            onChange={(e: any) => {
              addSelectionFilter(props.header, [value], e.target.checked);
            }}
            onKeyPress={(e: any) => {
              if (e.key === "Enter") {
                let activeElement = document.activeElement as HTMLElement;

                if (activeElement !== null) {
                  activeElement.click();
                }
              }
            }}
          ></Form.Check>
        );
      })}{" "}
    </>
  );
};

export default SelectionFilter;
