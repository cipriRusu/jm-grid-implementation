import React from 'react';
import './GridRow.scss';

const GridRow = (props: any) => {
    return (
    <div className="grid-row">
        <div className="first-offset">{props.rowdata.prenume}</div>
        <div className="second-offset">{props.rowdata.nume}</div>
        <div className="third-offset">{props.rowdata.email}</div>
        <div className="fourth-offset">{props.rowdata.telefon}</div>
    </div>)
}

export default GridRow;