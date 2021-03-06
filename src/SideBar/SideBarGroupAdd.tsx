import React, { useState } from "react";
import { StyledSideBarGroupForm } from "./StyedSideBarGroupForm";
import { StyledSideBarElement } from "./StyledSideBarElement";
import { StyledSideBarGroupAdd } from "./StyledSideBarGroupAdd";

function SideBarGroupAdd(props: {
  upperNewGroup: string;
  updateUpperNewGroup: (value: string) => void;
  addNewGroup: (value: string) => void;
}) {
  const [toggled, updateToggled] = useState(false);

  return (
    <StyledSideBarGroupAdd>
      <StyledSideBarElement>
        <div style={{ paddingLeft: "0.5rem" }}>Add New Group</div>
        <i
          className={`${
            toggled === false ? "fa fa fa-plus" : "fa fa fa-minus"
          }`}
          aria-hidden="true"
          onClick={() => updateToggled(toggled === true ? false : true)}
        ></i>
      </StyledSideBarElement>
      <br></br>
      <StyledSideBarGroupForm isToggled={toggled}>
        <div style={{ padding: "0.5rem 0.5rem 0.5rem 0.5rem" }}>
          <div style={{ marginBottom: "1rem" }}>Group Name: </div>
          <input
            type="text"
            value={props.upperNewGroup}
            onInput={(e) => props.updateUpperNewGroup(e.currentTarget.value)}
            style={{ marginBottom: "1rem" }}
          ></input>
          <button onClick={() => props.addNewGroup(props.upperNewGroup)}>
            Add New Group
          </button>
        </div>
      </StyledSideBarGroupForm>
    </StyledSideBarGroupAdd>
  );
}

export default SideBarGroupAdd;
