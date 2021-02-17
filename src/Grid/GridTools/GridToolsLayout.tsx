import React, { Component } from 'react';
import './GridToolsLayout.scss';
import './GeneralGrid.scss';
import AdvancedFilters from './AdvancedFilters/AdvancedFilters';
import AppliedFilters from './AppliedFilters/AppliedFilters';
import SavedFilters from './SavedFilters/SavedFilters';
import ViewPart from './ViewPart/ViewPart';
import {IViewPartProps} from '../Interfaces/GridTools/IViewPartProps';

class GridToolsLayout extends Component<IViewPartProps, {}>{

    render(){
        return (
            <div id="grid-container">      
                <AdvancedFilters />
                <AppliedFilters /> 
                <SavedFilters/>
                {this.props.items.length > 1 && 
                <ViewPart 
                    items={this.props.items}
                    onChildClick={this.props.onChildClick}
                    selectedItem={this.props.selectedItem}/>
                }  
            </div>
        )
    }
}

export default GridToolsLayout;