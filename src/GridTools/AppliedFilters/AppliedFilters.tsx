import React, { Component } from 'react';
import './AppliedFilters.scss';
import Dropdown from 'react-bootstrap/Dropdown';

class AppliedFilters extends Component<{}, {}>{
    state = {
        isDropdownShown: false
    }

    handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
        this.setState({isDropdownShown: !this.state.isDropdownShown});
    }
    handleOutsideClick = (): void => {
        this.setState({isDropdownShown: false});
    }
    render(){
        return (
            <Dropdown id="applied-filters" onClick={this.handleClick.bind(this)}>
                <Dropdown.Toggle variant="secondary" className="dropdown-basic grid-button" onBlur={this.handleOutsideClick}>
                    <i className="icon-plus-sign-alt icon-large"></i>
                    <span>Applied Filters</span>
                    <i className={this.state.isDropdownShown ? "icon-caret-up": "icon-caret-down"}></i>
                </Dropdown.Toggle>
    
                <Dropdown.Menu className="custom-dropdown">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    }
   
}

export default AppliedFilters;