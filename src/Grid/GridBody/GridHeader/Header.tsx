import React, { useContext } from "react";
import Column from "./Column";
import Title from "./Title";
import { GridContext } from "../../Grid";
import { IGrouping } from "../../Interfaces/GridBody/IGrouping";
import { IColumn } from "../../Interfaces/GridBody/IColumn";
import { IHeader } from "../../Interfaces/GridBody/IHeader";
import StyledHeader from "./StyledHeader";

const HEADERTODISPLAY = "firstHeader";

function Header() {
  const gridContext = useContext(GridContext);

  return (
    <StyledHeader>
      <div className="grid-header">
        {gridContext.allHeaders
          .filter((x: IHeader) => {
            x.name === HEADERTODISPLAY;
          })[0]
          .headers.map((value: IGrouping, key: number) => {
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
                        collapsable={value.collapsable}
                        minVisibility={value.minVisibility}
                        side={"left-side"}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>
    </StyledHeader>
  );
}

export default Header;
