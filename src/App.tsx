import React, { useState } from "react";
import Grid from "./Grid/Grid";
import SideBar from "./SideBar/SideBar";
import ToggleSideBar from "./SideBar/ToggleSidebar";
import { DataSource } from "./DataSource/DataSource";
import { IHeader } from "./Grid/Interfaces/GridBody/IHeader";
import { initialHeaders } from "./DataSource/GridStructure/HeadersData";
import { StyledApp } from "./StyledApp";

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
        data={new DataSource(headerData)}
        headers={headerData}
        pageSize={PAGE_SIZE}
        cacheSize={CACHE_SIZE}
      />
    </StyledApp>
  );
}

export default App;
