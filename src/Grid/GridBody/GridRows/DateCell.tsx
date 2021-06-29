import React from "react";
import { ICell } from "../../Interfaces/GridBody/ICell";

const DateCell = (props: ICell) => {
  let date = new Date(Date.parse(props.cell_content || ""));
  return (
    <div className="cell date-cell">
      {date.toLocaleString("default", { month: "long" })} {date.getDate()}{" "}
      {date.getFullYear()}
    </div>
  );
};

export default DateCell;
