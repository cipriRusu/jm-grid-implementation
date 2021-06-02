import React, { useState } from "react";
import { IColumn } from "./Grid/Interfaces/GridBody/IColumn";
import { IColumns } from "./Grid/Interfaces/GridBody/IColumns";
import { IHeader } from "./Grid/Interfaces/GridBody/IHeader";
import SideBarColumnAdd from "./SideBarColumnAdd";
import SideBarElement from "./SideBarElement";
import SideBarGroupAdd from "./SideBarGroupAdd";
import { StyledSideBar } from "./StyledSideBar";

function SideBar(props: {
  toggledSideBar: boolean;
  setToggleSideBar: (value: boolean) => void;
  updateHeaderData: (value: [IHeader]) => void;
  headers: IHeader[];
}) {
  const [upperNewGroup, updateUpperNewGroup] = useState("");
  const [bottomNewGroup, updatebottomNewGroup] = useState("");

  function RemoveGroup(toRemove: string) {
    let currentHeaderData = Object.create(props.headers) as [IHeader];

    currentHeaderData.forEach((x) => {
      x.headers = x.headers.filter((y) => {
        return y.name !== toRemove;
      });
    });

    props.updateHeaderData(currentHeaderData);
  }

  function RemoveColumn(toRemove: string) {
    let currentHeaderData = Object.create(props.headers) as [IHeader];

    currentHeaderData.forEach((x) => {
      x.headers.forEach((y) => {
        y.columns = y.columns.filter((z) => {
          return z.name !== toRemove;
        });
      });
    });

    props.updateHeaderData(currentHeaderData);
  }

  function addNewGroupTop(newGroup: string) {
    let currentHeaderData = Object.create(props.headers) as [IHeader];

    currentHeaderData.forEach((x) => {
      x.headers.unshift({
        name: newGroup,
        columns: [],
      });
    });

    props.updateHeaderData(currentHeaderData);
  }

  function addNewGroupBottom(newGroup: string) {
    let currentHeaderData = Object.create(props.headers) as [IHeader];

    currentHeaderData.forEach((x) => {
      x.headers.push({
        name: newGroup,
        columns: [],
      });
    });

    props.updateHeaderData(currentHeaderData);
  }

  return (
    <StyledSideBar isVisible={props.toggledSideBar}>
      <i
        className="fa fa-bars"
        aria-hidden="true"
        onClick={() => props.setToggleSideBar(false)}
      ></i>

      <SideBarGroupAdd
        upperNewGroup={upperNewGroup}
        updateUpperNewGroup={updateUpperNewGroup}
        addNewGroup={addNewGroupTop}
      ></SideBarGroupAdd>

      {props.headers.map((x: IHeader) => {
        return x.headers.map((x: IColumns, key: number) => {
          return (
            <React.Fragment key={key}>
              <SideBarElement
                key={key}
                column={x}
                removeColumn={() => RemoveGroup(x.name)}
              ></SideBarElement>
              {x.columns.map((y: IColumn, key: number) => {
                return (
                  <SideBarElement
                    key={key}
                    column={y}
                    removeColumn={RemoveColumn}
                  ></SideBarElement>
                );
              })}

              <div>Add New Column: </div>
              <SideBarColumnAdd></SideBarColumnAdd>
              <br></br>
            </React.Fragment>
          );
        });
      })}

      <SideBarGroupAdd
        upperNewGroup={bottomNewGroup}
        updateUpperNewGroup={updatebottomNewGroup}
        addNewGroup={addNewGroupBottom}
      ></SideBarGroupAdd>
    </StyledSideBar>
  );
}

export default SideBar;
