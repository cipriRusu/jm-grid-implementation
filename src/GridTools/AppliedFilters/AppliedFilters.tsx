import React from 'react';
import './AppliedFilters.scss';
import Dropdown from 'react-bootstrap/Dropdown';

const AppliedFilters: React.FC = () => {
    return (
        <Dropdown id="applied-filters">
            <Dropdown.Toggle variant="secondary" className="dropdown-basic">
                <i className="icon-plus-sign-alt icon-large"></i>Applied Filters
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default AppliedFilters;