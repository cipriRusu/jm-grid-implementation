import React, { useState } from 'react';
import ColumnHeaders from './ColumnHeaders';
import './GridHeaderContainerStyle.scss';

function GridHeaderContainer(props: any) {
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
    <div className="headerContainer">
        <div className="headerTitle">
            <p>{props.headValue}</p>
        </div>
        <ColumnHeaders AllColumns={props.columnValues}/>
    </div>)
}

export default GridHeaderContainer