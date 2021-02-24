import React from 'react';
import './Column.scss';
import 'font-awesome/css/font-awesome.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { IColumnHeader } from '../../Interfaces/GridBody/IColumnHeader';

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
      sort: this.props.sort,
      column_size: this.props.column_size,
      column_name: this.props.column_name,
      setSort: this.props.setSort
    };
  }

  handleColumnSorting() {
    const { sort, setSort } = this.state;

    if (sort.sort_type === "") {
      sort.sort_type = "asc";
      sort.field_id = this.props.column_name;
    }
    else if(sort.field_id === this.props.column_name) {
      sort.sort_type = sort.sort_type === "asc" ? "desc" : "";
    }
    else{
      sort.field_id = this.props.column_name;
      sort.sort_type = "asc";
    }
    
    setSort(sort)
  }

  handleSortIcon() {
    {
      return this.state.sort.field_id === this.props.column_name && 
             this.state.sort.sort_type === "asc" ? <i className="fa fa-sort-asc" aria-hidden="true"></i> :
             this.state.sort.field_id === this.props.column_name && 
             this.state.sort.sort_type === "desc" ? <i className="fa fa-sort-desc" aria-hidden="true"></i>: '' }
    }

  render(){return(<div className={`column-header ${this.props.column_size}`}>
                    <div className='column'>
                      <div className='sort-header' onClick={this.handleColumnSorting.bind(this)}>
                        <div>{ this.handleSortIcon() }</div>
                        <div><p>{this.props.column_name}</p></div></div>
                        <Dropdown>
                        <Dropdown.Toggle as={CustomToggle}>
                          <div>
			                      <i className="icon-column fa fa-filter" aria-hidden="true"></i>
		                      </div>  
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Header>Filtreaza rezultate: </Dropdown.Header>
                        <Dropdown.Item> Asemanator cu: </Dropdown.Item>
                        <Dropdown.Item> Contine: </Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                    </div>
                  </div>)}
}

export default Column;