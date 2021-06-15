import React from "react";
import { IRow } from "../../Interfaces/GridBody/IRow";
import StyledBooleanRow from "./StyledExtendedComponents/StyledBooleanRow";

export const BooleanRow = (props: { name: string; completeRow: IRow }) => {
  return (
    <StyledBooleanRow>
      <div className="row-name">{props.name + " : "}</div>
      <div className="row-icon">
        {props.completeRow[props.name] !== undefined &&
        JSON.parse(props.completeRow[props.name]) === true ? (
          <i className="fa fa-square" aria-hidden="true"></i>
        ) : (
          <i className="fa fa-square-o" aria-hidden="true"></i>
        )}
      </div>
    </StyledBooleanRow>
  );
};
