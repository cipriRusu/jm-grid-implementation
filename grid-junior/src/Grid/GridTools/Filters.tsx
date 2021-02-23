import React from 'react';
import { Form } from 'react-bootstrap';
import { IColumn } from '../Interfaces/GridBody/IColumn';
import { IColumns } from '../Interfaces/GridTools/IColumns';

const Filters = (props: IColumns) => {

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

    const displayOptions = (options: string[]) => options.map(option => (<option>{option}</option>));

    return (
        <>
        {props.columns.map((header:IColumn, index:number) => (
            <div className="dropdown-item custom-dropdown-item" key={index}>
                <div className="column-name form-control">
                    {header.name}
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