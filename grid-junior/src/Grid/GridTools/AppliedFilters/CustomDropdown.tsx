import React, {useState, useRef, useEffect, useContext} from 'react';
import { Dropdown, Form } from 'react-bootstrap';
import {GridHeaderContext} from '../../GridContext/GridHeaderContext';
import './CustomDropdown.scss';

const CustomDropdown:React.FC = () => {
    const headersContext = useContext(GridHeaderContext);
    const container = useRef<HTMLInputElement>(null);
    const [openMenu, setMenuOpen] = useState({
        open: false
    });

    const handleButtonClick = () => {
        setMenuOpen({open: !openMenu.open});
        console.log("menu open", openMenu.open);
    };

    const handleClickOutside = (e: any) => {
        if(container.current && !container.current.contains(e.target)){
            setMenuOpen({open: false});
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, []);

    return(
        <div className={`dropdown-container dropdown ${openMenu.open ? 'show' : ''}`} id="applied-filters" ref={container}>
            <Dropdown.Toggle variant="secondary"
                className="dropdown-basic grid-button" 
                onClick={handleButtonClick} >
                <i className="icon-plus-sign-alt icon-large"></i>
                <span>Applied Filters</span>
                
            </Dropdown.Toggle>

            {openMenu.open && (
            <div className="dropdown-list">
                <ul>
                    {headersContext.map((header, index) => (
                        <p key={index}>
                            <li>{header.column_name}</li>
                            <Form>
                                <Form.Control as="select" >
                                    <option>Contains</option>
                                    <option>Not contains</option>
                                    <option>Starts with</option>
                                </Form.Control>
                                <Form.Control type="text" placeholder="Filter..." />
                            </Form>
                        </p>
                        
                    ))}
                </ul>
            </div>
            )}
    
        </div>
    );
}

export default CustomDropdown;