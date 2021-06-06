import styled from "styled-components";

const StyledSideBarColumnOptionAdd = styled.div<{ isVisible: boolean }>`
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  flex-direction: column;
`;

export default StyledSideBarColumnOptionAdd;
