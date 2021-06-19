import styled from "styled-components";

const StyledSideBarColumnOption = styled.div<{ isVisible: boolean }>`
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  flex-direction: column;
  border-top: solid thin white;
  border-bottom: solid thin white;
  margin-top: 1rem;
  padding: 0.5rem;
  background-color: black;
`;

export default StyledSideBarColumnOption;
