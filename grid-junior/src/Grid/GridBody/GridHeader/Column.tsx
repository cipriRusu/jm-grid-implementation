import React from 'react';
import './Column.scss';
import 'font-awesome/css/font-awesome.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { IColumn } from '../../Interfaces/GridBody/IColumn';
import { GridContext } from '../../Grid';
import Filters from '../../GridTools/Filters';

class Column extends React.Component<IColumn, IColumn> {
  constructor(props: IColumn) {
    super(props);
    this.state = {
      name: this.props.name,
      size: this.props.size,
      filter: this.props.filter,
      value: this.props.value,
      update_filter: this.props.update_filter,
      type: this.props.type,
      operator: this.props.operator,
      toggled: this.props.toggled
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

  handleFilterIcon(value: any) {
    var currentFilter = null;

    value.selectedFilterContext.forEach((x: any) => {
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
      value.sort.sort_type === "asc" ? <i className="fa fa-arrow-up" aria-hidden="true"></i>:
      value.sort.field_id === this.props.name && 
      value.sort.sort_type === "desc" ? <i className="fa fa-arrow-down" aria-hidden="true"></i>:
      <i className="fa fa-arrow-down hidden-icon" aria-hidden="true"></i>;
  }

  render() {return(
      <div className={`column-header ${this.props.size}`}>
        <GridContext.Consumer>
          {value => 
          <Dropdown>
            <div
            className='column'>
              <div
              className='sort-header' 
              tabIndex={0} 
              onKeyPress={() => this.handleColumnSorting(value)} 
              onClick={() => this.handleColumnSorting(value)}>
                {this.handleSortIcon(value)}
                {this.props.name}
              </div>
              <div
              tabIndex={0} 
              className='filter-header'
              onClick={() => { value.toggledFilter === this.state.name ? value.setToggled('none') : value.setToggled(this.state.name) }}
              onKeyPress={() => { value.toggledFilter === this.state.name ? value.setToggled('none') : value.setToggled(this.state.name) }}
              >
                {this.handleFilterIcon(value)}
              </div>
            </div>

              <Filters
              columns={[this.props]}
              filter={this.props.filter}
              update_filter={this.props.update_filter}/>
            </Dropdown>
          }
        </GridContext.Consumer>
      </div>)}
  }

export default Column;