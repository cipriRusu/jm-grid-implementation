import styled from "styled-components";
import { IColumn } from "./Interfaces/GridBody/IColumn";

const MainGrid = styled.div<{
  inputColumns: IColumn[];
  inputSizes: { [key: string]: string };
}>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.inputColumns.map((x) => {
      return props.inputSizes[x.size] + " ";
    })};
  grid-template-rows: repeat(22, 1fr);
  height: 38rem;
  overflow-y: scroll;
  background-color: gray;

  @media (max-width: 50rem) {
    grid-template-columns: repeat(2, minmax(260px, 1fr));
  }

  @media (max-width: 30rem) {
    grid-template-columns: 1fr;
  }
`;

export default MainGrid;
