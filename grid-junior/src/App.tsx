import './App.scss';
import Grid from './Grid/Grid'
import React from "react";
import { headers } from './Grid/JSONData/HeadersData';
import { DataObject } from './Grid/DataObject';

function App(){
    return (
      <div className="App">
        <Grid data={new DataObject()} headers={headers}/>
      </div>  
    );
}

export default App;
