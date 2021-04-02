import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { ITitle } from '../../Interfaces/GridBody/ITitle';
import './Title.scss';
import Filters from '../../GridTools/Filters';
import { GridContext } from '../../Grid';
import 'font-awesome/css/font-awesome.min.css';
import { IColumn } from '../../Interfaces/GridBody/IColumn';
import { ISortStats } from '../../Interfaces/GridBody/ISortStats';

  function handleSortIcon(sort: ISortStats, columns: IColumn[]) {
      let currentSort = null;

      columns.forEach((x) => {
      if(x.name === sort.field_id && sort.sort_type === "asc"){
        currentSort = <i className="sort-icon-title fa fa-arrow-up" aria-hidden="true"/>
      }
      else if(x.name === sort.field_id && sort.sort_type === "desc") {
        currentSort = <i className="sort-icon-title fa fa-arrow-down" aria-hidden="true"/>
      }
   })

    if (currentSort === null) {
      currentSort = <i className="sort-icon-title fa fa-arrow-down hidden-icon"/>
    }

    return currentSort;
  }

  function handleFilterIcon(filter: IColumn[], columns: IColumn[]) {
      let currentFilter = null;

      columns.forEach((column) => {
      filter.forEach((filter) => {
        if(filter !== undefined && column.name === filter.name){
          currentFilter = <i className="fa fa-filter filter-icon" aria-hidden="true"/>
        }
      })
    })

    if (currentFilter === null) {
      currentFilter = <i tabIndex={0} className="fa fa-filter filter-icon-hoverable" aria-hidden="true"/>
    }

    return currentFilter;
  }

function Title(props: ITitle) {
  return (
      <GridContext.Consumer>
        {value =>
          <Dropdown className="title-container">
            <div
                className="title">
                  <div
                      className="title-bar" 
                      onClick={() => {
                        let toDisplay = new Array<string>();

                        props.columns.forEach(x => {
                          toDisplay.push(x.name)
                        })

                        value.setToggled(toDisplay)
                      }}>
                        { handleSortIcon(value.sort, props.columns) }
                        <p>{props.title}</p>
                        { handleFilterIcon(value.selectedFilterContext, props.columns) }
                  </div>
            </div>
            <div className="title-dropdown">
              <div style={{ backgroundColor: 'white', borderRadius: 5 }}>
              {props.columns.map(x => {
                return (<Filters 
                                columns={[x]}
                                filter={props.filter}
                                update_filter={props.update_filter} />)
              })}
              </div>
            </div>
          </Dropdown>}
      </GridContext.Consumer>)
}

export default Title
