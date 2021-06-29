import React from "react";
import StyledDatePicker from "./StyledDatePicker";

const DatePicker = (props: any) => {
  const RemoveIcon = (date: Date) => {
    return date !== undefined ? (
      <i
        className="fa fa-trash-o"
        aria-hidden="true"
        onClick={() => {
          props.handleUserInputDate(null, props.id);
        }}
        tabIndex={0}
      />
    ) : (
      ""
    );
  };

  const UserInput = (date: Date) => {
    return (
      <input
        className="user-input"
        type="date"
        value={
          (date !== undefined ? date.toISOString().split("T")[0] : undefined) ||
          ""
        }
        onChange={(e) => {
          props.handleUserInputDate(
            new Date(e.target.value),
            props.id as String
          );
        }}
        tabIndex={0}
      />
    );
  };

  return (
    <StyledDatePicker>
      <div className="date-picker">
        {RemoveIcon(props.date as Date)}
        {UserInput(props.date as Date)}
      </div>
    </StyledDatePicker>
  );
};

export default DatePicker;
