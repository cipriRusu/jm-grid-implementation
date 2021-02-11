import React from 'react';
import './ColumnHeader.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';

const CustomToggle = React.forwardRef(( props: any , ref: any ) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        props.onClick(e);
      }}
    >
      {props.children}
    </a>
  ));
  
function ColumnHeader(props: any) {
    return (
<div className={`columnHeader ${props.className}`}>    
    <p>{props.columnName}</p>
    <Dropdown>
        <Dropdown.Toggle as={CustomToggle}>
            <FontAwesomeIcon style={{ color: 'black'}} className="icon-column" icon={faFilter}/>
        </Dropdown.Toggle>
        <Dropdown.Menu>
        <Dropdown.Header>Filtreaza rezultate: </Dropdown.Header>
            <Dropdown.Item> Exact ca: </Dropdown.Item>
            <Dropdown.Item> Asemanator cu: </Dropdown.Item>
            <Dropdown.Item> Contine: </Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
</div>) }

export default ColumnHeader