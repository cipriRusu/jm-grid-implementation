import { ICell } from "../../Interfaces/GridBody/ICell";

const SelectionCell = (content: ICell) => {
  const DisplayIcon = (content: string, options: string[]) => {
    switch (options.indexOf(content)) {
      case 0:
        return <i className="fa fa-circle" aria-hidden="true"></i>;
      case 1:
        return <i className="fa fa-dot-circle-o" aria-hidden="true"></i>;
      case 2:
        return <i className="fa fa-circle-o" aria-hidden="true"></i>;
    }
  };

  return (
    <div className="cell">
      <div>
        {DisplayIcon(
          content.cell_content || "",
          content.selection_options || []
        )}
      </div>
      <div style={{ marginLeft: "1rem" }}>{content.cell_content}</div>
    </div>
  );
};

export default SelectionCell;
