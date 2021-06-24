import styled from "styled-components";

const StyledTitle = styled.div`
  .title-container {
    .title {
      width: 95%;
      justify-content: space-between;
      border-bottom: 0.1rem solid white;
      color: white;

      p {
        margin: 0px;
        margin-left: 5px;
      }

      .icon-header {
        color: white;
        display: none;
      }

      .title-bar {
        width: 100%;
        display: flex;
        align-items: center;
        cursor: auto;
        p {
          cursor: default;
        }

        &:hover {
          .filter-icon-hoverable {
            color: white;
          }
        }

        &:focus-within {
          .filter-icon-hoverable {
            color: white;
          }
        }

        .filter-icon {
          color: white;
          margin-left: auto;
        }

        .hidden-icon {
          visibility: hidden;
          color: white;
        }

        .filter-icon-hoverable {
          color: transparent;
          margin-left: auto;
        }
      }
    }

    .title-dropdown {
      display: none;
      position: absolute;
      right: 0.8rem;
    }

    .show {
      display: block;
    }
  }

  @media (min-width: 50rem) {
    .title-container {
      .title {
        .title-bar {
          .sort-icon-title {
            visibility: hidden;
          }

          .filter-icon {
            visibility: hidden;
          }

          .filter-icon-hoverable {
            visibility: hidden;
          }
        }
      }

      .title-dropdown {
        display: none;
      }
    }
  }
`;

export default StyledTitle;
