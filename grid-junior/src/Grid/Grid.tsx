import React from "react";
import "./Grid.scss";
import Column from "./GridBody/GridHeader/Column";
import RowContainer from "./GridBody/GridRows/RowContainer";
import Title from "./GridBody/GridHeader/Title";
import { GridContext } from "./Main";
import { IColumn } from "./Interfaces/GridBody/IColumn";
import { IColumnContainer } from "./Interfaces/GridBody/IColumnContainer";

export default function Grid(props: any) {
  return (
    <GridContext.Consumer>
      {(context) => {
        return (
          <div className="main-grid">
            <div className="main-header">
              {context.allHeaders[0].headers.map(
                (value: IColumnContainer, key: number) => {
                  return (
                    <div className="main-grid-title">
                      <Title
                        key={key}
                        title={value.name}
                        columns={value.columns}
                      />
                      <div className="main-grid-columns">
                        {value.columns.map((value: IColumn, key: number) => {
                          return (
                            <div>
                              <Column
                                key={key}
                                name={value.name}
                                size={value.size}
                                type={value.type}
                                toggled={false}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                }
              )}
            </div>
            <RowContainer
              content={props.content}
              pageSize={props.pageSize}
              pageCache={props.pageCache}
            />
          </div>
        );
      }}
    </GridContext.Consumer>
  );
}
