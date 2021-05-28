import styled from "styled-components";
import { IColumn } from "../Interfaces/GridBody/IColumn";

const GridRowExtendedStyled = styled.div<{
  inputColumns: IColumn[];
}>`
  display: none;
  grid-column: 1 / ${(props) => props.inputColumns.length};
  margin-left: 1rem;
  margin-right: 1rem;
`;

export default GridRowExtendedStyled;
