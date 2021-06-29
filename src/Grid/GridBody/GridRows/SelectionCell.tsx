import React from "react";
import { ICell } from "../../Interfaces/GridBody/ICell";
import { IColumnOptions } from "../../Interfaces/GridBody/IColumnOptions";

const SelectionCell = (content: ICell) => {
  const DisplayIcon = (content: string, options: any[]) => {
    let selectionCellContent = options.filter(
      (x: IColumnOptions) => x !== undefined && x.name === content
    )[0] as IColumnOptions;

    return selectionCellContent !== undefined ? (
      <i className={selectionCellContent.icon} aria-hidden="true"></i>
    ) : (
      <i className="" aria-hidden="true"></i>
    );
  };

  const icon = DisplayIcon(
    content.cell_content || "",
    content.selection_options || []
  );

  return (
    <div className="cell selection-cell">
      <div
        style={{
          display: icon?.props.className === "" ? "none" : "block",
        }}
        className="selection-cell-icon"
      >
        {icon}
      </div>
      <div className="selection-cell-text">{content.cell_content}</div>
    </div>
  );
};

export default SelectionCell;
