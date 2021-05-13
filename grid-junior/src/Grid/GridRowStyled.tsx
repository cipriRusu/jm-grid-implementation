import styled from "styled-components";
import { IColumn } from "./Interfaces/GridBody/IColumn";

const GridRowStyled = styled.div<{
  inputColumns: IColumn[];
  inputSizes: { [key: string]: string };
}>`
  grid-column: span ${(props) => props.inputColumns.length};
  display: grid;
  grid-template-columns: ${(props) =>
    props.inputColumns.map((x) => {
      return props.inputSizes[x.size] + " ";
    })};

  @media (max-width: 50rem) {
    grid-template-columns: ${(props) =>
      props.inputColumns
        .filter((x: IColumn) => x.type !== "boolean" && x.type !== "select")
        .map((x) => {
          return props.inputSizes[x.size] + " ";
        })};

    .boolean-cell {
      display: none;
    }

    .selection-cell {
      display: none;
    }
  }

  @media (max-width: 30rem) {
    grid-template-columns: 1fr;
    grid-template-rows: ${(props) =>
      props.inputColumns
        .filter((x: IColumn) => x.type === undefined && x.type !== "date-cell")
        .map((x) => {
          return props.inputSizes[x.size] + " ";
        })};

    .date-cell {
      display: none;
    }
  }
`;

export default GridRowStyled;
