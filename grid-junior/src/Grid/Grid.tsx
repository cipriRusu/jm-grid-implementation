import React, { useState, useContext, createContext } from 'react';
import './Grid.scss';
import './GridTools/ViewItem.scss';
import GridToolsLayout from './GridTools/GridToolsLayout'
import GridHeader from './GridBody/GridHeader/GridHeader';
import { IGridProps } from './Interfaces/GridTools/IGridProps';
import { IGridState } from './Interfaces/GridTools/IGridState';
import { IViewPartProps } from './Interfaces/GridTools/IViewPartProps';
import GridHeaderProvider from './GridContext/GridHeaderContext';

export const GridContext = createContext({
    items: [] as string[],
    selectedViewItemContext: "",
    selectViewHandler: (_value: string) => {},
});


const Grid: React.FC<IGridProps> = (props) => {
    const [selectedItem, setSelectedItem] = useState<IGridState>({
        selectedViewItem: ""
    });

    const {selectedViewItem} = selectedItem;

    const selectItemHandler = (selectedItem: string) => {  
        setSelectedItem({selectedViewItem: selectedItem});
    };

    const defaultView = selectedViewItem === "" ?
            props.items[0] :
            selectedViewItem;
    return (
        <GridContext.Provider value={{
            selectedViewItemContext: selectedViewItem,
            selectViewHandler: selectItemHandler,
            items: props.items}}>
            <GridHeaderProvider>
                <div className="grid">
                <GridToolsLayout items={props.items}/>
                <GridHeader />
                <div id="view-item" >
                    {props.items.length <= 1 ? 
                        props.items[0] :
                        defaultView}
                </div>
            </div> 
            </GridHeaderProvider>
            
        </GridContext.Provider>

    );

}
export default Grid;