import styled from "styled-components";
import { IColumn } from "../Interfaces/GridBody/IColumn";
import { IHeader } from "../Interfaces/GridBody/IHeader";
import ScreenThresholds from "./ScreenThresholds";
import HEADER_SIZES from "../HeaderSizes";

const GridRowStyled = styled.div<{
  inputColumns: IColumn[];
  inputSizes: { [key: string]: string };
  inputTitles: IHeader[];
}>`
  grid-column: span ${(props) => props.inputColumns.length};

  display: grid;
  grid-template-columns: ${(props) =>
    props.inputColumns.map((x) => {
      return props.inputSizes[x.size] + " ";
    })};
  border-bottom: solid;
  border-width: thin;
  border-color: darkgray;

  @media (max-width: ${ScreenThresholds.LargeScreen + "rem"}) {
    grid-template-columns: ${(props) =>
      props.inputColumns
        .filter((x: IColumn) => {
          return x.size !== "SmallColumn";
        })
        .map((x) => {
          return props.inputSizes[x.size] + " ";
        })};
  }

  @media (max-width: ${ScreenThresholds.MediumScreen + "rem"}) {
    grid-template-columns: ${(props) => {
      return props.inputTitles[0].headers.map((x: any) => {
        return HEADER_SIZES.StandardColumn + " ";
      });
    }};

    .status {
      display: none;
    };

    .data {
      display: none;
    };

    .telefon {
      grid-row: 1;
      grid-column: 2;
    };
  }

  @media (max-width: ${ScreenThresholds.SmallScreen}) {
    .nume {
      grid-column: 2;
    }
  }
`;

export default GridRowStyled;
