import { IColumn } from "./Grid/Interfaces/GridBody/IColumn";
import { IColumns } from "./Grid/Interfaces/GridBody/IColumns";
import { StyledSideBarElement } from "./StyledSideBarElement";

function SideBarElement(props: {
  column: IColumn | IColumns;
  removeColumn: (column: string) => void;
}) {
  return (
    <StyledSideBarElement>
      <p>{props.column.name}</p>
      <i
        className="fa fa-minus-circle"
        aria-hidden="true"
        onClick={() => props.removeColumn(props.column.name)}
      ></i>
    </StyledSideBarElement>
  );
}

export default SideBarElement;
