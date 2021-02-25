import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { IColumn } from '../../Interfaces/GridBody/IColumn';
import { ITitle } from '../../Interfaces/GridBody/ITitle';
import './Title.scss';

const CustomToggle = React.forwardRef(( props: any , ref: any ) => (
    <a
      href="#/"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        props.onClick(e);
      }}>
      {props.children}
    </a>
  ));

function Title(props: ITitle) {
    return (<div className="header-title">
              <div className="header-contents">
                <p>{props.title}</p>
                  <Dropdown>
                    <Dropdown.Toggle as={CustomToggle}>
                      <i className="icon-header fa fa-cog" aria-hidden="true"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      
                    </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>)
}

export default Title