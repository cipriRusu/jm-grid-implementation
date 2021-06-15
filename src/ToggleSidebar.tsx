import { StyledToggleSidebar } from "./StyledToggleSidebar";

function ToggleSideBar(props: {
  toggledSideBar: boolean;
  setToggleSideBar: (value: boolean) => void;
}) {
  return (
    <StyledToggleSidebar isVisible={props.toggledSideBar}>
      <i
        className="fa fa-bars"
        aria-hidden="true"
        onClick={() => props.setToggleSideBar(true)}
      ></i>
    </StyledToggleSidebar>
  );
}

export default ToggleSideBar;
