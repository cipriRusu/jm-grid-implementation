import React, {useState, useContext} from 'react';
import { Form } from 'react-bootstrap';
import { IColumn } from '../Interfaces/GridBody/IColumn';
import { IColumns } from '../Interfaces/GridTools/IColumns';
import {GridContext} from '../Grid';
import './Sort.scss';

const Filters = (props: IColumns) => {
    const sortContext = useContext(GridContext);
    const [showArrow, setShowArrow] = useState(true);

    let optionsForStrings = [
        'Contains',
        'Not contains',
        'Starts with',
        'Ends with',
        'Equals',
        'Not equals'
    ];
    
    let optionsForNumbers = [
        'Equals',
        'Not equals',
        'Less than',
        'Greater than'
    ];
    const handleColumnSorting = (e: React.MouseEvent) => {
        setShowArrow(false);
        let column_name = "";

        let name = e.currentTarget.children[0].lastChild?.nodeValue;
        console.log("e",  e.currentTarget.children[0].lastChild?.nodeValue )
        if (name !== undefined && name !== null){
            column_name = name;
        }

        if (sortContext.sort.sort_type === "") {
          sortContext.sort.sort_type = "asc";
          sortContext.sort.field_id = column_name;  
        }
        else if(sortContext.sort.field_id === column_name) {
          sortContext.sort.sort_type = sortContext.sort.sort_type === "asc" ? "desc" : "";
        }
        else{
          sortContext.sort.field_id = column_name;
          sortContext.sort.sort_type = "asc";
        }
      
        sortContext.setSort(sortContext.sort);
        setShowArrow(true);
      }
    const displayOptions = (options: string[]) => options.map(option => (<option key={option}>{option}</option>));
    
    const displayArrows = (name: string) => (
                <span className="sort-icon-container">
                    { sortContext.sort.field_id === name && 
                      sortContext.sort.sort_type === "asc" ? <i className="fa fa-sort-asc" aria-hidden="true"></i> :
                      sortContext.sort.field_id === name && 
                      sortContext.sort.sort_type === "desc" ? <i className="fa fa-sort-desc" aria-hidden="true"></i> : 
                      <i className="fa fa-sort" 
                      hidden={showArrow}
                      aria-hidden="true"></i>}
                  </span>
    );
 
    return (
        <>
        {props.columns.map((header:IColumn, index:number) => (
            <div className="dropdown-item custom-dropdown-item" key={index}>
                <div className="column-name form-control" onClick={handleColumnSorting}>
                    <p className="column-header">
                        {displayArrows(header.name)}
                        {header.name}
                    </p>    
                </div>                   
                <Form>
                    <Form.Control as="select" >
                    {(header['type'] === 'number' || header['type'] === 'date')
                        ? displayOptions(optionsForNumbers)
                        : displayOptions(optionsForStrings)
                    }
                    </Form.Control>
                    <Form.Control
                    type="text" 
                    placeholder="Filter..." />
                </Form>
            </div>
        ))}
        </>  
    );
}

export default Filters;