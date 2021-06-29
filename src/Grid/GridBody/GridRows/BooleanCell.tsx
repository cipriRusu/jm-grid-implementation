import React from "react";
import { ICell } from "../../Interfaces/GridBody/ICell";

const BooleanCell = (props: ICell) => {
  const ComputeBool = (value: boolean) => {
    switch (value) {
      case true:
        return <i className="fa fa-square" aria-hidden="true"></i>;
      case false:
        return <i className="fa fa-square-o" aria-hidden="true"></i>;
    }
  };

  return (
    <div className="cell boolean-cell">
      {ComputeBool(Boolean(props.cell_content))}
    </div>
  );
};

export default BooleanCell;
