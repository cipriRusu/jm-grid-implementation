import styled from "styled-components";

const StyledHeader = styled.div`
  .grid-header {
    display: flex;
    background-color: rgb(3, 3, 22);
    padding: 0.5rem 0.5rem 0rem 0.5rem;
    .header-container {
      color: white;
      width: 120rem;
      flex-direction: column;

      .column-container {
        margin-bottom: 1px;
        display: flex;
      }
    }
  }

  @media (max-width: 50rem) {
    .grid-header {
      padding: 0.5rem 0.5rem 0.5rem 0.5rem;
      .header-container {
        .column-container {
          display: none;
        }
      }

      .header-container {
        .header-contents {
          cursor: pointer;
        }
      }
    }

    .grid-header {
      .header-container {
        .header-title {
          border-bottom: none;
        }
      }
    }

    .grid-header {
      .header-container {
        .icon-header {
          display: block;
        }
      }
    }
  }
`;

export default StyledHeader;
