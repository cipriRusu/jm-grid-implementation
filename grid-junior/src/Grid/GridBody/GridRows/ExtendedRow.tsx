import { IColumn } from "../../Interfaces/GridBody/IColumn";
import { IRow } from "../../Interfaces/GridBody/IRow";

const ExtendedRow = (props: { completeRow: IRow; allColumns: IColumn[] }) => {
  return (
    <>
      <br></br>
      {props.allColumns.map((x: IColumn, key: number) => {
        return (
          <div key={key} className={x.minVisibility}>
            {x.name} : {props.completeRow[x.name].toString()}
          </div>
        );
      })}
      <br></br>
    </>
  );
};

export default ExtendedRow;
