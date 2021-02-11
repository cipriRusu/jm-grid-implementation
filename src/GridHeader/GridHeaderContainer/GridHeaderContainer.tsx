import React, { useState } from 'react';
import ColumnHeaders from '../ColumnHeaders/ColumnHeaders';
import GridHeaderTitle from '../GridHeaderTitle/GridHeaderTitle';
import './GridHeaderContainerStyle.scss';

function GridHeaderContainer(props: any) {
    return(
    <div className="headerContainer">
        <GridHeaderTitle headerTitle={props.headValue} columnValues={props.columnValues}/>
        <ColumnHeaders AllColumns={props.columnValues}/>
    </div>)
}

export default GridHeaderContainer