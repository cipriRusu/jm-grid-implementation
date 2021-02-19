import React, { useContext } from 'react';
import './Grid.scss';
import './GridTools/ViewItem.scss';
import GridToolsLayout from './GridTools/GridToolsLayout'
import GridHeader from './GridBody/GridHeader/GridHeader';
import { IGridProps } from './Interfaces/GridTools/IGridProps';
import {GridContext} from '../Grid/GridContext/GridContext';

const Grid: React.FC<IGridProps> = (props) => {
    const gridContext = useContext(GridContext);

    const defaultView = gridContext.selectedViewItem === "" ?
            props.items[0] :
            gridContext.selectedViewItem;
    return (
        <div className="grid">
            <GridToolsLayout items={props.items}/>

            <GridHeader />

            <div id="view-item" >
                {props.items.length <= 1 ? 
                    props.items[0] :
                    defaultView}
            </div>
        </div>  
    );

}
export default Grid;