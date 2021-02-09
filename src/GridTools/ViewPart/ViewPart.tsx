import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './ViewPart.scss';

const ViewPart: React.FC = () => {
    return (
    <Dropdown id="view-part">
        <Dropdown.Toggle variant="secondary" className="dropdown-basic grid-button">
            <i className="icon-eye-open icon-large"></i>
            <span>View Part</span>
        </Dropdown.Toggle>

        <Dropdown.Menu className="custom-dropdown">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
        
    );
}

export default ViewPart;