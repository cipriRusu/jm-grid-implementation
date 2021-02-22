import React, { useState, createContext } from "react";
import { ColumnData } from "../GridBody/GridHeader/ColumnData";

const columnValues: ColumnData[] = [];

export const GridHeaderContext = createContext(columnValues);

const GridHeaderProvider = (props: any) => {
    const [columns, setColumns] = useState([
        {
            column_name: 'Prenume',
            column_width: ''
        },
        {
            column_name: 'Nume',
            column_width: ''
        },
        {
            column_name: 'Email',
            column_width: ''
        },
        {
            column_name: 'Nr Telefon',
            column_width: ''
        }
    ]);
    
    return (
        <GridHeaderContext.Provider value={columns}>
            {props.children}
        </GridHeaderContext.Provider>
    );
}

export default GridHeaderProvider;