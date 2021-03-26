import React, {useState, useContext, useEffect} from 'react';
import { Form } from 'react-bootstrap';
import {GridContext} from '../Grid';
import './Filters.scss';
import { IColumn } from '../Interfaces/GridBody/IColumn';

const Filters = (props: any) => {
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
        if(header.name === props.filter.name)
        { return props.filter.value; }

        var filter = sortContext.selectedFilterContext.find(x => x.name === header.name);

        return filter !== undefined ? filter.value : '';
    }

    const handleOnChange = (e: any, column:IColumn) => {
        props.update_filter({name: column.name,
                             size: column.size, 
                             value: e.target.value, 
                             type: column.type,
                             operator: e.target.selectedIndex})

        if(e.target.value === ''){
            handleDeleteFilter(e, column);
            props.update_filter({ name: "",
                                  size: "",
                                  type: "", 
                                  value: "", 
                                  operator: 0 })
        }
    };

    const handleDeleteFilter = (e: any, column: IColumn) => {
        if(column.value !== "") {
            const newList = sortContext.selectedFilterContext.filter(item => item.name !== column.name);
            sortContext.setFilter(newList);
            props.update_filter({ name: "",
                                  size: "",
                                  type: "", 
                                  value: "", 
                                  operator: 0 })
        }
    };

    const handleFilterIcon = (header: IColumn) => {
        return sortContext.selectedFilterContext.map((x, index: number) => {
            return header.name === x.name ? <i key={index} className="icon-column fa fa-filter" ></i> : null })
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            const checkCurrentFilters = () => {
                  return !sortContext.selectedFilterContext.some(x => x.name === props.filter.name &&
                                                                      x.size === props.filter.size &&
                                                                      x.type === props.filter.type &&
                                                                      x.value === props.filter.value &&
                                                                      x.operator === props.filter.operator) 
            }
            if(props.filter.value !== undefined && props.filter.value !== "" && checkCurrentFilters()) {
                const handleAddFilter = () => {
                    let all_filters = new Array<IColumn>();
                    let res = sortContext.selectedFilterContext.filter(x => x.name !== props.filter.name);
                    if(res.length > 0) 
                    { all_filters = all_filters.concat(res); }

                    all_filters = all_filters.concat({name: props.filter.name, 
                                                      size: props.filter.size, 
                                                      value: props.filter.value, 
                                                      type: props.filter.type,
                                                      operator: props.filter.operator })

                    sortContext.setFilter(all_filters);
                    }

                handleAddFilter();
            }
        }, 1000);
        return () => clearTimeout(timeout);
    },[props, sortContext]);

    return (
        <>
        {props.columns.map((header:IColumn, index:number) => (
            <div className="dropdown-item custom-dropdown-item" 
                 key={index}>
                <div id="header">
                    <div className="column-name" onClick={() => { handleColumnSorting(header.name)}}>
                        {displayArrows(header.name)}
                        <p style={{ margin: '0px' }}>{header.name}</p>
                            <span>
                                {handleFilterIcon(header)}
                            </span>
                    </div>                 
                </div>

                <Form>
                    <Form.Control as="select" onChange={(e: any) => { props.update_filter({ name: header.name, 
                                                                                            size: header.size,
                                                                                            value: props.filter.value,
                                                                                            type: props.filter.type,
                                                                                            operator: e.target.selectedIndex})}}>
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
                        type={header.type}
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