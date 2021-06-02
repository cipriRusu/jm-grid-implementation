import styled from "styled-components";

export const StyledSideBar = styled.div<{ isVisible: boolean }>`
  color: white;
  background-color: black;
  width: 20%;
  padding: 0.8rem;
  display: ${(props) => (props.isVisible ? "block" : "none")};
  overflow-y: scroll;
  height: 38rem;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  .fa {
    color: white;
    cursor: pointer;
  }
`;
