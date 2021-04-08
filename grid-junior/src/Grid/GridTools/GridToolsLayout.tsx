import React,{useContext} from 'react';
import './GridToolsLayout.scss';
import './GeneralGrid.scss';
import AdvancedFilters from './AdvancedFilters/AdvancedFilters';
import AppliedFilters from './AppliedFilters/AppliedFilters';
import SavedFilters from './SavedFilters/SavedFilters';
import ViewPart from './ViewPart/ViewPart';
import { GridContext } from '../Grid';

const GridToolsLayout: React.FC = () =>  {
    const gridContext = useContext(GridContext);
    return (
        <div id="grid-container">      
            <AdvancedFilters />
            <AppliedFilters /> 
            <SavedFilters/>
            {gridContext.data.get(gridContext.sort, gridContext.filters, 0, 0).length > 1 && 
            <ViewPart/>
            }  
        </div>
    );
    
}

export default GridToolsLayout;