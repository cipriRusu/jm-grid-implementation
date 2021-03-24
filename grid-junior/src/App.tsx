import './App.scss';
import Grid from './Grid/Grid'
import React from "react";
import { headers } from './Grid/JSONData/HeadersData';
import { DataSource } from './Grid/DataSource';

function App(){
   return (
     <div className="App">
       <Grid data={new DataSource()} headers={headers}/>
     </div>  
   );
}

export default App;
