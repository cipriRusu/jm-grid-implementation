import React, {useContext} from 'react';
import './AppliedFilters.scss';
import {GridContext} from '../../Grid';
import Filters from '../Filters';
import { Dropdown } from 'react-bootstrap';

const AppliedFilters: React.FC = () => {

    const context = useContext(GridContext);  
    
    return (
        <Dropdown id="applied-filters">
            <Dropdown.Toggle variant="secondary" className="dropdown-basic grid-button"  >
                <i className="icon-plus-sign-alt icon-large"></i>
                <span>Applied Filters</span>
            </Dropdown.Toggle>

            <Dropdown.Menu id="custom-dropdown">
                <Filters columns={context.headersContext}/>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default AppliedFilters;