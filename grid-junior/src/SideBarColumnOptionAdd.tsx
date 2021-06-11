import React, { useState } from "react";
import { IColumnOptions } from "./Grid/Interfaces/GridBody/IColumnOptions";
import StyledSideBarColumnOptionAdd from "./StyledSideBarColumnOptionAdd";

function SideBarColumnOptionAdd(props: {
  isVisible: boolean;
  addNewOption: (newOption: IColumnOptions, column: string) => void;
  columnName: string;
}) {
  const [optionValue, updateOptionValue] = useState("");
  const [iconValue, updateIconValue] = useState("");

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
      <div>Icon (FA - 4): </div>
      <input
        type="text"
        value={iconValue}
        onChange={(e) => {
          updateIconValue(e.target.value);
        }}
      ></input>
      <br></br>
      <button
        onClick={() =>
          props.addNewOption(
            { name: optionValue, icon: iconValue } as IColumnOptions,
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
