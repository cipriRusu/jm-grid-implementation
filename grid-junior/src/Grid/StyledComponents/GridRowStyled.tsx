import styled from "styled-components";
import { IColumn } from "../Interfaces/GridBody/IColumn";
import { IHeader } from "../Interfaces/GridBody/IHeader";
import ScreenThresholds from "./ScreenThresholds";
import { ColumnSizes } from "../CustomTypes/ColumnSizes";
import { MinimumVisibility } from "../CustomTypes/ColumnVisibility";
import { ColumnCollapsable } from "../CustomTypes/ColumnCollapsable";

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

  @media (min-width: ${ScreenThresholds.LargeScreen} + "rem") {
    .${MinimumVisibility.MaxVisible.toString()} {
      display: block;
    }

    .${MinimumVisibility.LargeVisible.toString()} {
      display: none;
    }

    .${MinimumVisibility.MediumVisible.toString()} {
      display: none;
    }

    .${MinimumVisibility.SmallVisible.toString()} {
      display: none;
    }
  }

  @media (max-width: ${ScreenThresholds.LargeScreen + "rem"}) {
    .${MinimumVisibility.MaxVisible.toString()} {
      display: none;
    }

    .${MinimumVisibility.LargeVisible.toString()} {
      display: none;
    }

    .${MinimumVisibility.MediumVisible.toString()} {
      display: none;
    }

    .${MinimumVisibility.SmallVisible.toString()} {
      display: none;
    }

    grid-template-columns: ${(props) =>
      props.inputColumns
        .filter((x: IColumn) => {
          return x.size !== ColumnSizes.SmallColumn;
        })
        .map((x) => {
          return x.size + " ";
        })};

    .${MinimumVisibility.LargeVisible.toString()} {
      display: block;
    }
  }

  @media (max-width: ${ScreenThresholds.MediumScreen + "rem"}) {
    .${MinimumVisibility.MaxVisible.toString()} {
      display: none;
    }

    .${MinimumVisibility.LargeVisible.toString()} {
      display: none;
    }

    .${MinimumVisibility.MediumVisible.toString()} {
      display: none;
    }

    .${MinimumVisibility.SmallVisible.toString()} {
      display: none;
    }

    grid-template-columns: ${(props) => {
      return props.inputTitles[0].headers.map((x: any) => {
        return ColumnSizes.StandardColumn + " ";
      });
    }};

    grid-template-rows: ${(props) => {
      return props.inputTitles[0].headers.map((x: any) => {
        return ColumnSizes.StandardColumn + " ";
      });
    }};

    .${MinimumVisibility.MediumVisible.toString()} {
      display: block;
    }

    grid-auto-flow: column;
  }

  @media (max-width: ${ScreenThresholds.SmallScreen + "rem"}) {
    grid-auto-flow: row;
    .${MinimumVisibility.MaxVisible.toString()} {
      display: none;
    }

    ${MinimumVisibility.LargeVisible.toString()} {
      display: none;
    }

    .${MinimumVisibility.MediumVisible.toString()} {
      display: none;
    }

    .${MinimumVisibility.SmallVisible.toString()} {
      display: block;
    }

    .${ColumnCollapsable.fixed.toString()} {
      grid-row: 1;
      .selection-cell {
        .selection-cell-text {
          display: none;
        }
      }
    }

    .fixed-column {
      font-size: x-large;
    }

    .${ColumnCollapsable.collapsable.toString()} {
      grid-column: -1 / 1;
    }
  }
`;

export default GridRowStyled;
