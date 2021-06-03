import React from "react";
import { DataType } from "../../CustomTypes/DataType";
import { IColumn } from "../../Interfaces/GridBody/IColumn";
import { IRow } from "../../Interfaces/GridBody/IRow";
import GridRowExtendedStyled from "../../StyledComponents/GridRowExtendedStyled";
import { BooleanRow } from "./BooleanRow";
import { DateRow } from "./DateRow";
import { StandardRow } from "./StandardRow";

const ExtendedRow = (props: {
  id: string;
  completeRow: IRow;
  allColumns: IColumn[];
  checkToggle: (row_key: number) => string;
  row_key: number;
}) => {
  return (
    <GridRowExtendedStyled
      className={props.checkToggle(props.row_key)}
      inputColumns={props.allColumns}
    >
      <br></br>
      {props.allColumns.map((x: IColumn, key: number) => {
        return (
          <div key={key} className={x.minVisibility}>
            {(() => {
              switch (x.type) {
                case "text" as DataType:
                case "number" as DataType:
                case "select" as DataType:
                  return (
                    <StandardRow
                      name={x.name}
                      completeRow={props.completeRow}
                    ></StandardRow>
                  );
                case "boolean" as DataType:
                  return (
                    <BooleanRow
                      name={x.name}
                      completeRow={props.completeRow}
                    ></BooleanRow>
                  );
                case "date" as DataType:
                  return (
                    <DateRow
                      name={x.name}
                      completeRow={props.completeRow}
                    ></DateRow>
                  );
                default:
                  return (
                    <StandardRow
                      name={x.name}
                      completeRow={props.completeRow}
                    ></StandardRow>
                  );
              }
            })()}
          </div>
        );
      })}
      <br></br>
    </GridRowExtendedStyled>
  );
};

export default ExtendedRow;
