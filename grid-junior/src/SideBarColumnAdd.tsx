import React, { useState } from "react";
import { ColumnTypes } from "./Grid/CustomTypes/ColumnTypes";
import { ColumnSizes } from "./Grid/CustomTypes/ColumnSizes";
import { ColumnCollapsable } from "./Grid/CustomTypes/ColumnCollapsable";
import { MinimumVisibility } from "./Grid/CustomTypes/ColumnVisibility";
import { IColumn } from "./Grid/Interfaces/GridBody/IColumn";
import { StyledSideBarElement } from "./StyledSideBarElement";
import SideBarColumnOption from "./SideBarColumnOption";
import { IColumnOptions } from "./Grid/Interfaces/GridBody/IColumnOptions";

function SideBarColumnAdd(props: {
  header: string;
  addColumn: (headerName: string, newColumn: IColumn) => void;
  findColumn: (columnToFind: IColumn) => boolean;
  addColumnOption: (
    newOption: IColumnOptions,
    currentOption: IColumnOptions,
    columnName: IColumn
  ) => void;
  removeOption: (
    currentColumn: IColumn,
    optionToRemove: IColumnOptions
  ) => void;
}) {
  const [isToggled, updateisToggled] = useState(false);

  const [columnName, updateColumnName] = useState("");

  const [columnType, updateColumnType] = useState<ColumnTypes>(
    ColumnTypes.text
  );

  const [columnSize, updateColumnSize] = useState<ColumnSizes>(
    ColumnSizes.StandardColumn
  );

  const [columnCollapsable, updateColumnCollapsable] =
    useState<ColumnCollapsable>(ColumnCollapsable.fixed);

  const [columnVisibility, updateColumnVisibility] =
    useState<MinimumVisibility>(MinimumVisibility.MediumVisible);

  const [optionAddVisibility, optionAddVisiblityUpdate] =
    useState<boolean>(false);

  return (
    <div>
      <StyledSideBarElement>
        <div>Add New Column</div>
        <i
          className={`${
            isToggled === false ? "fa fa fa-plus" : "fa fa fa-minus"
          }`}
          aria-hidden="true"
          onClick={() => updateisToggled(isToggled === true ? false : true)}
        ></i>
      </StyledSideBarElement>
      <div
        style={{
          display: `${isToggled === true ? "flex" : "none"}`,
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <div>Column Name:</div>
        <input
          value={columnName}
          type="text"
          onInput={(e) => {
            updateColumnName(e.currentTarget.value);
          }}
        ></input>
        <div>Column Type:</div>
        <select
          value={columnType}
          onChange={(e) => {
            updateColumnType(e.target.value as ColumnTypes);
            e.target.value === "select"
              ? optionAddVisiblityUpdate(true)
              : optionAddVisiblityUpdate(false);
          }}
        >
          {Object.values(ColumnTypes).map((x, y: number) => {
            return <option key={y}>{x}</option>;
          })}
        </select>
        <div>Column Size:</div>
        <select
          value={columnSize}
          onChange={(e) => {
            updateColumnSize(e.target.value as ColumnSizes);
          }}
        >
          {Object.values(ColumnSizes)
            .slice(1)
            .map((x, y: number) => {
              return <option key={y}>{x}</option>;
            })}
        </select>
        <div>Collapsable State:</div>
        <select
          value={columnCollapsable}
          onChange={(e) => {
            updateColumnCollapsable(e.target.value as ColumnCollapsable);
          }}
        >
          {Object.values(ColumnCollapsable).map((x, y: number) => {
            return <option key={y}>{x}</option>;
          })}
        </select>
        <div>Visibility:</div>
        <select
          value={columnVisibility}
          onChange={(e) => {
            updateColumnVisibility(e.target.value as MinimumVisibility);
          }}
        >
          {Object.values(MinimumVisibility).map((x, y: number) => {
            return <option key={y}>{x}</option>;
          })}
        </select>
        <button
          onClick={() =>
            props.addColumn(props.header, {
              name: columnName,
              type: columnType,
              size: columnSize,
              collapsable: columnCollapsable,
              minVisibility: columnVisibility,
            })
          }
        >
          Add Column
        </button>
        <SideBarColumnOption
          canRemove={false}
          currentOption={{ name: "", icon: "" }}
          isVisible={optionAddVisibility}
          addNewOption={props.addColumnOption}
          column={{
            name: columnName,
            type: columnType,
            size: columnSize,
            collapsable: columnCollapsable,
            minVisibility: columnVisibility,
          }}
          findColumn={props.findColumn}
          removeOption={props.removeOption}
        ></SideBarColumnOption>
        <br></br>
      </div>
    </div>
  );
}

export default SideBarColumnAdd;
