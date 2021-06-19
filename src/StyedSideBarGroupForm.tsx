import styled from "styled-components";

export const StyledSideBarGroupForm = styled.div<{ isToggled: boolean }>`
  display: ${(props) => (props.isToggled ? "block" : "none")};
  border: 1px solid white;
  padding: 0.5rem;
`;
