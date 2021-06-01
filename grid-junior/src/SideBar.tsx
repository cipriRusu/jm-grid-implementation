import { IColumn } from "./Grid/Interfaces/GridBody/IColumn";
import { IColumns } from "./Grid/Interfaces/GridBody/IColumns";
import { IHeader } from "./Grid/Interfaces/GridBody/IHeader";
import { StyledSideBar } from "./StyledSideBar";

function SideBar(props: {
  toggledSideBar: boolean;
  setToggleSideBar: (value: boolean) => void;
  headers: IHeader[];
}) {
  return (
    <StyledSideBar isVisible={props.toggledSideBar}>
      <i
        className="fa fa-bars"
        aria-hidden="true"
        onClick={() => props.setToggleSideBar(false)}
      ></i>

      {props.headers.map((x: IHeader) => {
        return x.headers.map((x: IColumns, key: number) => {
          return (
            <div key={key}>
              <p>{x.name}</p>
              {x.columns.map((y: IColumn, key: number) => {
                return <p key={key}>{y.name}</p>;
              })}
            </div>
          );
        });
      })}
    </StyledSideBar>
  );
}

export default SideBar;
