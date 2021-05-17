import { ICell } from "../../Interfaces/GridBody/ICell";
import StandardCell from "./StandardCell";
import "./Cell.scss";
import BooleanCell from "./BooleanCell";
import SelectionCell from "./SelectionCell";
import DateCell from "./DateCell";
import { CellStyled } from "../../StyledComponents/CellStyled";

const Cell = (props: { content: ICell }) => {
  const ComputeCellType = (content: ICell) => {
    switch (content.cell_type?.toString()) {
      case undefined:
      case "number":
        return (
          <CellStyled
            className={`${content.cell_size} ${content.cell_column}`}
          >
            <StandardCell
              cell_content={content.cell_content}
              cell_key={content.cell_key}
              cell_type={content.cell_type}
              cell_column={content.cell_column}
              cell_size={content.cell_size}
            />
          </CellStyled>
        );
      case "boolean":
        return (
          <CellStyled className={`${content.cell_size} ${content.cell_column}`}>
            <BooleanCell
              cell_content={content.cell_content}
              cell_key={content.cell_key}
              cell_type={content.cell_type}
              cell_size={content.cell_size}
            />
          </CellStyled>
        );
      case "select":
        return (
          <CellStyled className={`${content.cell_size} ${content.cell_column}`}>
            <SelectionCell
              id={content.id}
              cell_content={content.cell_content}
              cell_key={content.cell_key}
              cell_type={content.cell_type}
              cell_size={content.cell_size}
              selection_options={content.selection_options}
            />
          </CellStyled>
        );
      case "date":
        return (
          <CellStyled className={`${content.cell_size} ${content.cell_column}`}>
            <DateCell
              cell_content={content.cell_content}
              cell_key={content.cell_key}
              cell_type={content.cell_type}
              cell_size={content.cell_size}
              selection_options={content.selection_options}
            />
          </CellStyled>
        );
    }
  };

  return <>{ComputeCellType(props.content)}</>;
};

export default Cell;
