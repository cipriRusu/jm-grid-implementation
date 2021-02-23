import React, {useState, useContext} from 'react';
import './AppliedFilters.scss';
import Dropdown from 'react-bootstrap/Dropdown';
import {GridHeaderContext} from '../../Grid';
import { Form } from 'react-bootstrap';
//import { IHeader } from '../../Interfaces/GridBody/IHeader';

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
    let optionsForNumbers = [
        'Equals',
        'Not equals',
        'Less than',
        'Greater than'
    ];

    const test = (options: string[]) => options.map(option => (<option>{option}</option>));
    return (
        <Dropdown id="applied-filters">
            <Dropdown.Toggle variant="secondary" className="dropdown-basic grid-button"  >
                <i className="icon-plus-sign-alt icon-large"></i>
                <span>Applied Filters</span>
                
            </Dropdown.Toggle>

            <Dropdown.Menu id="custom-dropdown">
                {headersContext.map((header, index) => (
                    <div className="dropdown-item custom-dropdown-item" key={index}>
                        <div className="column-name form-control">
                            {header.name}
                        </div>                   
                        <Form>
                            <Form.Control as="select" >
                            {('type' in header)
                                ? test(optionsForNumbers)
                                : test(optionsForStrings)
                            }
                            
                            </Form.Control>
                            <Form.Control
                            type="text" 
                            placeholder="Filter..." />
                        </Form>
                    </div>
                ))}
                
            </Dropdown.Menu>
        </Dropdown>
    );
    
   
}

export default AppliedFilters;