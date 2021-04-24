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
      let currentFilters = sortContext.filters;

      if (currentFilters.some((x: IFilter) => x.name === header.name)) {
        let defaultFilter = currentFilters.filter(
          (x: IFilter) => x.name === header.name
        )[0];

        if (
          defaultFilter.selection !== undefined &&
          !defaultFilter.selection.includes(option)
        ) {
          defaultFilter.selection = defaultFilter.selection.concat(option);

          sortContext.setFilter(currentFilters);
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
  };

  const displayCheck = (header: IColumn, currentValue: string) => {
    let allFilters = sortContext.filters.filter((filter: IFilter) => {
      return filter.name === header.name;
    })[0];

    if (allFilters !== undefined && allFilters.selection !== undefined) {
      return allFilters.selection.includes(currentValue) ? true : false;
    }

    return false;
  };

  return (
    <>
      {filter.options?.map((value, key) => {
        return (
          <Form.Check
            key={key}
            className="form-check"
            type="checkbox"
            label={value}
            checked={displayCheck(props.header, value)}
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
