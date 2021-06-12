import React, { useState } from "react";
import { useEffect } from "react";
import { IColumn } from "./Grid/Interfaces/GridBody/IColumn";
import { IColumnOptions } from "./Grid/Interfaces/GridBody/IColumnOptions";
import StyledSideBarColumnOption from "./StyledSideBarColumnOption";

function SideBarColumnOption(props: {
  currentOption: IColumnOptions;
  column: IColumn;
  isVisible: boolean;
  addNewOption: (
    newOption: IColumnOptions,
    currentOption: IColumnOptions,
    column: IColumn
  ) => void;
  canRemove: boolean;
  removeOption: (
    currentColumn: IColumn,
    optionToRemove: IColumnOptions
  ) => void;
  findColumn: (columnToFind: IColumn) => boolean;
}) {
  const [optionValue, updateOptionValue] = useState("");
  const [iconValue, updateIconValue] = useState("");

  useEffect(() => {
    updateOptionValue(props.currentOption.name);
    updateIconValue(props.currentOption.icon);
  }, [
    props.currentOption.name,
    props.currentOption.icon,
    updateOptionValue,
    updateIconValue,
  ]);

  return (
    <StyledSideBarColumnOption
      isVisible={props.isVisible && props.findColumn(props.column)}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>Option: </div>
        <i
          style={{ display: props.canRemove === true ? "block" : "none" }}
          onClick={() =>
            props.removeOption(props.column, {
              name: optionValue,
              icon: iconValue,
            })
          }
          className="fa fa-times"
          aria-hidden="true"
        ></i>
      </div>
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
        onClick={() => {
          props.addNewOption(
            {
              name: optionValue,
              icon: iconValue,
            } as IColumnOptions,
            props.currentOption,
            props.column
          );
          updateOptionValue("");
          updateIconValue("");
        }}
      >
        {props.canRemove === true ? "Edit Current Option" : "Add New Option"}
      </button>
      <br></br>
    </StyledSideBarColumnOption>
  );
}

export default SideBarColumnOption;
