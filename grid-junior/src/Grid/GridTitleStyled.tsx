import styled from "styled-components";
import ScreenThresholds from "./ScreenThresholds";

const GridTitle = styled.div<{ spanSize: number }>`
  grid-column: ${(props) => {
    return "span " + props.spanSize;
  }};

  //@media (max-width: ${ScreenThresholds.MediumScreen + "rem"}) {
    //grid-column: unset !important;
  //}

  @media (max-width: ${ScreenThresholds.SmallScreen + "rem"}) {
    display: none;
  }

  background-color: black;
`;

export default GridTitle;
