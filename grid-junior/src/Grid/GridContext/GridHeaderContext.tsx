import React, { useState, createContext } from "react";

const columnValues: string[] = [];

export const GridHeaderContext = createContext(columnValues);

const GridHeaderProvider = (props: any) => {
    const [columns, setColumns] = useState([
        'Nume',
        'Prenume',
        'Email',
        'Nr Telefon'
    ]);
    
    return (
        <GridHeaderContext.Provider value={columns}>
            {props.children}
        </GridHeaderContext.Provider>
    );
}

export default GridHeaderProvider;