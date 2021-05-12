import styled from "styled-components";

const GridTitle = styled.div<{ spanSize: number }>`
  grid-column: ${(props) => {
    return "span " + props.spanSize;
  }};

  @media (max-width: 50rem) {
    grid-column: unset !important;
  }

  @media (max-width: 30rem) {
    display: none;
  }

  background-color: black;
`;

export default GridTitle;
