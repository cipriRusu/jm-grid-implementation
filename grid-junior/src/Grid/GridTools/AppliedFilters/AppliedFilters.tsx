import React, {useState, useContext} from 'react';

import './AppliedFilters.scss';
import Dropdown from 'react-bootstrap/Dropdown';
import {GridHeaderContext} from '../../GridContext/GridHeaderContext';
import { Form } from 'react-bootstrap';

const AppliedFilters: React.FC = () => {
    const headersContext = useContext(GridHeaderContext);  

    let optionsForStrings = [
        'Contains',
        'Not contains',
        'Starts with',
        'Ends with',
        'Equals',
        'Not equals'
    ];
    return (
        <Dropdown id="applied-filters">
            <Dropdown.Toggle variant="secondary" className="dropdown-basic grid-button"  >
                <i className="icon-plus-sign-alt icon-large"></i>
                <span>Applied Filters</span>
                
            </Dropdown.Toggle>

            <Dropdown.Menu className="custom-dropdown">
                {headersContext.map(header => (
                    <div >
                    <>
                        <div className="column-name form-control">
                            {header.name}
                        </div>                   
                        <Form>
                            <Form.Control as="select" >
                                {optionsForStrings.map(option => (
                                    <option>{option}</option>
                                ))}           
                            </Form.Control>
                            <Form.Control
                            type="text" 
                            placeholder="Filter..." />
                        </Form>
                    </>
                    </div>
                ))}
                
            </Dropdown.Menu>
        </Dropdown>
    );
    
   
}

export default AppliedFilters;