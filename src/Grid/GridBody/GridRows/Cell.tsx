import { ICell } from "../../Interfaces/GridBody/ICell";
import StandardCell from "./StandardCell";
import BooleanCell from "./BooleanCell";
import SelectionCell from "./SelectionCell";
import DateCell from "./DateCell";
import { CellStyled } from "../../StyledComponents/CellStyled";
import { DataType } from "../../CustomTypes/DataType";
import { GridContext } from "../../Grid";
import { useContext } from "react";
import React from "react";

const Cell = (props: { content: ICell }) => {
  let currentContext = useContext(GridContext);

  const ComputeCellType = (content: ICell) => {
    switch (content.cell_type?.toString()) {
      case undefined:
      case "text":
      case "number":
        return (
          <StandardCell
            cell_content={content.cell_content}
            cell_key={content.cell_key}
            cell_type={content.cell_type}
            cell_column={content.cell_column}
            cell_size={content.cell_size}
            cell_visibility={content.cell_visibility}
            cell_collapsable={content.cell_collapsable}
          />
        );
      case "boolean":
        return (
          <BooleanCell
            cell_content={content.cell_content}
            cell_key={content.cell_key}
            cell_type={content.cell_type}
            cell_size={content.cell_size}
            cell_visibility={content.cell_visibility}
            cell_collapsable={content.cell_collapsable}
          />
        );
      case "select":
        return (
          <SelectionCell
            id={content.id}
            cell_content={content.cell_content}
            cell_key={content.cell_key}
            cell_type={content.cell_type}
            cell_size={content.cell_size}
            selection_options={content.selection_options}
            cell_visibility={content.cell_visibility}
            cell_collapsable={content.cell_collapsable}
          />
        );
      case "date":
        return (
          <DateCell
            cell_content={content.cell_content}
            cell_key={content.cell_key}
            cell_type={content.cell_type}
            cell_size={content.cell_size}
            selection_options={content.selection_options}
            cell_visibility={content.cell_visibility}
            cell_collapsable={content.cell_collapsable}
          />
        );
    }
  };

  return (
    <CellStyled
      className={`${props.content.cell_visibility} ${props.content.cell_collapsable}`}
      key={props.content.cell_key}
      cell_type={props.content.cell_type as DataType}
      allColumns={currentContext.allColumns}
    >
      {ComputeCellType(props.content)}
    </CellStyled>
  );
};

export default Cell;
