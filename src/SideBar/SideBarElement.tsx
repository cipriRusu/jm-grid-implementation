import { useState } from "react";
import SideBarColumnEdit from "./SideBarColumnEdit";
import MoveDirection from "./MoveDirection";
import { StyledSideBarElement } from "./StyledSideBarElement";
import { IColumn, IColumnOptions, IGrouping } from "custom-grid-jm";

function SideBarElement(props: {
  columnOrGrouping: IColumn | IGrouping;
  moveGrouping: (header: IGrouping, moveDirection: MoveDirection) => void;
  removeColumn: (column: IColumn) => void;
  editColumn: (editedColumn: IColumn, initialColumn: IColumn) => void;
  moveColumn: (column: IColumn, direction: MoveDirection) => void;
  findColumn: (columnToFind: IColumn) => boolean;
  addOption: (
    newOption: IColumnOptions,
    currentOption: IColumnOptions,
    currentColumn: IColumn
  ) => void;
  removeOption: (
    currentColumn: IColumn,
    optionToRemove: IColumnOptions
  ) => void;
}) {
  const [isToggled, updateisToggled] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "gray",
        padding: "0.5rem 0rem 0.5rem 0rem",
        marginTop: "columns" in props.columnOrGrouping ? "2rem" : "",
      }}
    >
      <StyledSideBarElement>
        <p
          style={
            {
              marginLeft: "0.5rem",
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
            className="fa fa-arrow-down"
            aria-hidden="true"
            onClick={() =>
              !("columns" in props.columnOrGrouping)
                ? props.moveColumn(
                    props.columnOrGrouping as IColumn,
                    MoveDirection.Down
                  )
                : props.moveGrouping(
                    props.columnOrGrouping as IGrouping,
                    MoveDirection.Down
                  )
            }
          ></i>
          <i
            className="fa fa-arrow-up"
            aria-hidden="true"
            onClick={() => {
              !("columns" in props.columnOrGrouping)
                ? props.moveColumn(
                    props.columnOrGrouping as IColumn,
                    MoveDirection.Up
                  )
                : props.moveGrouping(
                    props.columnOrGrouping as IGrouping,
                    MoveDirection.Up
                  );
            }}
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
            style={{ marginRight: "0.5rem" }}
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
          addOption={props.addOption}
          removeOption={props.removeOption}
          findColumn={props.findColumn}
        ></SideBarColumnEdit>
      </div>
    </div>
  );
}

export default SideBarElement;
