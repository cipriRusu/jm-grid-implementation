import React, { useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './ViewPart.scss';
import {GridContext} from '../../Grid';

const ViewPart: React.FC = () => {    
    const gridContext = useContext(GridContext);

    const handleSelect=(e: React.MouseEvent)=>{
        e.preventDefault();
        gridContext.selectViewHandler(e.currentTarget.innerHTML);
    }
 
    return (
        <Dropdown id="view-part">
            <Dropdown.Toggle 
                variant="secondary" 
                className="dropdown-basic grid-button ">
                <i className="icon-eye-open icon-large"></i>
                <span className="btn-title">{gridContext.selectedViewItemContext || "View Part"}</span>
            </Dropdown.Toggle> 
              
            <Dropdown.Menu className="custom-dropdown" >
                {gridContext.data.get(gridContext.sort, gridContext.selectedFilterContext).map((item, index) => {
                    return <Dropdown.Item href="#/action-1"    
                                active={item===gridContext.selectedViewItemContext}
                                key={index} 
                                onClick={handleSelect}>{item}
                            </Dropdown.Item>
                })}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default ViewPart;