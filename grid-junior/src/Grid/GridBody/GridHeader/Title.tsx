import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { ITitle } from '../../Interfaces/GridBody/ITitle';
import './Title.scss';
import Filters from '../../GridTools/Filters';
import { GridContext } from '../../Grid';
import 'font-awesome/css/font-awesome.min.css';
import { IColumn } from '../../Interfaces/GridBody/IColumn';
import { ISortStats } from '../../Interfaces/GridBody/ISortStats';

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

  function handleSortIcon(sort: ISortStats, columns: IColumn[]) {
    var currentSort = null;

    columns.forEach((x) => {
      if(x.name === sort.field_id && sort.sort_type === "asc"){
        currentSort = <i className="sort-icon-title fa fa-sort-asc" aria-hidden="true"></i> 
      }
      else if(x.name === sort.field_id && sort.sort_type === "desc") {
        currentSort = <i className="sort-icon-title fa fa-sort-desc" aria-hidden="true"></i> 
      }
   })

    if (currentSort === null) {
      currentSort = <i className="sort-icon-title fa fa-sort hidden-icon"></i>
    }

    return currentSort;
  }

  function handleFilterIcon(filter: IColumn[], columns: IColumn[]) {
    var currentFilter = null;

    columns.forEach((column) => {
      filter.forEach((filter) => {
        if(filter !== undefined && column.name === filter.name){
          currentFilter = <i className="filter-icon-title fa fa-filter" aria-hidden="true"></i>
        }
      })
    })

    if (currentFilter === null) {
      currentFilter = <i className="filter-icon-title fa fa-filter hidden-icon" aria-hidden="true"></i>
    }

    return currentFilter;
  }

function Title(props: ITitle) {
  return (
    <GridContext.Consumer>
      {value =>
      <div className="header-title">
        <div className="header-contents">
          { handleSortIcon(value.sort, props.columns) }
            <p>{props.title}</p>
            { handleFilterIcon(value.selectedFilterContext, props.columns) }
            <Dropdown>
              <Dropdown.Toggle as={CustomToggle}>
                <i className="icon-header fa fa-cog" aria-hidden="true"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu className='dropdown-menu'>
                <Filters columns={props.columns} />
              </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>}
    </GridContext.Consumer>)
}

export default Title
