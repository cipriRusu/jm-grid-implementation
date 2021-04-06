import './App.scss';
import Grid from './Grid/Grid'
import React from "react";
import { headers } from './Grid/JSONData/HeadersData';
import { DataSource } from './Grid/DataSource';

const PAGE_SIZE = 7;

function App(){
   return (
     <div className="App">
       <Grid data={new DataSource()} 
             headers={headers} 
             pageSize={PAGE_SIZE} />
     </div>  
   );
}

export default App;
