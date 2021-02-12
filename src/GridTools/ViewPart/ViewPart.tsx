import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './ViewPart.scss';

interface ViewPartProps {
    items : string[],
    onChildClick: (e: string) => void 
} 
const ViewPart: React.FC<ViewPartProps> = (props: ViewPartProps) => {
    const [selectedOption, setSelectedOption] = useState(" ");
    const handleSelect=(e: React.MouseEvent)=>{
        e.preventDefault();
        let x = e.currentTarget.innerHTML;
        console.log(x);
        props.onChildClick(x);
      }
    return (
        <Dropdown id="view-part">
            <Dropdown.Toggle variant="secondary" className="dropdown-basic grid-button">
                <i className="icon-eye-open icon-large"></i>
                <span>View Part</span>
            </Dropdown.Toggle>
    
            <Dropdown.Menu className="custom-dropdown">
                {props.items.map(item => {
                    return <Dropdown.Item href="#/action-1" 
                                    key={Math.random()} 
                                    onClick={handleSelect}
                               >
                                {item}
                            </Dropdown.Item>
                })}
            </Dropdown.Menu>
        </Dropdown>
        );
    

}

export default ViewPart;