import styled from "styled-components";

const StyledDatePicker = styled.div`
  .date-picker {
    .user-input {
      width: 100%;
    }
    .fa {
      position: absolute;
      right: 1.7rem;
      color: red;
    }
    .visible-icon {
      display: block !important;
    }
    .hide-icon {
      display: hidden;
    }
  }
`;

export default StyledDatePicker;
