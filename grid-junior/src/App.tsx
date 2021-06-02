import Grid from "./Grid/Grid";
import { initialHeaders } from "./DataSource/GridStructure/HeadersData";
import { DataSource } from "./DataSource/DataSource";
import React, { useState } from "react";
import SideBar from "./SideBar";
import ToggleSideBar from "./ToggleSidebar";
import { StyledApp } from "./StyledApp";
import { IHeader } from "./Grid/Interfaces/GridBody/IHeader";

const PAGE_SIZE = 11;
const CACHE_SIZE = 33;

function App() {
  const [toggledSideBar, setToggleSideBar] = useState(false);
  const [headerData, updateHeaderData] = useState<IHeader[]>(initialHeaders);

  return (
    <StyledApp>
      <ToggleSideBar
        toggledSideBar={toggledSideBar}
        setToggleSideBar={setToggleSideBar}
      ></ToggleSideBar>
      <SideBar
        toggledSideBar={toggledSideBar}
        setToggleSideBar={setToggleSideBar}
        updateHeaderData={updateHeaderData}
        headers={headerData}
      ></SideBar>
      <Grid
        data={new DataSource()}
        headers={headerData}
        pageSize={PAGE_SIZE}
        cacheSize={CACHE_SIZE}
      />
    </StyledApp>
  );
}

export default App;
