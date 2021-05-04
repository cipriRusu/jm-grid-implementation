const DatePicker = (props: any) => {
  return (
    <>
      <input
        value={
          (props.firstDate !== undefined
            ? props.firstDate.toISOString().split("T")[0]
            : undefined) || ""
        }
        type="date"
        style={{ width: "100%" }}
        onChange={(e) => {
          props.handleUserInputDate(new Date(e.target.value));
        }}
        tabIndex={0}
      />
      <i
        style={{ position: "absolute", right: "1.7rem", color: "red" }}
        className="fa fa-trash-o"
        aria-hidden="true"
        onClick={() => {
          props.handleUserInputDate(null);
        }}
        tabIndex={0}
      />
    </>
  );
};

export default DatePicker;
