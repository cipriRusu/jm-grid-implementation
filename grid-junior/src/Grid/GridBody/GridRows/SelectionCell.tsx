import { ICell } from "../../Interfaces/GridBody/ICell";
import { IColumnOptions } from "../../Interfaces/GridBody/IColumnOptions";

const SelectionCell = (content: ICell) => {
  const DisplayIcon = (content: string, options: any[]) => {
    let selectionCellContent = options.filter(
      (x: IColumnOptions) => x !== undefined && x.name === content
    )[0] as IColumnOptions;

    if (selectionCellContent !== undefined) {
      return <i className={selectionCellContent.icon} aria-hidden="true"></i>;
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
