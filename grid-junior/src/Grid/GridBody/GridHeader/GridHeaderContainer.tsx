import React from 'react';
import ColumnHeader from './ColumnHeader';
import GridHeaderTitle from './GridHeaderTitle';
import './GridHeaderContainerStyle.scss';
import { IHeaderContainer } from '../../Interfaces/GridTools/IHeaderContainer';

function GridHeaderContainer(props: IHeaderContainer) {
    return(
    <div className="header-container">
        <GridHeaderTitle 
         headerTitle={props.headValue} 
         columnValues={props.columnValues}/>
            <div className="column-headers">
                {props.columnValues.map((value: any, key: number) => 
                { return <ColumnHeader
                          key={key}
                          sort={props.sort}
                          setSort={props.setSort}
                          columnWidth={value.column_width} 
                          columnName={value.column_name}/> })}
            </div>
    </div>)
}

export default GridHeaderContainer