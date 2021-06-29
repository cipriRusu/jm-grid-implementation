import styled from "styled-components";

const StyledColumn = styled.div`
  .column-container {
    .fa {
      text-decoration: none;
      margin-right: 5px;
      margin-top: 5px;
    }

    .column {
      display: grid;
      grid-auto-flow: column;
      cursor: pointer;
      #text {
        color: white;
      }

      &:hover {
        .filter-icon-column {
          color: white;
        }
      }

      .hidden-icon {
        visibility: hidden;
      }

      .filter-icon-column {
        margin-left: auto;
        color: transparent;
      }

      .filter-icon-column-visible {
        margin-left: auto;
        color: white;
      }

      .filter {
        margin-left: auto;
        &:focus-within {
          .filter-icon-column {
            color: white;
          }
        }
      }

      .sort {
        color: white;
        width: 90%;
      }

      &:hover {
        background-image: linear-gradient(#080808, #3d3d3d);
      }
    }

    .filter-dropdown {
      display: none;
      position: absolute;
      background-color: white;
      border-radius: 0.25rem;
      color: black;
      width: 200px;
    }

    .right-side {
      left: 80%;
    }

    .left-side {
      right: 0%;
    }

    .show {
      display: block;
    }

    .sort-icon {
      color: white;
    }

    .dropdown {
      width: 100%;
    }
  }

  @media (max-width: 50rem) {
    .column-container {
      .filter-dropdown {
        display: none;
      }
    }
  }
`;

export default StyledColumn;
