import React, { useState, createContext } from "react";
import { IColumn } from "../Interfaces/GridBody/IColumn";

const columnValues: IColumn[] = [];

export const GridHeaderContext = createContext(columnValues);

const GridHeaderProvider = (props: any) => {
    const [columns, setColumns] = useState([
        {
            name: 'Prenume',
            size: ''
        },
        {
            name: 'Nume',
            size: ''
        },
        {
            name: 'Email',
            size: ''
        },
        {
            name: 'Nr Telefon',
            size: ''
        }
    ]);
    
    return (
        <GridHeaderContext.Provider value={columns}>
            {props.children}
        </GridHeaderContext.Provider>
    );
}

export default GridHeaderProvider;