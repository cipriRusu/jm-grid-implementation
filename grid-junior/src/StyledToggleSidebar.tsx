import styled from "styled-components";

export const StyledToggleSidebar = styled.div<{ isVisible: boolean }>`
  background-color: black;
  flex: 0;
  padding: 0.8rem;
  display: ${(props) => (props.isVisible ? "none" : "block")};

  .fa {
    color: white;
    cursor: pointer;
  }
`;
