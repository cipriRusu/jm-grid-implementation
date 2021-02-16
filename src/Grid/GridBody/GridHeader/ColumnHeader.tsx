import React from 'react';
import './ColumnHeader.scss';
import 'font-awesome/css/font-awesome.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { iColumnHeaderParameters } from './iColumnHeaderParameters';

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

class ColumnHeader extends React.Component<iColumnHeaderParameters> {
  constructor(props: any) {
    super(props);
  }

  render(){return(<div className={`column-header ${this.props.columnWidth}`}>    
                    <p>{this.props.columnName}</p>
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
                  </div>)}
}

export default ColumnHeader;