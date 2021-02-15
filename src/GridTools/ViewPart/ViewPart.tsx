import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './ViewPart.scss';
import {IViewPartProps} from '../Interfaces/IViewPartProps';

const ViewPart: React.FC<IViewPartProps> = (props: IViewPartProps) => {    

    const handleSelect=(e: React.MouseEvent)=>{
        e.preventDefault();
        props.onChildClick(e.currentTarget.innerHTML);
      }
 
    return (
        <Dropdown id="view-part">
            <Dropdown.Toggle 
                variant="secondary" 
                className="dropdown-basic grid-button ">
                <i className="icon-eye-open icon-large"></i>
                <span>{props.selectedItem || "View Part"}</span>
            </Dropdown.Toggle> 
              
            <Dropdown.Menu className="custom-dropdown" >
                {props.items.map((item, index) => {
                    return <Dropdown.Item href="#/action-1"    
                                active={item===props.selectedItem}
                                key={index} 
                                onClick={handleSelect}>{item}
                            </Dropdown.Item>
                })}
            </Dropdown.Menu>
        </Dropdown>
        );
}

export default ViewPart;