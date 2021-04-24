import { useContext } from "react";
import { Form } from "react-bootstrap";
import { GridContext } from "../Grid";

const SelectionFilter = (props: any) => {
  let sortContext = useContext(GridContext);

  let filter = sortContext.selectionOptions.filter(
    (filters) => filters.name === props.header.name
  )[0];

  return (
    <>
      {filter.options?.map((value, key) => {
        return (
          <Form.Check
            key={key}
            className="form-check"
            type="checkbox"
            label={value}
            checked={props.handleFilterDisplay(props.header, value)}
            onChange={(e: any) => {
              e.stopPropagation();
              props.handleAddSelectionFilter(
                props.header,
                value,
                e.target.checked
              );
            }}
            onKeyPress={(e: any) => {
              if (e.key === "Enter") {
                let activeElement = document.activeElement as HTMLElement;

                if (activeElement !== null) {
                  activeElement.click();
                }

                props.handleAddSelectionFilter(
                  props.header,
                  value,
                  e.target.checked
                );
              }
            }}
          ></Form.Check>
        );
      })}
    </>
  );
};

export default SelectionFilter;
