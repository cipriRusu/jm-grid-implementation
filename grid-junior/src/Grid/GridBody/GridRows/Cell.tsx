import { ICell } from "../../Interfaces/GridBody/ICell";
import StandardCell from "./StandardCell";
import "./Cell.scss";
import BooleanCell from "./BooleanCell";
import SelectionCell from "./SelectionCell";
import DateCell from "./DateCell";

const Cell = (props: { content: ICell }) => {
  const ComputeCellType = (content: ICell) => {
    switch (content.cell_type?.toString()) {
      case undefined:
      case "number":
        return (
          <StandardCell
            cell_content={content.cell_content}
            cell_key={content.cell_key}
            cell_type={content.cell_type}
          />
        );
      case "boolean":
        return (
          <BooleanCell
            cell_content={content.cell_content}
            cell_key={content.cell_key}
            cell_type={content.cell_type}
          />
        );
      case "select":
        return (
          <SelectionCell
            cell_content={content.cell_content}
            cell_key={content.cell_key}
            cell_type={content.cell_type}
            selection_options={content.selection_options}
          />
        );
      case "date":
        return (
          <DateCell
            cell_content={content.cell_content}
            cell_key={content.cell_key}
            cell_type={content.cell_type}
            selection_options={content.selection_options}
          />
        );
    }
  };

  return <>{ComputeCellType(props.content)}</>;
};

export default Cell;
