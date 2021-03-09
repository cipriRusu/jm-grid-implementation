import React, {useState, useContext, useEffect} from 'react';
import { Form } from 'react-bootstrap';
import { IColumns } from '../Interfaces/GridTools/IColumns';
import {GridContext} from '../Grid';
import './Filters.scss';
import { IColumn } from '../Interfaces/GridBody/IColumn';
import Column from '../GridBody/GridHeader/Column';

const Filters = (props: IColumns) => {
    const sortContext = useContext(GridContext);
    const [showArrow, setShowArrow] = useState(true);
    const [showFilter, setShowFiler] = useState(true);
    const [filterSelected, setFilterSelected] = useState<IColumn>({ name: "", size: "", value: "" });


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

    const handleColumnSorting = (column_name: string) => {
        setShowArrow(false);

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
      };

    const displayOptions = (options: string[]) => options.map(option => (<option key={option}>{option}</option>));
  
    const displayArrows = (name: string) => (
                <span className="sort-icon-container">
                    { sortContext.sort.field_id === name && 
                      sortContext.sort.sort_type === "asc" ? <i className="fa fa-arrow-up" aria-hidden="true"></i> :
                      sortContext.sort.field_id === name && 
                      sortContext.sort.sort_type === "desc" ? <i className="fa fa-arrow-down" aria-hidden="true"></i> : 
                      <i className="fa fa-arrow-up" 
                       hidden={showArrow}
                      ></i>}
                  </span>
    );

    const displayDeleteIcon = (column:IColumn) => {
        const findFilter = sortContext.selectedFilterContext.findIndex(filter => filter.name === column.name);
        if (findFilter !== -1){
            return (<i className="icon-trash icon"></i>)
        }
    };

    const getFieldValue = (header: IColumn) => {
        let filter = sortContext.selectedFilterContext.find(x => x.name === header.name);
        return filter !== undefined && filter.name === header.name ? filter.value : header.name === filterSelected.name ? filterSelected.value : '';
    }

    const handleOnChange = (e: any, column:IColumn) => {
        setShowFiler(false);
        sortContext.sort.field_id = column.name;
        setFilterSelected({name: column.name, size: column.size, value: e.target.value});
        if(e.target.value === ''){
            setShowFiler(true);
            handleDeleteFilter(e, column);
        }
    };

    const handleAddFilter = () => {
       setFilterSelected({ name: "", size: "", value: "" })
       const newList = sortContext.selectedFilterContext.concat(filterSelected);
       sortContext.setFilter(newList);
    };

    const handleDeleteFilter = (e: any, column: IColumn) => {
        setShowFiler(true);
        if(column.value !== ""){
            const newList = sortContext.selectedFilterContext.filter(item => item.name !== column.name);
            sortContext.setFilter(newList);
            setFilterSelected({ name: "", size: "", value: "" });
        }
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            if(filterSelected.value !== ""){
                handleAddFilter();
            }
        }, 1000);
        return () => clearTimeout(timeout);
    },[filterSelected.value]);
        
    return (
        <>
        {props.columns.map((header:IColumn, index:number) => (
            <div className="dropdown-item custom-dropdown-item" key={index}>
                <div id="header">
                    <div className="column-name"  onClick={()=>handleColumnSorting(header.name)}>
                        {displayArrows(header.name)}
                        <p style={{ margin: '0px' }}>{header.name}</p>
                        <span hidden={showFilter}>
                        { sortContext.sort.field_id === header.name 
                            ? <i className="icon-column fa fa-filter" ></i>
                            : null
                        }
                    </span>
                    </div>                 
                </div>

                <Form>
                    <Form.Control as="select" >
                    {(header['type'] === 'number' || header['type'] === 'date')
                        ? displayOptions(optionsForNumbers)
                        : displayOptions(optionsForStrings)
                    }
                    </Form.Control>
                    <div className="input-icons">
                         <span onClick={(e:any) => handleDeleteFilter(e, header)}>
                           {displayDeleteIcon(header)}
                         </span>
                        
                        <Form.Control
                        type="text" 
                        placeholder="Filter..."
                        onChange={(e:any) => handleOnChange(e, header)}
                        name={header.name}
                        value={getFieldValue(header)}
                    />
                    </div>

                </Form>
            </div>
        ))}
        </>  
    );
}

export default Filters;