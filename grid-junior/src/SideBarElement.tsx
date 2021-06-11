import { useState } from "react";
import { IColumn } from "./Grid/Interfaces/GridBody/IColumn";
import { IGrouping } from "./Grid/Interfaces/GridBody/IGrouping";
import SideBarColumnEdit from "./Grid/SideBarColumnEdit";
import MoveDirection from "./MoveDirection";
import { StyledSideBarElement } from "./StyledSideBarElement";

function SideBarElement(props: {
  columnOrGrouping: IColumn | IGrouping;
  removeColumn: (column: IColumn) => void;
  editColumn: (editedColumn: IColumn, initialColumn: IColumn) => void;
  moveColumn: (column: IColumn, direction: MoveDirection) => void;
}) {
  const [isToggled, updateisToggled] = useState(false);

  return (
    <>
      <StyledSideBarElement>
        <p
          style={
            {
              fontWeight: `${
                "columns" in props.columnOrGrouping ? "bold" : ""
              }`,
            } as React.CSSProperties
          }
        >
          {props.columnOrGrouping.name}
        </p>
        <div className="icons-grouping">
          <i
            style={{
              display: `${"columns" in props.columnOrGrouping ? "none" : ""}`,
            }}
            className="fa fa-arrow-down"
            aria-hidden="true"
            onClick={() =>
              props.moveColumn(
                props.columnOrGrouping as IColumn,
                MoveDirection.Down
              )
            }
          ></i>
          <i
            style={{
              display: `${"columns" in props.columnOrGrouping ? "none" : ""}`,
            }}
            className="fa fa-arrow-up"
            aria-hidden="true"
            onClick={() =>
              props.moveColumn(
                props.columnOrGrouping as IColumn,
                MoveDirection.Up
              )
            }
          ></i>
          {!("columns" in props.columnOrGrouping) ? (
            <i
              className="fa fa-pencil-square-o"
              onClick={() => updateisToggled(isToggled === true ? false : true)}
              aria-hidden="true"
            ></i>
          ) : (
            ""
          )}
          <i
            className="fa fa-trash"
            aria-hidden="true"
            onClick={() => {
              props.removeColumn(props.columnOrGrouping as IColumn);
            }}
          ></i>
        </div>
      </StyledSideBarElement>
      <div
        style={{
          display: `${"columns" in props.columnOrGrouping ? "none" : "block"}`,
        }}
      >
        <SideBarColumnEdit
          isToggled={isToggled}
          column={props.columnOrGrouping as IColumn}
          editColumn={props.editColumn}
        ></SideBarColumnEdit>
      </div>
    </>
  );
}

export default SideBarElement;
