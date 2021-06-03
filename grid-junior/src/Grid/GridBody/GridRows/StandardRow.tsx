import { IRow } from "../../Interfaces/GridBody/IRow";

export const StandardRow = (props: { name: string; completeRow: IRow }) => {
  return (
    <>
      {props.name} : {props.completeRow[props.name]}
    </>
  );
};
