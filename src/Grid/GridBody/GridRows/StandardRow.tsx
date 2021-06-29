import React from "react";
import { IRow } from "../../Interfaces/GridBody/IRow";
import StyledStandardRow from "./StyledExtendedComponents/StyledStandardRow";

export const StandardRow = (props: { name: string; completeRow: IRow }) => {
  return (
    <StyledStandardRow>
      <div className="row-name">
        {props.name} {":"}
      </div>
      <div className="row-content">{props.completeRow[props.name]}</div>
    </StyledStandardRow>
  );
};
