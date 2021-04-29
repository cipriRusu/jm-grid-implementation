import { ICell } from "../../Interfaces/GridBody/ICell";
import StandardCell from "./StandardCell";
import "./Cell.scss";
import BooleanCell from "./BooleanCell";

const Cell = (props: { content: ICell }) => {
  const ApplyTitleStyling = () => {
    if (props.content.cell_key === 0 || props.content.cell_key === 1) {
      return "cell title-wrapper";
    } else {
      return "cell";
    }
  };

  const ComputeCellType = (content: ICell) => {
    switch (content.cell_type?.toString()) {
      case undefined:
      case "number":
      case "select":
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
    }
  };

  return <>{ComputeCellType(props.content)}</>;
};

export default Cell;
