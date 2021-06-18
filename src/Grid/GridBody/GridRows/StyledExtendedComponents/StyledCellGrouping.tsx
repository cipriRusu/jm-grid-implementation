import styled from "styled-components";
import { IGrouping } from "../../../Interfaces/GridBody/IGrouping";
import { IColumn } from "../../../Interfaces/GridBody/IColumn";
import { MinimumVisibility } from "../../../CustomTypes/ColumnVisibility";
import ScreenThresholds from "../../../StyledComponents/ScreenThresholds";
import { ColumnTypes } from "../../../CustomTypes/ColumnTypes";
import { IHeader } from "../../../Interfaces/GridBody/IHeader";

const StyledCellGrouping = styled.div<{
  grouping: IGrouping;
  allData: IHeader[];
}>`
  @media (min-width: ${ScreenThresholds.LargeScreen + "rem"}) {
    display: ${(props) => {
      return props.grouping.columns.filter((x: IColumn) => {
        return x.minVisibility !== MinimumVisibility.Invisible;
      }).length > 0
        ? "grid"
        : "none";
    }};

    grid-column: span
      ${(props) => {
        return props.grouping.columns.filter((x: IColumn) => {
          return x.minVisibility !== MinimumVisibility.Invisible;
        }).length;
      }};

    grid-template-columns: ${(props) => {
      return props.grouping.columns
        .filter((x: IColumn) => {
          return x.minVisibility !== MinimumVisibility.Invisible;
        })
        .map((x: IColumn) => {
          return x.size + " ";
        });
    }};
  }

  @media (min-width: ${ScreenThresholds.MediumScreen +
    "rem"}) and (max-width: ${ScreenThresholds.LargeScreen + "rem"}) {
    display: ${(props) => {
      return props.grouping.columns.filter((x: IColumn) => {
        return (
          x.minVisibility !== MinimumVisibility.Invisible &&
          x.minVisibility !== MinimumVisibility.MaxVisible
        );
      }).length > 0
        ? "grid"
        : "none";
    }};

    grid-column: span
      ${(props) => {
        return props.grouping.columns.filter((x: IColumn) => {
          return (
            x.minVisibility !== MinimumVisibility.Invisible &&
            x.minVisibility !== MinimumVisibility.MaxVisible
          );
        }).length;
      }};

    grid-template-columns: ${(props) => {
      return props.grouping.columns
        .filter((x: IColumn) => {
          return (
            x.minVisibility !== MinimumVisibility.Invisible &&
            x.minVisibility !== MinimumVisibility.MaxVisible
          );
        })
        .map((x: IColumn) => {
          return x.size + " ";
        });
    }};

    .${MinimumVisibility.MaxVisible} {
      display: none;
    }
  }

  @media (min-width: ${ScreenThresholds.SmallScreen +
    "rem"}) and (max-width: ${ScreenThresholds.MediumScreen + "rem"}) {
    display: ${(props) => {
      return props.grouping.columns.filter((x: IColumn) => {
        return (
          x.minVisibility !== MinimumVisibility.Invisible &&
          x.minVisibility !== MinimumVisibility.MaxVisible &&
          x.minVisibility !== MinimumVisibility.LargeVisible
        );
      }).length > 0
        ? "grid"
        : "none";
    }};

    grid-column: span
      ${(props) => {
        return props.grouping.columns.filter((x: IColumn) => {
          return (
            x.minVisibility !== MinimumVisibility.Invisible &&
            x.minVisibility !== MinimumVisibility.MaxVisible &&
            x.minVisibility !== MinimumVisibility.LargeVisible
          );
        }).length;
      }};

    grid-template-columns: ${(props) => {
      return props.grouping !== undefined &&
        props.grouping.columns.length > 0 &&
        props.grouping.columns[0].type === ColumnTypes.select &&
        props.grouping.columns[0].minVisibility !== MinimumVisibility.Invisible
        ? "10% 1fr"
        : "1fr";
    }};

    grid-template-rows: fit-content(20%);

    grid-column-gap: 0.5rem;

    .${MinimumVisibility.MaxVisible} {
      display: none;
    }

    .${MinimumVisibility.LargeVisible} {
      display: none;
    }

    .selection-cell-text {
      display: ${(props) => {
        return props.grouping.columns[0].type === ColumnTypes.select
          ? "none"
          : "block";
      }};
    }
  }

  @media (max-width: ${ScreenThresholds.SmallScreen + "rem"}) {
    display: flex;
    flex-wrap: wrap;

    .cell {
      margin: 0px;
      padding: 0.5rem;
    }

    .fixed-column {
      padding-left: ${(props) => {
        return props.allData.map((x: IHeader) => {
          return x.headers.map((y: IGrouping) => {
            return y.columns[0] !== undefined &&
              y.columns[0].type === ColumnTypes.select &&
              props.grouping.columns[0].type !== ColumnTypes.select
              ? "2rem"
              : "";
          });
        });
      }};
      .cell {
        padding-top: 0rem;
        padding-bottom: 0rem;
        font-weight: bold;
        font-size: 1.1rem;
      }
    }

    .collapsable-column {
      width: 100%;
      padding-left: ${(props) => {
        return props.allData.map((x: IHeader) => {
          return x.headers.map((y: IGrouping) => {
            return y.columns[0] !== undefined &&
              y.columns[0].type === ColumnTypes.select
              ? "2rem"
              : "";
          });
        });
      }};
      .cell {
        padding-top: 0rem;
        padding-bottom: 0rem;
      }
    }

    .selection-cell {
      .selection-cell-text {
        display: none;
      }
    }
  }
`;

export default StyledCellGrouping;
