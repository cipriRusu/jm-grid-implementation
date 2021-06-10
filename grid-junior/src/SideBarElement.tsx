import { useState } from "react";
import { IColumn } from "./Grid/Interfaces/GridBody/IColumn";
import { IGrouping } from "./Grid/Interfaces/GridBody/IGrouping";
import SideBarColumnEdit from "./Grid/SideBarColumnEdit";
import { StyledSideBarElement } from "./StyledSideBarElement";

function SideBarElement(props: {
  columnOrGrouping: IColumn | IGrouping;
  removeColumn: (column: string) => void;
  editColumn: (editedColumn: IColumn, name: string) => void;
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
            className="fa fa-minus-circle"
            aria-hidden="true"
            onClick={() => {
              props.removeColumn(props.columnOrGrouping.name);
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
