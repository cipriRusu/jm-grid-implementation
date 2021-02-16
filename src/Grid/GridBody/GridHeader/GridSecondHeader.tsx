import React from 'react';
import GridHeaderContainer from './GridHeaderContainer';
import './GridHeaderStyle.scss';

function SecondHeader() {
    return(<div className="grid-header">
        <GridHeaderContainer headValue="Examinare" columnValues={[{colname: "Status", width: 'standard'},{colname: "Data", width: 'standard'}, {colname: 'Urgenta', width: 'standard'}, {colname: 'Termen Limita', width: 'standard'}]} />
        <GridHeaderContainer headValue="Detalii Examinare" columnValues={[{colname: "Tip", width: 'standard'}, {colname: "Centru Imagistica", width: 'standard'}, {colname: "Rezultate", width: 'thin'}, {colname: 'Imagini', width: 'thin'}]} />
    </div>)
}

export default SecondHeader;