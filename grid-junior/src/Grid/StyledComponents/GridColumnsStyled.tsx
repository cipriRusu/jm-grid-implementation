import { IColumn } from "../Interfaces/GridBody/IColumn";
import styled from "styled-components";
import ScreenThresholds from "./ScreenThresholds";
import { ColumnSizes } from "../CustomTypes/ColumnSizes";
import { ColumnVisibility } from "../CustomTypes/ColumnVisibility";

export const MainGridColumnsStyled = styled.div<{
  columns: IColumn[];
  inputSizes: { [key: string]: string };
}>`
  display: grid;
  grid-column: span ${(props) => props.columns.length};
  white-space: nowrap;
  grid-template-columns: ${(props) =>
    props.columns.map((x) => {
      return x.size + " ";
    })};

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
      props.columns
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
  }

  @media (max-width: ${ScreenThresholds.SmallScreen + "rem"}) {
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
  }
`;
