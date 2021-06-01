import { IColumn } from "../../Interfaces/GridBody/IColumn";
import { IRow } from "../../Interfaces/GridBody/IRow";
import GridRowExtendedStyled from "../../StyledComponents/GridRowExtendedStyled";

const ExtendedRow = (props: {
  id: string;
  completeRow: IRow;
  allColumns: IColumn[];
  checkToggle: (row_key: number) => string;
  row_key: number;
}) => {
  return (
    <GridRowExtendedStyled
      className={props.checkToggle(props.row_key)}
      inputColumns={props.allColumns}
    >
      {props.allColumns.map((x: IColumn, key: number) => {
        return (
          <div key={key} className={x.minVisibility}>
            <br></br>
            {x.name} : {props.completeRow[x.name].toString()}
            <br></br>
          </div>
        );
      })}
      <br></br>
    </GridRowExtendedStyled>
  );
};

export default ExtendedRow;
