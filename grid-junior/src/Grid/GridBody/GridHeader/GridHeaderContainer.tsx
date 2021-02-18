import React from 'react';
import ColumnHeader from './ColumnHeader';
import GridHeaderTitle from './GridHeaderTitle';
import './GridHeaderContainerStyle.scss';
import { iHeaderContainer } from './iHeaderContainer';

function GridHeaderContainer(props: iHeaderContainer) {
    return(
    <div className="header-container">
        <GridHeaderTitle 
         headerTitle={props.headValue} 
         columnValues={props.columnValues}/>
            <div className="column-headers">
                {props.columnValues.map((value: any, key: number) => 
                { return <ColumnHeader
                          clickState = {1}
                          columnWidth={value.column_width} 
                          columnName={value.column_name}/> })}
            </div>
    </div>)
}

export default GridHeaderContainer