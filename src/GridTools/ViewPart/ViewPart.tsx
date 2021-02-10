import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './ViewPart.scss';

type ViewPartState = {
    isDropdownShown: boolean
}
class ViewPart extends Component<{}, ViewPartState>{
    state = {
        isDropdownShown: false
    }

    handleClick = (): void => {
        this.setState({isDropdownShown: !this.state.isDropdownShown});
    }
    handleOutsideClick = (): void => {
        this.setState({isDropdownShown: false});
    }
    render(){
        return (
            <Dropdown id="view-part" onClick={this.handleClick} >
                <Dropdown.Toggle variant="secondary" className="dropdown-basic grid-button" onBlur={this.handleOutsideClick}>
                    <i className="icon-eye-open icon-large"></i>
                    <span>View Part</span>
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

export default ViewPart;