import React from 'react';
import './GridToolsLayout.scss';
import './GeneralGrid.scss';
import AdvancedFilters from './AdvancedFilters/AdvancedFilters';
import AppliedFilters from './AppliedFilters/AppliedFilters';
import SavedFilters from './SavedFilters/SavedFilters';
import ViewPart from './ViewPart/ViewPart';
import { IGridProps } from '../Interfaces/GridTools/IGridProps';

const GridToolsLayout: React.FC<IGridProps> = (props) =>  {
 
    return (
        <div id="grid-container">      
            <AdvancedFilters />
            <AppliedFilters /> 
            <SavedFilters/>
            {props.items.length > 1 && 
            <ViewPart items={props.items} />
            }  
        </div>
    );
    
}

export default GridToolsLayout;