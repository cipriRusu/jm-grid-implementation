import styled from "styled-components";

const StyledDateFilter = styled.div`
  .date-filter {
    .react-date-picker {
      width: 100%;
      height: 2.4rem;
    }

    .date-filter-hide {
      display: none !important;
    }

    .date-filter-display {
      display: block;
    }

    .react-datepicker-wrapper {
      width: 100%;
      .react-datepicker__input-container {
        [type="text"] {
          width: 100%;
        }

        .react-datepicker__close-icon.undefined::after {
          background-color: black;
        }
      }
    }
  }
`;

export default StyledDateFilter;
