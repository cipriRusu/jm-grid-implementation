import React, { useState } from "react";
import { IColumnOptions } from "./Grid/Interfaces/GridBody/IColumnOptions";
import StyledSideBarColumnOptionAdd from "./StyledSideBarColumnOptionAdd";

function SideBarColumnOptionAdd(props: {
  isVisible: boolean;
  addNewOption: (newOption: IColumnOptions, column: string) => void;
  columnName: string;
}) {
  const [optionValue, updateOptionValue] = useState("");

  return (
    <StyledSideBarColumnOptionAdd isVisible={props.isVisible}>
      <br></br>
      <div>New Option: </div>
      <input
        type="text"
        value={optionValue}
        onChange={(e) => {
          updateOptionValue(e.target.value);
        }}
      ></input>
      <br></br>
      <button
        onClick={() =>
          props.addNewOption(
            { name: optionValue, icon: "" } as IColumnOptions,
            props.columnName
          )
        }
      >
        Add New Option
      </button>
    </StyledSideBarColumnOptionAdd>
  );
}

export default SideBarColumnOptionAdd;
