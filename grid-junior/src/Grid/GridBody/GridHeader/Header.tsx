import "./Header.scss";
import { useContext } from "react";
import { useState } from "react";
import Column from "./Column";
import Title from "./Title";
import { GridContext } from "../../Grid";
import { IColumnContainer } from "../../Interfaces/GridBody/IColumnContainer";
import { IColumn } from "../../Interfaces/GridBody/IColumn";
import { IFilter } from "../../Interfaces/GridTools/IFilter";

function Header() {
  const gridContext = useContext(GridContext);
  const [standardFilter, setStandardFilter] = useState<IFilter>({
    name: "",
    type: "",
    value: "",
    operator: 0,
    selection: [""],
  });

  function update_filter(updated_filter: IFilter) {
    setStandardFilter(updated_filter);
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
