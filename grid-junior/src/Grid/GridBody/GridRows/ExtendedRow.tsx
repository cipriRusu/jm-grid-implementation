import { IRow } from "../../Interfaces/GridBody/IRow";

const ExtendedRow = (props: { completeRow: IRow }) => {
  return <p>{props.completeRow["Nume"]}</p>;
};

export default ExtendedRow;
