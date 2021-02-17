import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './SavedFilters.scss';

const SavedFilters = () =>{
    return (
        <Dropdown id="saved-filters">
            <Dropdown.Toggle variant="secondary" className="dropdown-basic grid-button">
            <i className="icon-star icon-large"></i>
            <span>Saved Filters</span>
            </Dropdown.Toggle>

            <Dropdown.Menu className="custom-dropdown">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default SavedFilters;