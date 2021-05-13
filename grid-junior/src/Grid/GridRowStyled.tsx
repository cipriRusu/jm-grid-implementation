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
`;

export default GridRowStyled;
