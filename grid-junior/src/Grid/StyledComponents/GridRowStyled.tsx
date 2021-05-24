import styled from "styled-components";
import { IColumn } from "../Interfaces/GridBody/IColumn";
import { IHeader } from "../Interfaces/GridBody/IHeader";
import ScreenThresholds from "./ScreenThresholds";
import { MinimumVisibility } from "../CustomTypes/ColumnVisibility";
import { ColumnCollapsable } from "../CustomTypes/ColumnCollapsable";
import { ColumnTypes } from "../CustomTypes/ColumnTypes";
import { ColumnSizes } from "../CustomTypes/ColumnSizes";

const GridRowStyled = styled.div<{
  inputColumns: IColumn[];
  inputTitles: IHeader[];
}>`
  grid-column: span ${(props) => props.inputColumns.length};
  display: grid;
  border-bottom: solid;
  border-width: thin;
  border-color: darkgray;
  background-color: #404444;
  color: white;

  @media (min-width: ${ScreenThresholds.LargeScreen + "rem"}) {
    grid-template-columns: ${(props) =>
      props.inputColumns.map((x) => {
        return x.size + " ";
      })};
  }

  @media (min-width: ${ScreenThresholds.MediumScreen +
    "rem"}) and (max-width: ${ScreenThresholds.LargeScreen + "rem"}) {
    grid-template-columns: ${(props) =>
      props.inputColumns
        .filter((x: IColumn) => {
          return x.minVisibility !== MinimumVisibility.MaxVisible;
        })
        .map((x) => {
          return x.size + " ";
        })};

    .${MinimumVisibility.MaxVisible.toString()} {
      display: none;
    }
  }

  @media (min-width: ${ScreenThresholds.SmallScreen +
    "rem"}) and (max-width: ${ScreenThresholds.MediumScreen + "rem"}) {
    grid-template-columns: ${(props) =>
      props.inputColumns
        .filter((x: IColumn) => {
          return (
            x.minVisibility !== MinimumVisibility.MaxVisible &&
            x.minVisibility !== MinimumVisibility.LargeVisible
          );
        })
        .map((x: IColumn) => {
          return x.type === ColumnTypes.select
            ? ColumnSizes.IconColumn + " "
            : x.size + " ";
        })};

    .${MinimumVisibility.MaxVisible.toString()} {
      display: none;
    }

    .${MinimumVisibility.LargeVisible.toString()} {
      display: none;
    }

    .selection-cell {
      .selection-cell-text {
        display: none;
      }
    }
  }

  @media (max-width: ${ScreenThresholds.SmallScreen + "rem"}) {
    grid-template-columns: ${(props) => {
      return props.inputColumns[0].type === ColumnTypes.select &&
        props.inputColumns.length > 1
        ? ColumnSizes.IconColumn + " " + ColumnSizes.StandardColumn
        : ColumnSizes.StandardColumn;
    }};

    .${MinimumVisibility.MaxVisible.toString()} {
      display: none;
    }

    .${MinimumVisibility.LargeVisible.toString()} {
      display: none;
    }

    .${MinimumVisibility.MediumVisible.toString()} {
      display: none;
    }

    .selection-cell {
      .selection-cell-text {
        display: none;
      }
    }

    .fixed-column {
      .cell {
        margin: 0rem;
        font-size: x-large;
      }

      .selection-cell {
        margin-left: 0.5rem;
      }
    }

    .collapsable-column {
      .cell {
        margin: 0rem;
      }
    }
  }
`;

export default GridRowStyled;
