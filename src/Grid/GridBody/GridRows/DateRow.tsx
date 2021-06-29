import React from "react";
import { IRow } from "../../Interfaces/GridBody/IRow";
import { StyledDateRow } from "./StyledExtendedComponents/StyledDateRow";

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
    <StyledDateRow>
      <div className="row-name">
        {props.name}
        {":"}
      </div>
      <div className="row-content">{currentDate}</div>
    </StyledDateRow>
  );
};
