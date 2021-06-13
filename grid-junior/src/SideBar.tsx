import React, { useState } from "react";
import { IColumn } from "./Grid/Interfaces/GridBody/IColumn";
import { IGrouping } from "./Grid/Interfaces/GridBody/IGrouping";
import { IHeader } from "./Grid/Interfaces/GridBody/IHeader";
import { StyledSideBar } from "./StyledSideBar";
import SideBarColumnAdd from "./SideBarColumnAdd";
import SideBarElement from "./SideBarElement";
import SideBarGroupAdd from "./SideBarGroupAdd";
import { IColumnOptions } from "./Grid/Interfaces/GridBody/IColumnOptions";
import MoveDirection from "./MoveDirection";

function SideBar(props: {
  toggledSideBar: boolean;
  setToggleSideBar: (value: boolean) => void;
  updateHeaderData: (value: [IHeader]) => void;
  headers: IHeader[];
}) {
  const [upperNewGroup, updateUpperNewGroup] = useState("");
  const [bottomNewGroup, updatebottomNewGroup] = useState("");

  function addNewGroupTop(newGroup: string) {
    let currentHeaderData = Object.create(props.headers) as [IHeader];

    currentHeaderData.forEach((header: IHeader) => {
      header.headers.unshift({
        name: newGroup,
        columns: [],
      });
    });

    props.updateHeaderData(currentHeaderData);
  }

  function addNewGroupBottom(newGroup: string) {
    let currentHeaderData = Object.create(props.headers) as [IHeader];

    currentHeaderData.forEach((header: IHeader) => {
      header.headers.push({
        name: newGroup,
        columns: [],
      });
    });

    props.updateHeaderData(currentHeaderData);
  }

  function removeGroup(toRemove: string) {
    let currentHeaderData = Object.create(props.headers) as [IHeader];

    currentHeaderData.forEach((header: IHeader) => {
      header.headers = header.headers.filter((grouping: IGrouping) => {
        return grouping.name !== toRemove;
      });
    });

    props.updateHeaderData(currentHeaderData);
  }

  function addColumn(headerName: string, newColumn: IColumn) {
    let currentHeaderData = Object.create(props.headers) as [IHeader];

    currentHeaderData.forEach((header: IHeader) => {
      header.headers.forEach((grouping: IGrouping) => {
        if (grouping.name === headerName) {
          grouping.columns.push(newColumn);
        }
      });
    });

    props.updateHeaderData(currentHeaderData);
  }

  function addOptionToColumn(
    newOption: IColumnOptions,
    currentOption: IColumnOptions,
    currentColumn: IColumn
  ) {
    let currentHeaderData = Object.create(props.headers) as [IHeader];

    if (currentOption.name !== "") {
      removeOption(currentColumn, currentOption);
    }

    currentHeaderData.forEach((header: IHeader) => {
      header.headers.forEach((grouping: IGrouping) => {
        grouping.columns.forEach((column: IColumn) => {
          if (column.name === currentColumn.name) {
            column.options === undefined
              ? (column.options = [newOption])
              : (column.options = column.options.concat(newOption));
          }
        });
      });
    });

    props.updateHeaderData(currentHeaderData);
  }

  function editColumn(updatedColumn: IColumn, initialColumn: IColumn) {
    let currentHeaderData = Object.create(props.headers) as [IHeader];

    currentHeaderData.forEach((header: IHeader) => {
      header.headers.forEach((grouping: IGrouping) => {
        grouping.columns.forEach((column: IColumn, index: number) => {
          if (column.name === initialColumn.name) {
            grouping.columns[index] = updatedColumn;
          }
        });
      });
    });

    props.updateHeaderData(currentHeaderData);
  }

  function findColumn(columnToFind: IColumn) {
    let doesExist = false;

    props.headers.forEach((header: IHeader) => {
      header.headers.forEach((grouping: IGrouping) => {
        grouping.columns.forEach((column: IColumn) => {
          if (column.name === columnToFind.name) {
            doesExist = true;
          }
        });
      });
    });

    return doesExist;
  }

  function moveColumn(columnToMove: IColumn, direction: MoveDirection) {
    let currentHeaderData = Object.create(props.headers) as [IHeader];

    currentHeaderData.forEach((header: IHeader) => {
      header.headers.forEach((grouping: IGrouping) => {
        for (let column of grouping.columns) {
          if (column.name === columnToMove.name) {
            let index = grouping.columns.indexOf(column);

            if (direction === MoveDirection.Down) {
              if (index + 1 < grouping.columns.length) {
                [grouping.columns[index], grouping.columns[index + 1]] = [
                  grouping.columns[index + 1],
                  grouping.columns[index],
                ];
              }
            }

            if (direction === MoveDirection.Up) {
              if (index - 1 >= 0) {
                [grouping.columns[index], grouping.columns[index - 1]] = [
                  grouping.columns[index - 1],
                  grouping.columns[index],
                ];
              }
            }
            break;
          }
        }
      });
    });

    props.updateHeaderData(currentHeaderData);
  }

  function moveHeader(headerToMove: IGrouping, moveDirection: MoveDirection) {
    let currentHeaderData = Object.create(props.headers) as [IHeader];

    let currentHeader = currentHeaderData.filter((x: IHeader) => {
      return x.name === "firstHeader";
    })[0].headers;

    let moveIndex = currentHeader.indexOf(headerToMove);

    if (moveDirection === MoveDirection.Down) {
      if (moveIndex + 1 < currentHeader.length) {
        [currentHeader[moveIndex], currentHeader[moveIndex + 1]] = [
          currentHeader[moveIndex + 1],
          currentHeader[moveIndex],
        ];
      }
    }

    if (moveDirection === MoveDirection.Up) {
      if (moveIndex - 1 >= 0) {
        [currentHeader[moveIndex], currentHeader[moveIndex - 1]] = [
          currentHeader[moveIndex - 1],
          currentHeader[moveIndex],
        ];
      }
    }

    props.updateHeaderData(currentHeaderData);
  }

  function removeColumn(toRemove: IColumn) {
    let currentHeaderData = Object.create(props.headers) as [IHeader];

    currentHeaderData.forEach((header: IHeader) => {
      header.headers.forEach((grouping: IGrouping) => {
        grouping.columns = grouping.columns.filter((column: IColumn) => {
          return column.name !== toRemove.name;
        });
      });
    });

    props.updateHeaderData(currentHeaderData);
  }

  function removeOption(
    currentColumn: IColumn,
    optionToRemove: IColumnOptions
  ) {
    let currentHeaderData = Object.create(props.headers) as [IHeader];

    currentHeaderData.forEach((header: IHeader) => {
      header.headers.forEach((grouping: IGrouping) => {
        grouping.columns.forEach((column: IColumn) => {
          if (column.name === currentColumn.name) {
            column.options = column.options?.filter(
              (option: IColumnOptions) => {
                return option.name !== optionToRemove.name;
              }
            );
          }
        });
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

      {props.headers.map((header: IHeader) => {
        return header.headers.map((grouping: IGrouping, key: number) => {
          return (
            <React.Fragment key={key}>
              <SideBarElement
                key={key}
                columnOrGrouping={grouping}
                removeColumn={() => removeGroup(grouping.name)}
                editColumn={editColumn}
                moveColumn={moveColumn}
                findColumn={findColumn}
                addOption={addOptionToColumn}
                removeOption={removeOption}
                moveGrouping={moveHeader}
              ></SideBarElement>
              {grouping.columns.map((column: IColumn, key: number) => {
                return (
                  <SideBarElement
                    key={key}
                    columnOrGrouping={column}
                    removeColumn={removeColumn}
                    editColumn={editColumn}
                    moveColumn={moveColumn}
                    findColumn={findColumn}
                    addOption={addOptionToColumn}
                    removeOption={removeOption}
                    moveGrouping={moveHeader}
                  ></SideBarElement>
                );
              })}

              <SideBarColumnAdd
                header={grouping.name}
                addColumn={addColumn}
                addColumnOption={addOptionToColumn}
                findColumn={findColumn}
                removeOption={removeOption}
              ></SideBarColumnAdd>
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
