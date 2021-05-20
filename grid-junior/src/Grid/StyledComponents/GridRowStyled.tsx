import styled from "styled-components";
import { IColumn } from "../Interfaces/GridBody/IColumn";
import { IHeader } from "../Interfaces/GridBody/IHeader";
import ScreenThresholds from "./ScreenThresholds";
import { ColumnSizes } from "../CustomTypes/ColumnSizes";
import { ColumnVisibility } from "../CustomTypes/ColumnVisibility";

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
    .${ColumnVisibility.MaxVisible.toString()} {
      display: block;
    }

    .${ColumnVisibility.LargeVisible.toString()} {
      display: none;
    }

    .${ColumnVisibility.MediumVisible.toString()} {
      display: none;
    }

    .${ColumnVisibility.SmallVisible.toString()} {
      display: none;
    }
  }

  @media (max-width: ${ScreenThresholds.LargeScreen + "rem"}) {
    .${ColumnVisibility.MaxVisible.toString()} {
      display: none;
    }

    .${ColumnVisibility.LargeVisible.toString()} {
      display: none;
    }

    .${ColumnVisibility.MediumVisible.toString()} {
      display: none;
    }

    .${ColumnVisibility.SmallVisible.toString()} {
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

    .${ColumnVisibility.LargeVisible.toString()} {
      display: block;
    }
  }

  @media (max-width: ${ScreenThresholds.MediumScreen + "rem"}) {
    .${ColumnVisibility.MaxVisible.toString()} {
      display: none;
    }

    .${ColumnVisibility.LargeVisible.toString()} {
      display: none;
    }

    .${ColumnVisibility.MediumVisible.toString()} {
      display: none;
    }

    .${ColumnVisibility.SmallVisible.toString()} {
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

    .${ColumnVisibility.MediumVisible.toString()} {
      display: block;
    }

    grid-auto-flow: column;
  }

  @media (max-width: ${ScreenThresholds.SmallScreen + "rem"}) {
    grid-auto-flow: row;
    .${ColumnVisibility.MaxVisible.toString()} {
      display: none;
    }

    ${ColumnVisibility.LargeVisible.toString()} {
      display: none;
    }

    .${ColumnVisibility.MediumVisible.toString()} {
      display: none;
    }

    .${ColumnVisibility.SmallVisible.toString()} {
      display: block;
    }
  }
`;

export default GridRowStyled;
