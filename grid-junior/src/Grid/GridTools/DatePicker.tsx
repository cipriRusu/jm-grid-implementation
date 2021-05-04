import "./DatePicker.scss";

const DatePicker = (props: any) => {
  const RemoveIcon = (date: Date) => {
    return date !== undefined ? (
      <i
        className="fa fa-trash-o"
        aria-hidden="true"
        onClick={() => {
          props.handleUserInputDate(null);
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
          props.handleUserInputDate(new Date(e.target.value));
        }}
        tabIndex={0}
      />
    );
  };

  return (
    <div className="date-picker">
      {RemoveIcon(props.date as Date)}
      {UserInput(props.date as Date)}
    </div>
  );
};

export default DatePicker;
