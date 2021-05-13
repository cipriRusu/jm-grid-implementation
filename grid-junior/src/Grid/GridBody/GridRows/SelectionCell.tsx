import { ICell } from "../../Interfaces/GridBody/ICell";

const SelectionCell = (content: ICell) => {
  const DisplayIcon = (content: string, options: any[]) => {
    let icon = options.filter((x) => x !== undefined && x[content])[0];

    if (icon !== undefined) {
      return <i className={icon[content]} aria-hidden="true"></i>;
    }
  };

  return (
    <div className="cell selection-cell">
      <div>
        {DisplayIcon(
          content.cell_content || "",
          content.selection_options || []
        )}
      </div>
      <div>{content.cell_content}</div>
    </div>
  );
};

export default SelectionCell;
