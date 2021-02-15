import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './SavedFilters.scss';


class SavedFilters extends Component<{}, {}>{
    state = {
        isDropdownShown: false
    }

    handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
        this.setState({isDropdownShown: !this.state.isDropdownShown});
    }
    render(){
        return (
            <Dropdown id="saved-filters" onClick={this.handleClick.bind(this)}>
                <Dropdown.Toggle variant="secondary" className="dropdown-basic grid-button">
                <i className="icon-star icon-large"></i>
                <span>Saved Filters</span>
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

export default SavedFilters;