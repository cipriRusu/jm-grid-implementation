import React from 'react';
import './GridRow.scss';

const GridRow = (props: any) => {
    return props.rowdata.map((x: any) => {
        return (
            [<div className="cell"><p>{x.nume}</p></div>,
            <div className="cell"><p>{x.prenume}</p></div>,
            <div className="cell"><p>{x.email}</p></div>,
            <div className="cell"><p>{x.telefon}</p></div>])
    })
}

export default GridRow;