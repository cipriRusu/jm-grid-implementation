import React from 'react';
import './Column.scss';
import 'font-awesome/css/font-awesome.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { IColumnHeader } from '../../Interfaces/GridBody/IColumnHeader';
import { GridContext } from '../../Grid';

const CustomToggle = React.forwardRef(( props: any , ref: any ) => (
  <div
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      props.onClick(e);
    }}
  >
    {props.children}
  </div>
));

class Column extends React.Component<IColumnHeader, IColumnHeader> {
  constructor(props: IColumnHeader) {
    super(props);
    this.state = {
      column_size: this.props.column_size,
      column_name: this.props.column_name,
    };
  }

  handleColumnSorting(value: any) {
    if(value.sort.sort_type === "") {
        value.sort.sort_type = "asc";
        value.sort.field_id = this.props.column_name;
      }
    else if(value.sort.field_id === this.props.column_name) {
              value.sort.sort_type = value.sort.sort_type === "asc" ? "desc" : "";
      }
    else {
     value.sort.field_id = this.props.column_name;
     value.sort.sort_type = "asc";
   }
   value.setSort(value.sort);
  }

  handleSortIcon(value: any) {
    {
      return value.sort.field_id === this.props.column_name && 
      value.sort.sort_type === "asc" ? <i className="fa fa-sort-asc" aria-hidden="true"></i> :
      value.sort.field_id === this.props.column_name && 
      value.sort.sort_type === "desc" ? <i className="fa fa-sort-desc" aria-hidden="true"></i>: '';
    }
  }

  render() {return(
  <GridContext.Consumer>
    {value => 
    <div className={`column-header ${this.props.column_size}`}>
      <div className='column'>
        <div className='sort-header' onClick={() => this.handleColumnSorting(value) }><div>
           { this.handleSortIcon(value) }
        </div>
         <div><p>{this.props.column_name}</p></div></div>
      </div>
      <Dropdown.Toggle as={CustomToggle}>
        <i className="icon-column fa fa-filter" aria-hidden="true"></i>
      </Dropdown.Toggle>
     </div>
    }
  </GridContext.Consumer>)}
}

export default Column;