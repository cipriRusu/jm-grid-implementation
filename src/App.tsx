import React from 'react';
import './App.scss';
import Grid from './Grid/Grid'


const viewPartItems = [
  'First View',
  'Second View',
  'Third View'
] 
function App(){
    return (
      <div className="App">
        <Grid items={viewPartItems}/>
      </div>
    );
}

export default App;
