import styled from "styled-components";

export const StyledSideBar = styled.div<{ isVisible: boolean }>`
  color: white;
  background-color: black;
  width: 20%;
  padding: 0.8rem;
  display: ${(props) => (props.isVisible ? "block" : "none")};

  .fa {
    color: white;
    cursor: pointer;
  }
`;
