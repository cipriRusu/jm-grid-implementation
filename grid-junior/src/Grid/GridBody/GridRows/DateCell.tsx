import { ICell } from "../../Interfaces/GridBody/ICell";

const DateCell = (props: ICell) => {
  let date = new Date(Date.parse(props.cell_content || ""));
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {date.toLocaleString("default", { month: "long" })} {date.getDate()}{" "}
      {date.getFullYear()}
    </div>
  );
};

export default DateCell;
