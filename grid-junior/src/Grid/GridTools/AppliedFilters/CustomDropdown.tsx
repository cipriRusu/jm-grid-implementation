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

    const [isFilterChanged, setFilterChanged] = useState(false);

    const handleButtonClick = () => {
        setMenuOpen({open: !openMenu.open});
    };

    const handleClickOutside = (e: any) => {
        if(container.current && !container.current.contains(e.target)){
            setMenuOpen({open: false});
        }
    };
    
    const handleFilterChange = (e: any) => {
        if(e.target.value === ''){
            setFilterChanged(false);
        }else{
            setFilterChanged(true);
        } 
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, []);

    let optionsForStrings = [
        'Contains',
        'Not contains',
        'Starts with'
    ];
    let optionsForNumbers = [
        'Equal',
        'Less than',
        'Greater than'
    ];

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
                                {optionsForStrings.map(option => (
                                    <option>{option}</option>
                                ))}           
                            </Form.Control>
                            <Form.Control
                            type="text" 
                            placeholder="Filter..."
                            onChange={handleFilterChange} />
                            {isFilterChanged && (
                            <div className="check-operators">
                                <Form.Check
                                    inline 
                                    type="radio"
                                    label="AND"
                                    name="formHorizontalRadios"/>
                                <Form.Check
                                    inline 
                                    type="radio"
                                    label="OR"
                                    name="formHorizontalRadios"/>
                            </div>    
                            )}
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