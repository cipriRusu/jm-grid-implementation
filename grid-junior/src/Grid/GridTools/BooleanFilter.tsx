import { useContext } from "react";
import { Form } from "react-bootstrap";
import { GridContext } from "../Grid";
import { IColumn } from "../Interfaces/GridBody/IColumn";
import { IFilter } from "../Interfaces/GridTools/IFilter";

const BooleanFilter = (props: any) => {
  let optionsForBoolean = [true, false];

  let gridContext = useContext(GridContext);

  const addBooleanFilter = (
    header: IColumn,
    checked: boolean,
    option: boolean
  ) => {
    let filters = gridContext.filters;

    if (checked === true) {
      if (filters.some((x: IFilter) => x.name === header.name)) {
        let defaultFilter = filters.filter(
          (x: IFilter) => x.name === header.name
        )[0];

        if (defaultFilter.boolean !== undefined) {
          defaultFilter.boolean = defaultFilter.boolean.concat(Boolean(option));

          gridContext.setFilter(filters);
        }
      } else {
        let newFilter = {
          name: header.name,
          type: header.type,
          value: header.value,
          operator: header.operator,
          boolean: [Boolean(option)],
        };

        let updatedFilters = [...gridContext.filters, newFilter];

        gridContext.setFilter(updatedFilters);
      }
    }

    if (checked === false) {
      if (filters.some((x: IFilter) => x.name === header.name)) {
        let defaultFilter = filters.filter((x: IFilter) => {
          return x.name === header.name;
        })[0];

        if (defaultFilter.boolean !== undefined) {
          defaultFilter.boolean = defaultFilter.boolean.filter((x: boolean) => {
            return x !== option;
          });

          if (defaultFilter.boolean.length === 0) {
            filters = filters.filter((x: IFilter) => {
              return x.name !== header.name;
            });
          }

          gridContext.setFilter(filters);
        }
      }
    }
  };

  const capitalizeWord = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <>
      {optionsForBoolean.map((option: any, key: number) => {
        return (
          <Form.Check
            key={key}
            className="form-check"
            type="checkbox"
            label={capitalizeWord(option.toString())}
            onChange={(e: any) => {
              addBooleanFilter(props.header, e.target.checked, option);
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
      })}
    </>
  );
};

export default BooleanFilter;
