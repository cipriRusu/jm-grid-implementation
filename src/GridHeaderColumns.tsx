import React, { useState } from 'react';
import GridFilterForm from './GridFilterForm';
import './GridHeaderColumnsStyle.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

function GridHeaderColumns() {
    let[visible, toggleVisibility] = useState('none')
    let[clicked, setClicked] = useState(0)

    function toggleHandler(elem: any) {
        setClicked(elem)
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
                <FontAwesomeIcon onClick={() => toggleHandler(1)} className="Icon" icon={faFilter}/>
            </div>
            <div className="Column Second">
                <p>Nume</p>
                <FontAwesomeIcon onClick={() => toggleHandler(2)} className="Icon" icon={faFilter}/>
            </div>
            <div className="Column Third">
                <p>Email</p>
                <FontAwesomeIcon onClick={() => toggleHandler(3)} className="Icon" icon={faFilter}/>
            </div>
            <div className="Column Fourth">
                <p>Nr Telefon</p>
                <FontAwesomeIcon onClick={() => toggleHandler(4)} className="Icon" icon={faFilter}/>
            </div>
        </div>
        <div style={{ display: "flex"}}>
            <div className="Column">
                <GridFilterForm countItem={1} clickedItem={clicked} componentVisible={visible}/>
            </div>
            <div className="Column">
                <GridFilterForm countItem={2} clickedItem={clicked} componentVisible={visible}/>
            </div>
            <div className="Column">
                <GridFilterForm countItem={3} clickedItem={clicked} componentVisible={visible}/>
            </div>
            <div className="Column">
                <GridFilterForm countItem={4} clickedItem={clicked} componentVisible={visible}/>
            </div>
        </div>
    </div>)
}

export default GridHeaderColumns