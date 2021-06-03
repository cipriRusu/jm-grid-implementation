import { IRow } from "../../Interfaces/GridBody/IRow";

export const DateRow = (props: { name: string; completeRow: IRow }) => {
  let currentDate = new Date(props.completeRow[props.name]).toLocaleDateString(
    undefined,
    {
      day: "2-digit",
      weekday: "long",
      month: "long",
      year: "numeric",
    }
  );
  return (
    <>
      {props.name} : {currentDate}
    </>
  );
};
