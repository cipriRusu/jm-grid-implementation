import { useEffect, useState } from "react";
import SideBarColumnOption from "../SideBarColumnOption";
import { ColumnCollapsable } from "./CustomTypes/ColumnCollapsable";
import { ColumnSizes } from "./CustomTypes/ColumnSizes";
import { ColumnTypes } from "./CustomTypes/ColumnTypes";
import { MinimumVisibility } from "./CustomTypes/ColumnVisibility";
import { IColumn } from "./Interfaces/GridBody/IColumn";
import { IColumnOptions } from "./Interfaces/GridBody/IColumnOptions";

function SideBarColumnEdit(props: {
  isToggled: boolean;
  column: IColumn;
  editColumn: (editedColumn: IColumn, initialColumn: IColumn) => void;
  addOption: (
    newOption: IColumnOptions,
    currentOption: IColumnOptions,
    currentColumn: IColumn
  ) => void;
  removeOption: (
    currentColumn: IColumn,
    optionToRemove: IColumnOptions
  ) => void;
  findColumn: (columnToFind: IColumn) => boolean;
}) {
  const [columnName, updateColumnName] = useState(props.column.name);

  const [columnType, updateColumnType] = useState<ColumnTypes>(
    props.column.type as ColumnTypes
  );

  const [columnSize, updateColumnSize] = useState<ColumnSizes>(
    props.column.size as ColumnSizes
  );

  const [columnCollapsable, updateColumnCollapsable] =
    useState<ColumnCollapsable>(props.column.collapsable);

  const [columnVisibility, updateColumnVisibility] =
    useState<MinimumVisibility>(props.column.minVisibility);

  useEffect(() => {
    updateColumnName(props.column.name);
    updateColumnType(props.column.type as ColumnTypes);
    updateColumnSize(props.column.size);
    updateColumnCollapsable(props.column.collapsable);
    updateColumnVisibility(props.column.minVisibility);
  }, [
    props.column.name,
    props.column.type,
    props.column.size,
    props.column.collapsable,
    props.column.minVisibility,
  ]);

  return (
    <>
      <div
        style={{
          display: `${props.isToggled ? "flex" : "none"}`,
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
        <div>Min. Visibility:</div>
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
        <br></br>
        <button
          onClick={() =>
            props.editColumn(
              {
                name: columnName,
                type: columnType,
                size: columnSize,
                collapsable: columnCollapsable,
                minVisibility: columnVisibility,
                options: props.column.options,
              },
              props.column
            )
          }
        >
          Edit Column
        </button>
        {props.column.type === ColumnTypes.select
          ? props.column.options?.map(
              (currentOption: IColumnOptions, key: number) => {
                return (
                  <SideBarColumnOption
                    key={key}
                    addNewOption={props.addOption}
                    currentOption={currentOption}
                    column={props.column}
                    canRemove={true}
                    findColumn={props.findColumn}
                    isVisible={props.column.type === ColumnTypes.select}
                    removeOption={props.removeOption}
                  ></SideBarColumnOption>
                );
              }
            )
          : ""}
        {props.column.type === ColumnTypes.select ? (
          <SideBarColumnOption
            addNewOption={props.addOption}
            currentOption={{ name: "", icon: "" }}
            column={props.column}
            canRemove={false}
            findColumn={props.findColumn}
            isVisible={props.column.type === ColumnTypes.select}
            removeOption={props.removeOption}
          ></SideBarColumnOption>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default SideBarColumnEdit;
