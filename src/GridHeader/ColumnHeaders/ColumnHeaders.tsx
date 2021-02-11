import React, { useState } from 'react';
import ColumnHeader from '../ColumnHeader/ColumnHeader';
import './ColumnHeadersStyle.scss';

function ColumnHeaders(props: any) {
    return(<div className="columnHeaders">
        {props.AllColumns.map((value: any, index: any) => 
        { return <ColumnHeader className={value.width} columnName={value.colname}/> })}</div>)
}

export default ColumnHeaders