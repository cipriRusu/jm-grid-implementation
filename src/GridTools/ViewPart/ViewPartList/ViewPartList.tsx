import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './ViewPartList.scss';
import {IViewPartProps} from '../../Interfaces/Interfaces';

const ViewPartList: React.FC<IViewPartProps> = (props: IViewPartProps) => {    
    const [isItemActive, setItemActive] = useState(false);

    const handleSelect=(e: React.MouseEvent)=>{
        e.preventDefault();
        props.onChildClick(e.currentTarget.innerHTML);
      }

    return (
        <Dropdown id="view-part">
            <Dropdown.Toggle variant="secondary" className="dropdown-basic grid-button">
                <i className="icon-eye-open icon-large"></i>
                <span>{props.selectedItem || "View Part"}</span>
            </Dropdown.Toggle>
    
            <Dropdown.Menu className="custom-dropdown" >
                {props.items.map((item, index) => {
                    return <Dropdown.Item href="#/action-1" 
                                
                                    key={index} 
                                    onClick={handleSelect}

                               >    
                                {item}
                            </Dropdown.Item>
                })}
            </Dropdown.Menu>
        </Dropdown>
        );
    

}

export default ViewPartList;