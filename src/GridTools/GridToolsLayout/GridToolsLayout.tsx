import React, { Component } from 'react';
import './GridToolsLayout.scss';
import '../GeneralGrid.scss';
import AdvancedFilters from '../AdvancedFilters/AdvancedFilters';
import AppliedFilters from '../AppliedFilters/AppliedFilters';
import SavedFilters from '../SavedFilters/SavedFilters';
import ViewPart from '../ViewPart/ViewPart';

class GridToolsLayout extends Component<{}, {}>{


    render(){
        return (
            <div id="grid-container">      
                <AdvancedFilters />
                <AppliedFilters /> 
                <SavedFilters/>
                <ViewPart />
            </div>
        )
    }
}

export default GridToolsLayout;