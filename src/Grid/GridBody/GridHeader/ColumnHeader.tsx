import React from 'react';
import './ColumnHeader.scss';
import 'font-awesome/css/font-awesome.min.css';
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
    return (<div className={`column-header ${props.className}`}>    
              <p>{props.columnName}</p>
              <Dropdown>
                <Dropdown.Toggle as={CustomToggle}>
                  <i className="icon-column fa fa-filter" aria-hidden="true"></i>
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