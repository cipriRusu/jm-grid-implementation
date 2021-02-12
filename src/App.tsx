import React from 'react';
import './App.scss';
import GridToolsLayout from './GridTools/GridToolsLayout/GridToolsLayout';
import GridHeader from './GridHeader/GridHeader';

function App() {
  return (
    <div className="App">
       <GridToolsLayout />
       <GridHeader />
    </div>
  );
}

export default App;
