import React from "react";
import { ICell } from "../../Interfaces/GridBody/ICell";

const StandardCell = (props: ICell) => {
  return <div className={`cell ${props.cell_size}`}>{props.cell_content}</div>;
};

export default StandardCell;
