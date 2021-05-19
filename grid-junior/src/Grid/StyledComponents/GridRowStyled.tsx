import styled from "styled-components";
import { IColumn } from "../Interfaces/GridBody/IColumn";
import { IHeader } from "../Interfaces/GridBody/IHeader";
import ScreenThresholds from "./ScreenThresholds";
import { ColumnSizes } from "../ColumnSizes";

const GridRowStyled = styled.div<{
  inputColumns: IColumn[];
  inputSizes: { [key: string]: string };
  inputTitles: IHeader[];
}>`
  grid-column: span ${(props) => props.inputColumns.length};

  display: grid;
  grid-template-columns: ${(props) =>
    props.inputColumns.map((x) => {
      return x.size + " ";
    })};
  border-bottom: solid;
  border-width: thin;
  border-color: darkgray;
  background-color: #404444;
  color: white;

  @media (max-width: ${ScreenThresholds.LargeScreen + "rem"}) {
    grid-template-columns: ${(props) =>
      props.inputColumns
        .filter((x: IColumn) => {
          return x.size !== ColumnSizes.SmallColumn;
        })
        .map((x) => {
          return x.size + " ";
        })};
  }

  @media (max-width: ${ScreenThresholds.MediumScreen + "rem"}) {
    grid-template-columns: ${(props) => {
      return props.inputTitles[0].headers.map((x: any) => {
        return ColumnSizes.StandardColumn + " ";
      });
    }};

    .status {
      display: none;
    }

    .data {
      display: none;
    }

    .telefon {
      grid-row: 1;
      grid-column: 2;
    }
  }

  @media (max-width: ${ScreenThresholds.SmallScreen + "rem"}) {
    .prenume {
      font-size: x-large;
      grid-column: 1;
      grid-row: 1;

      .cell {
        margin: 0.5rem;
      }
    }

    .nume {
      font-size: x-large;
      grid-column: 2;
      grid-row: 1;
      .cell {
        margin: 0.5rem;
      }
    }

    .email {
      grid-row: 2;
      grid-column: 1 / span 2;
      .cell {
        margin: 0.5rem;
      }
    }

    .telefon {
      grid-row: 3;
      grid-column: 1 / span 2;
      .cell {
        margin: 0.5rem 0rem 0.5rem 0.5rem;
      }
    }
  }
`;

export default GridRowStyled;
