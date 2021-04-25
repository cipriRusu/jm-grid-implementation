import { useContext } from "react";
import { Form } from "react-bootstrap";
import { GridContext } from "../Grid";
import { IColumn } from "../Interfaces/GridBody/IColumn";
import { IFilter } from "../Interfaces/GridTools/IFilter";

const SelectionFilter = (props: any) => {
  let sortContext = useContext(GridContext);

  let filter = sortContext.selectionOptions.filter(
    (filters) => filters.name === props.header.name
  )[0];

  const addSelectionFilter = (
    header: IColumn,
    option: string,
    checked: boolean
  ) => {
    if (checked === true) {
      let filters = sortContext.filters;

      if (filters.some((x: IFilter) => x.name === header.name)) {
        let defaultFilter = filters.filter(
          (x: IFilter) => x.name === header.name
        )[0];

        if (
          defaultFilter.selection !== undefined &&
          !defaultFilter.selection.includes(option)
        ) {
          defaultFilter.selection = defaultFilter.selection.concat(option);

          sortContext.setFilter(filters);
        }
      } else {
        let newFilter = {
          name: header.name,
          type: header.type,
          value: header.value,
          operator: header.operator,
          selection: [option],
        };

        if (newFilter !== undefined && newFilter.selection !== undefined) {
          let current = [...sortContext.filters, newFilter];
          sortContext.setFilter(current);
        }
      }
    }

    if (checked === false) {
      let filters = sortContext.filters;

      let defaultFilter = filters.filter((x: IFilter) => {
        return x.name === header.name;
      })[0];

      if (
        defaultFilter.selection !== undefined &&
        defaultFilter.selection.includes(option)
      ) {
        let updatedSelection = defaultFilter.selection.filter((x: string) => {
          return x !== option;
        });

        defaultFilter.selection = updatedSelection;

        sortContext.setFilter(filters);
      }
    }
  };

  const addAllSelectionFilters = (
    header: IColumn,
    options: string[],
    checked: boolean
  ) => {
    if (checked === true) {
      let filters = sortContext.filters;

      if (filters.some((x: IFilter) => x.name === header.name)) {
        let defaultFilter = filters.filter(
          (x: IFilter) => x.name === header.name
        )[0];

        if (defaultFilter.selection !== undefined) {
          defaultFilter.selection = options;

          sortContext.setFilter(filters);
        }
      } else {
        let newFilter = {
          name: header.name,
          type: header.type,
          value: header.value,
          operator: header.operator,
          selection: options,
        };

        let updatedFilters = [...sortContext.filters, newFilter];

        sortContext.setFilter(updatedFilters);
      }
    }

    if (checked === false) {
      let filters = sortContext.filters;

      let defaultFilters = filters;

      let updatedFilters = defaultFilters.filter((x: IFilter) => {
        return x.name !== header.name;
      });

      sortContext.setFilter(updatedFilters);
    }
  };

  const displayCheck = (
    header: IColumn,
    currentValue: string,
    allValues: string[]
  ) => {
    let filter = sortContext.filters.filter((filter: IFilter) => {
      return filter.name === header.name;
    })[0];

    if (
      filter !== undefined &&
      filter.selection !== undefined &&
      allValues.every(
        (x: string) =>
          filter.selection !== undefined && filter.selection.includes(x)
      )
    ) {
      return true;
    }

    if (filter !== undefined && filter.selection !== undefined) {
      return filter.selection.includes(currentValue) ? true : false;
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
          addAllSelectionFilters(
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

            addAllSelectionFilters(
              props.header,
              filter.options || new Array<string>(),
              e.target.checked
            );
          }
        }}
      ></Form.Check>
      {filter.options?.map((value, key) => {
        return (
          <Form.Check
            key={key}
            className="form-check"
            type="checkbox"
            label={value}
            checked={displayCheck(
              props.header,
              value,
              filter.options || new Array<string>()
            )}
            onChange={(e: any) => {
              e.stopPropagation();
              addSelectionFilter(props.header, value, e.target.checked);
            }}
            onKeyPress={(e: any) => {
              if (e.key === "Enter") {
                let activeElement = document.activeElement as HTMLElement;

                if (activeElement !== null) {
                  activeElement.click();
                }

                addSelectionFilter(props.header, value, e.target.checked);
              }
            }}
          ></Form.Check>
        );
      })}
    </>
  );
};

export default SelectionFilter;
