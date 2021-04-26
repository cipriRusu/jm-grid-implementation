import { Form } from "react-bootstrap";

const BooleanFilter = (props: any) => {
  let optionsForBoolean = ["true", "false"];

  return (
    <>
      {optionsForBoolean.map((option: any) => {
        return (
          <Form.Check
            className="form-check"
            type="checkbox"
            label={option}
          ></Form.Check>
        );
      })}
    </>
  );
};

export default BooleanFilter;
