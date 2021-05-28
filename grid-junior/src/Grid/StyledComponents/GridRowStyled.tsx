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
  :hover {
    background-color: #595f5f;
    cursor: pointer;
  }

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
      let columns = Array<string>();

      if (props.inputColumns[0].type === ColumnTypes.select) {
        props.inputTitles[0].headers.map((x) => {
          return columns.push("50%");
        });
        columns.unshift("5%");
        columns.pop();
        columns.push("45%");
      } else {
        props.inputTitles[0].headers.map((x) => {
          return columns.push("50%");
        });
      }

      return columns.join(" ");
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

    .fixed-column {
      .cell {
        margin: 0px;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
      }
    }

    .collapsable-column {
      .cell {
        margin: 0px;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
      }
    }

    .selection-cell {
      padding-left: 0.5rem;
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
      padding-bottom: 0.5rem;
      padding-left: 1.6rem;
      width: 100%;
      .cell {
        margin: 0px;
        padding-left: 0.5rem;
      }
    }

    .fixed-column {
      padding-top: 0.5rem;
      padding-right: 0.5rem;
      padding-bottom: 0.5rem;
      .cell {
        margin: 0px;
        font-size: 1.2rem;
      }
    }

    .selection-cell {
      margin: 0px;
      padding-left: 0.5rem;
      .selection-cell-text {
        display: none;
      }
    }
  }
`;

export default GridRowStyled;
