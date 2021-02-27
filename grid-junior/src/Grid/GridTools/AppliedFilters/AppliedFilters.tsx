import React, {useContext} from 'react';
import './AppliedFilters.scss';
import {GridContext} from '../../Grid';
import Filters from '../Filters';
import { Dropdown } from 'react-bootstrap';
import { IHeader } from '../../Interfaces/GridBody/IHeader';

const AppliedFilters: React.FC = () => {

    const context = useContext(GridContext);  
    const fllatenHeadersContext = (headersContext: IHeader[], name: string) => {
        let newArray:any= [];
        headersContext.map(headers => 
           {
                if(headers.name === name){
                    return headers.headers.map(header => newArray.push(header.columns))
                }  
           } 
        )
        return newArray.flat();
    }
   
    let headers = fllatenHeadersContext(context.headersContext, 'firstHeader');
    console.log("array", headers);

    return (
        <Dropdown id="applied-filters">
            <Dropdown.Toggle variant="secondary" className="dropdown-basic grid-button"  >
                <i className="icon-plus-sign-alt icon-large"></i>
                <span className="btn-title">Applied Filters</span>
            </Dropdown.Toggle>

            <Dropdown.Menu id="custom-dropdown">
                <Filters columns={headers}/>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default AppliedFilters;