import styled from "styled-components";
import { IColumn } from "../Interfaces/GridBody/IColumn";
import { IHeader } from "../Interfaces/GridBody/IHeader";
import ScreenThresholds from "./ScreenThresholds";
import { MinimumVisibility } from "../CustomTypes/ColumnVisibility";
import { ColumnTypes } from "../CustomTypes/ColumnTypes";

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
        return `${x.size + " "}`;
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
          return `${x.size + " "}`;
        })};

    .${MinimumVisibility.MaxVisible.toString()} {
      display: none;
    }
  }

  @media (min-width: ${ScreenThresholds.SmallScreen +
    "rem"}) and (max-width: ${ScreenThresholds.MediumScreen + "rem"}) {
    grid-template-columns: ${(props) => {
      let columns = "";

      props.inputTitles[0].headers.map((x) => {
        return (columns = columns.concat(`${"50% "}`));
      });

      if (props.inputColumns[0].type === ColumnTypes.select) {
        columns = `${"5% "}`.concat(columns);
      }

      return columns;
    }};

    grid-template-rows: ${(props) =>
      props.inputTitles[0].headers.map((x) => {
        return `${"1fr "}`;
      })};

    grid-auto-flow: column;

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
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    .${MinimumVisibility.MaxVisible.toString()} {
      display: none;
    }

    .${MinimumVisibility.LargeVisible.toString()} {
      display: none;
    }

    .${MinimumVisibility.MediumVisible.toString()} {
      display: none;
    }

    .collapsable-column {
      width: 100%;
      .cell {
        margin: 0rem;
        margin-left: 0.5rem;
      }
    }

    .fixed-column {
      .cell {
        margin: 0.5rem;
        font-size: 1.2rem;
      }
    }

    .selection-cell {
      .selection-cell-text {
        display: none;
      }
    }
  }
`;

export default GridRowStyled;
