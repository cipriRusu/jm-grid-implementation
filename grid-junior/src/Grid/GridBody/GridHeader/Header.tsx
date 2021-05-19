import "./Header.scss";
import { useContext } from "react";
import Column from "./Column";
import Title from "./Title";
import { GridContext } from "../../Grid";
import { IColumns } from "../../Interfaces/GridBody/IColumns";
import { IColumn } from "../../Interfaces/GridBody/IColumn";

function Header() {
  const gridContext = useContext(GridContext);

  return (
    <div className="grid-header">
      {gridContext.allHeaders[0].headers.map((value: IColumns, key: number) => {
        return (
          <div className="header-container" key={key}>
            <Title key={key} title={value.name} columns={value.columns} />
            <div className="column-container">
              {value.columns.map((value: IColumn, key: number) => {
                return (
                  <Column
                    key={key}
                    name={value.name}
                    size={value.size}
                    type={value.type}
                    toggled={false}
                    visibility={value.visibility}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Header;
