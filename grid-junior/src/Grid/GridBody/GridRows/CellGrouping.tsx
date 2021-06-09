import React from "react";
import { DataType } from "../../CustomTypes/DataType";
import { IColumn } from "../../Interfaces/GridBody/IColumn";
import { IGrouping } from "../../Interfaces/GridBody/IGrouping";
import { IHeader } from "../../Interfaces/GridBody/IHeader";
import { IRow } from "../../Interfaces/GridBody/IRow";
import Cell from "./Cell";
import StyledCellGrouping from "./StyledExtendedComponents/StyledCellGrouping";

const CellGrouping = (props: {
  allData: IHeader[];
  grouping: IGrouping;
  row: IRow;
}) => {
  return (
    <StyledCellGrouping allData={props.allData} grouping={props.grouping}>
      {props.grouping.columns.map((y: IColumn, cell_key: number) => {
        return (
          <Cell
            key={cell_key}
            content={{
              id: cell_key,
              cell_content: props.row[y.name],
              cell_type: y.type as DataType,
              cell_key: cell_key,
              cell_size: y.size,
              cell_visibility: y.minVisibility,
              cell_collapsable: y.collapsable,
              selection_options: y.options,
              cell_column: y.name.toLowerCase(),
            }}
          />
        );
      })}
    </StyledCellGrouping>
  );
};

export default CellGrouping;
