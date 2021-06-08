import { IColumn } from "./Grid/Interfaces/GridBody/IColumn";
import { IGrouping } from "./Grid/Interfaces/GridBody/IGrouping";
import { StyledSideBarElement } from "./StyledSideBarElement";

function SideBarElement(props: {
  column: IColumn | IGrouping;
  removeColumn: (column: string) => void;
}) {
  return (
    <StyledSideBarElement>
      <p
        style={
          {
            fontWeight: `${"columns" in props.column ? "bold" : ""}`,
          } as React.CSSProperties
        }
      >
        {props.column.name}
      </p>
      <i
        className="fa fa-minus-circle"
        aria-hidden="true"
        onClick={() => props.removeColumn(props.column.name)}
      ></i>
    </StyledSideBarElement>
  );
}

export default SideBarElement;
