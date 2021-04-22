import React, { useContext } from "react";
import Column from "./Column";
import Title from "./Title";
import { GridContext } from "../../Grid";
import { IColumnContainer } from "../../Interfaces/GridBody/IColumnContainer";
import { IColumn } from "../../Interfaces/GridBody/IColumn";
import "./Header.scss";
import { useState } from "react";

function Header() {
  const gridContext = useContext(GridContext);
  const [standardFilter, setStandardFilter] = useState<IColumn>({
    name: "",
    size: "",
    type: "",
    value: "",
    operator: 0,
  });

  function update_filter(updated_filter: IColumn) {
    setStandardFilter(updated_filter);
  }

  const [selectionFilter, setSelectionFilter] = useState<string[]>([]);

  function update_selection(updated_selection: string[]) {
    setSelectionFilter(updated_selection);
    gridContext.setSelectionFilters(updated_selection);
  }

  return (
    <div className="grid-header">
      {gridContext.allHeaders
        .find(
          (headerContainer) =>
            headerContainer.name === gridContext.visibleHeader
        )!
        .headers.map((value: IColumnContainer, key: number) => {
          return (
            <div className="header-container" key={key}>
              <Title
                key={key}
                title={value.name}
                columns={value.columns}
                filter={standardFilter}
                selectionFilter={selectionFilter}
                update_selection={update_selection}
                update_filter={update_filter}
              />
              <div className="column-container">
                {value.columns.map((value: IColumn, key: number) => {
                  return (
                    <Column
                      key={key}
                      name={value.name}
                      size={value.size}
                      type={value.type}
                      toggled={false}
                      filter={standardFilter}
                      operator={standardFilter.operator}
                      selectionFilter={selectionFilter}
                      update_selection={update_selection}
                      update_filter={update_filter}
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
