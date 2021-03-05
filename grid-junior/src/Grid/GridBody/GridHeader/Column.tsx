import React from 'react';
import './Column.scss';
import 'font-awesome/css/font-awesome.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { IColumn } from '../../Interfaces/GridBody/IColumn';
import { GridContext } from '../../Grid';
import Filters from '../../GridTools/Filters';

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

class Column extends React.Component<IColumn, IColumn> {
  constructor(props: IColumn) {
    super(props);
    this.state = {
      name: this.props.name,
      size: this.props.size,
    };
  }

  handleColumnSorting(value: any) {
    if(value.sort.sort_type === "") {
        value.sort.sort_type = "asc";
        value.sort.field_id = this.props.name;
      }
    else if(value.sort.field_id === this.props.name) {
        value.sort.sort_type = value.sort.sort_type === "asc" ? "desc" : "";
      }
    else {
     value.sort.field_id = this.props.name;
     value.sort.sort_type = "asc";
   }
   value.setSort(value.sort);
  }

  handleFilterIcon(value: any){
    var currentFilter = null;

    value.selectedFilterContext.map((x: any) => {
      if(this.state.name === x.name) {
        currentFilter = <i className="filter-icon-column-visible fa fa-filter" aria-hidden="true"></i>
      }
    })

    if(currentFilter === null) {
      currentFilter = <i className="filter-icon-column fa fa-filter" aria-hidden="true"></i>
    }
    
    return currentFilter;
  }

  handleSortIcon(value: any) {
      return value.sort.field_id === this.props.name && 
      value.sort.sort_type === "asc" ? <i className="fa fa-sort-asc" aria-hidden="true"></i> :
      value.sort.field_id === this.props.name && 
      value.sort.sort_type === "desc" ? <i className="fa fa-sort-desc" aria-hidden="true"></i>:
      <i className="fa fa-sort hidden-icon"></i>;
  }

  render() {return(
  <GridContext.Consumer>
    {value =>
    <div className={`column-header ${this.props.size}`}>
      <div className='column'>
        <div className='sort-header' onClick={() => this.handleColumnSorting(value) }>
          <div>
            { this.handleSortIcon(value) }
          </div>
          <div>
            <p>{this.props.name}</p>
          </div>
        </div>
      </div>
    <div className='column-container'>
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle}>
        <div>
          { this.handleFilterIcon(value) }
        </div>
        </Dropdown.Toggle>
        <Dropdown.Menu className='dropdown-menu'>
          <Filters columns={[this.props]}/>
        </Dropdown.Menu>
      </Dropdown>
     </div>
    </div>
    }
  </GridContext.Consumer>)}
}

export default Column;