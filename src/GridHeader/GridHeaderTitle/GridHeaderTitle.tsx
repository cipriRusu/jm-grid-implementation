import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/esm/Dropdown';
import './GridHeaderTitleStyle.scss';

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

function GridHeaderTitle(props: any) {
    return (<div className="headerTitle">
                <p>{props.headerTitle}</p>
                <Dropdown>
                    <Dropdown.Toggle as={CustomToggle}>
                        <FontAwesomeIcon style={{ color: 'black'}} className="icon-header" icon={faCog}/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Header>Contine: </Dropdown.Header>
                        {props.columnValues.map((value: any, index: any) => { return <Dropdown.Item>{value.colname}</Dropdown.Item>})}
                    </Dropdown.Menu>
                </Dropdown>
            </div>)
}

export default GridHeaderTitle