import styled from "styled-components";

const StyledFilters = styled.div`
  //remove spinners from number input
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .filter-container {
    .single-filter-wrapper {
      position: relative;
    }
    .filter {
      min-width: auto;
      background-color: white;
      border-radius: 0.25rem;
      #header {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        background-color: rgb(3, 3, 22);
        color: white;
        cursor: pointer;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        border-radius: 0.25rem;

        .column-name {
          display: grid;
          grid-template-columns: auto 1fr auto;
          grid-column-gap: 0.4rem;
          width: 100%;
          height: calc(1.5em + 0.75rem + 2px);
          padding: 0.375rem 0.75rem;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.5;
          overflow: hidden;

          transition: border-color 0.15s ease-in-out,
            box-shadow 0.15s ease-in-out;

          &:hover {
            background-image: linear-gradient(#080808, #3d3d3d);
          }
          .sort-icon-container {
            [hidden] {
              display: block !important;
              visibility: hidden;
            }
          }
        }
      }

      .input-icons {
        position: absolute;
        right: 0.5rem;
        bottom: 0.5rem;
        .icon {
          color: red;
        }
      }

      .form-check {
        padding-left: 1.5rem;
        padding-top: 0.3rem;
        padding-bottom: 0.3rem;
        border-bottom: solid 0.1rem #ced4da;
        border-radius: 0.25rem;

        label {
          word-break: break-all;
          word-wrap: break-word;
          white-space: normal;
        }
      }

      .form-check {
        .form-check-label {
          color: black;
        }
      }
    }

    .title-show {
      display: none;
    }
  }
`;

export default StyledFilters;
