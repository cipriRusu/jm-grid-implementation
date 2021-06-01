import Grid from "./Grid/Grid";
import { headers } from "./DataSource/GridStructure/HeadersData";
import { DataSource } from "./DataSource/DataSource";
import React, { useState } from "react";
import SideBar from "./SideBar";
import ToggleSideBar from "./ToggleSidebar";
import { StyledApp } from "./StyledApp";

const PAGE_SIZE = 11;
const CACHE_SIZE = 33;

function App() {
  const [toggledSideBar, setToggleSideBar] = useState(false);

  return (
    <StyledApp>
      <ToggleSideBar
        toggledSideBar={toggledSideBar}
        setToggleSideBar={setToggleSideBar}
      ></ToggleSideBar>
      <SideBar
        toggledSideBar={toggledSideBar}
        setToggleSideBar={setToggleSideBar}
        headers={headers}
      ></SideBar>
      <Grid
        data={new DataSource()}
        headers={headers}
        pageSize={PAGE_SIZE}
        cacheSize={CACHE_SIZE}
      />
    </StyledApp>
  );
}

export default App;
