import styled from "styled-components";
import { MinimumVisibility } from "../CustomTypes/ColumnVisibility";
import { IColumn } from "../Interfaces/GridBody/IColumn";
import ScreenThresholds from "./ScreenThresholds";

const GridRowExtendedStyled = styled.div<{
  inputColumns: IColumn[];
}>`
  display: none;
  grid-column: 1 / ${(props) => props.inputColumns.length};
  margin-left: 1rem;
  margin-right: 1rem;
  color: white;

  @media (min-width: ${ScreenThresholds.LargeScreen + "rem"}) {
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
  }

  @media (min-width: ${ScreenThresholds.MediumScreen +
    "rem"}) and (max-width: ${ScreenThresholds.LargeScreen + "rem"}) {
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

  @media (min-width: ${ScreenThresholds.SmallScreen +
    "rem"}) and (max-width: ${ScreenThresholds.MediumScreen + "rem"}) {
    .${MinimumVisibility.MaxVisible.toString()} {
      display: block;
    }
    .${MinimumVisibility.LargeVisible.toString()} {
      display: block;
    }
    .${MinimumVisibility.MediumVisible.toString()} {
      display: none;
    }
    .${MinimumVisibility.SmallVisible.toString()} {
      display: none;
    }
  }

  @media (max-width: ${ScreenThresholds.SmallScreen + "rem"}) {
    .${MinimumVisibility.MaxVisible.toString()} {
      display: block;
    }
    .${MinimumVisibility.LargeVisible.toString()} {
      display: block;
    }
    .${MinimumVisibility.MediumVisible.toString()} {
      display: block;
    }
    .${MinimumVisibility.SmallVisible.toString()} {
      display: none;
    }
  }
`;

export default GridRowExtendedStyled;
