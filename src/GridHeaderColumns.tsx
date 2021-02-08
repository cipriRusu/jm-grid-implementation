import React, { useState } from 'react';
import GridFilterForm from './GridFilterForm';
import './GridHeaderColumnsStyle.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

function GridHeaderColumns() {
    let[visible, toggleVisibility] = useState('none')

    function toggleHandler() {
        return (visible === "none" ? 
                    toggleVisibility('block') : 
                visible === 'block' ? 
                    toggleVisibility('none') : 
                undefined);
    }

    return(
    <div>
        <div className="ColumnContainer">
            <div className="Column First">
                <p>Prenume</p>
                <FontAwesomeIcon onClick={toggleHandler} className="Icon" icon={faFilter}/>
            </div>
            <div className="Column Second">
                <p>Nume</p>
                <FontAwesomeIcon onClick={toggleHandler} className="Icon" icon={faFilter}/>
            </div>
            <div className="Column Third">
                <p>Email</p>
                <FontAwesomeIcon onClick={toggleHandler} className="Icon" icon={faFilter}/>
            </div>
            <div className="Column Fourth">
                <p>Nr Telefon</p>
                <FontAwesomeIcon onClick={toggleHandler} className="Icon" icon={faFilter}/>
            </div>
        </div>
        <div style={{ display: "flex"}}>
            <div className="Column">
                <GridFilterForm componentVisible={visible}/>
            </div>
            <div className="Column">
                <GridFilterForm componentVisible={visible}/>
            </div>
            <div className="Column">
                <GridFilterForm componentVisible={visible}/>
            </div>
            <div className="Column">
                <GridFilterForm componentVisible={visible}/>
            </div>
        </div>
    </div>)
}

export default GridHeaderColumns