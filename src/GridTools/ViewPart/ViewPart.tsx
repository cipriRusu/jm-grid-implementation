import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './ViewPart.scss';

const ViewPart: React.FC = () => {
    return (
    <Dropdown id="applied-filters">
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            <i className="icon-eye-open icon-large"></i>View Part
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
        
    );
}

export default ViewPart;