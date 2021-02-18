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

class ColumnHeader extends React.Component<iColumnHeaderParameters, 
                                           iColumnHeaderParameters> {
  constructor(props: iColumnHeaderParameters) {
    super(props);
    this.state = {
      clickState: 1,
      columnWidth: this.props.columnWidth,
      columnName: this.props.columnName,
    };
  }

  handleClick = () => {
    this.state.clickState < 3 ? 
    this.setState({clickState: this.state.clickState + 1}) : 
    this.setState({clickState: 1})
  }

  render(){return(<div
                  onClick={this.handleClick.bind(this)}
                  className={`column-header ${this.props.columnWidth}`}>
                  <div className="sort-icon-container">
                    {this.state.clickState === 2 ? <i className="fa fa-sort-desc sort-icon" aria-hidden="true"></i> :
                     this.state.clickState === 3 ? <i className="fa fa-sort-asc sort-icon" aria-hidden="true"></i> : 
                                                   <i className="fa fa-sort sort-icon" aria-hidden="true"></i>}
                  </div>
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