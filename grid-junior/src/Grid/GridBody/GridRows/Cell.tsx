import { ICell } from "../../Interfaces/GridBody/ICell";
import "./Cell.scss";

const Cell = (props: { content: ICell }) => {
  const ApplyTitleStyling = () => {
    if (props.content.cell_key === 0 || props.content.cell_key === 1) {
      return "cell title-wrapper";
    } else {
      return "cell";
    }
  };

  return (
    <>
      {props.content.cell_type === undefined ||
      props.content.cell_type === "number" ||
      props.content.cell_type.toString() === "select" ? (
        <div className={ApplyTitleStyling()}>{props.content.cell_content}</div>
      ) : props.content.cell_type.toString() === "boolean" ? (
        <div className={ApplyTitleStyling()}>
          {props.content.cell_content?.toString() === "true" ? (
            <i className="fa fa-square-o" aria-hidden="true"></i>
          ) : (
            <i className="fa fa-square" aria-hidden="true"></i>
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Cell;
