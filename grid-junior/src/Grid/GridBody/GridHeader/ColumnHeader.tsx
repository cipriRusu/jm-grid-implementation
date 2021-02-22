import React from 'react';
import './ColumnHeader.scss';
import 'font-awesome/css/font-awesome.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { IColumnHeader } from '../../Interfaces/GridTools/IColumnHeader';

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

class ColumnHeader extends React.Component<IColumnHeader, IColumnHeader> {
  constructor(props: IColumnHeader) {
    super(props);
    this.state = {
      sort: this.props.sort,
      columnWidth: this.props.columnWidth,
      columnName: this.props.columnName,
      setSort: this.props.setSort
    };
  }

  handleColumnSorting() {
    const { sort, setSort } = this.state;

    if (sort.sort_type === "") {
      sort.sort_type = "asc";
      sort.field_id = this.props.columnName;
    }
    else if(sort.field_id === this.props.columnName) {
      sort.sort_type = sort.sort_type === "asc" ? "desc" : "";
    }
    else{
      sort.field_id = this.props.columnName;
      sort.sort_type = "asc";
    }
    
    setSort(sort)
  }

  render(){return(<div onClick={this.handleColumnSorting.bind(this)}
                  className={`column-header ${this.props.columnWidth}`}>
                  <div className="sort-icon-container">
                    { this.state.sort.field_id === this.props.columnName && 
                      this.state.sort.sort_type === "asc" ? <i className="fa fa-sort-asc" aria-hidden="true"></i> :
                      this.state.sort.field_id === this.props.columnName && 
                      this.state.sort.sort_type === "desc" ? <i className="fa fa-sort-desc" aria-hidden="true"></i> : 
                      <i className="fa fa-sort" aria-hidden="true"></i>}
                  </div>
                  <p>{this.props.columnName}</p>
                    <Dropdown>
                      <Dropdown.Toggle as={CustomToggle}>
                        <i className="icon-column fa fa-filter" aria-hidden="true"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                      <Dropdown.Header>Filtreaza rezultate: </Dropdown.Header>
                      {/* <div> Exact ca: </div>
                      <div> Exact ca: </div>
                      <div> Exact ca: </div> */}
                      <Dropdown.Item onClick={(e:any) => e.preventDefault()}> Asemanator cu: </Dropdown.Item>
                      <Dropdown.Item> Contine: </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>)}
}

export default ColumnHeader;