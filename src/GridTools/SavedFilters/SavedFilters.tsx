import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './SavedFilters.scss';

const SavedFilters: React.FC = () => {
    return (
        <Dropdown id="applied-filters">
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            <i className="icon-star icon-large"></i>Saved Filters
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
       
    );
}

export default SavedFilters;