import React, {useState, useContext} from 'react';

import './AppliedFilters.scss';
import Dropdown from 'react-bootstrap/Dropdown';
import {GridHeaderContext} from '../../GridContext/GridHeaderContext';
import { Form } from 'react-bootstrap';

const AppliedFilters: React.FC = () => {
    const headersContext = useContext(GridHeaderContext);
  
    return (
        <Dropdown id="applied-filters">
            <Dropdown.Toggle variant="secondary" className="dropdown-basic grid-button"  >
                <i className="icon-plus-sign-alt icon-large"></i>
                <span>Applied Filters</span>
                
            </Dropdown.Toggle>

            <Dropdown.Menu className="custom-dropdown">
                {headersContext.map(header => (
                    <Dropdown.Item >
                    <>
                        {header.column_name}
                        <Form>
                        <Form.Control  as="select" >
                            <option>Contains</option>
                            <option>Not contains</option>
                            <option>Starts with</option>
                        </Form.Control>
                        <Form.Control type="text" placeholder="Filter..." />
                        </Form>
                    </>
                    </Dropdown.Item>
                ))}
                
            </Dropdown.Menu>
        </Dropdown>
    );
    
   
}

export default AppliedFilters;