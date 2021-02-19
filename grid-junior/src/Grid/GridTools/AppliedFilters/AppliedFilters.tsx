import React, {useContext} from 'react';
import './AppliedFilters.scss';
import Dropdown from 'react-bootstrap/Dropdown';
import {GridHeaderContext} from '../../GridContext/GridHeaderContext';

const AppliedFilters: React.FC = () => {
    const headersContext = useContext(GridHeaderContext);
    return (
        <Dropdown id="applied-filters" >
            <Dropdown.Toggle variant="secondary" className="dropdown-basic grid-button" >
                <i className="icon-plus-sign-alt icon-large"></i>
                <span>Applied Filters</span>
                
            </Dropdown.Toggle>

            <Dropdown.Menu className="custom-dropdown">
                {headersContext.map(header => (
                    <Dropdown.Item href="#/action-1">{header}</Dropdown.Item>
                ))}
                
            </Dropdown.Menu>
        </Dropdown>
    );
    
   
}

export default AppliedFilters;