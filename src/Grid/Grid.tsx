import React from 'react';
import './Grid.scss';
import GridToolsLayout from './GridTools/GridToolsLayout'
import GridHeader from './GridBody/GridHeader/GridHeader';

function Grid() {
    return (<div className="grid">
        <GridToolsLayout />
        <GridHeader />
    </div>)
}

export default Grid;