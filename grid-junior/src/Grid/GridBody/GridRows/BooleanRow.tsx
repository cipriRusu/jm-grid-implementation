import React from "react";
import { IRow } from "../../Interfaces/GridBody/IRow";
import StyledBooleanRow from "./StyledBooleanRow";

export const BooleanRow = (props: { name: string; completeRow: IRow }) => {
  return (
    <StyledBooleanRow>
      <div>{props.name + " : "}</div>
      <div className="row-icon">
        {JSON.parse(props.completeRow[props.name]) === true ? (
          <i className="fa fa-square" aria-hidden="true"></i>
        ) : (
          <i className="fa fa-square-o" aria-hidden="true"></i>
        )}
      </div>
    </StyledBooleanRow>
  );
};
