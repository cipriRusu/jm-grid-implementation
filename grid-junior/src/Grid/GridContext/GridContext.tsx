import React, { useState, createContext } from "react";
import { IGridState } from "../Interfaces/GridTools/IGridState";

export const GridContext = createContext({
    selectedViewItem: "",
    selectViewHandler: (value: string) => {},
});

const GridProvider = (props: any) => {

    const [selectedItem, setSelectedItem] = useState<IGridState>({
        selectedViewItem: ""
    });
    const {selectedViewItem} = selectedItem;

    const selectItemHandler = (selectedItem: string) => {
        console.log("bbbbbbbb");
        setSelectedItem({selectedViewItem: selectedItem});
    };

    return (
        <GridContext.Provider value={{selectedViewItem: selectedViewItem, selectViewHandler: selectItemHandler}}>
            {props.children}
        </GridContext.Provider>
    );
}

export default GridProvider;