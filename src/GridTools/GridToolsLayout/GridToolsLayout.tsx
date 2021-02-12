import React, { Component } from 'react';
import './GridToolsLayout.scss';
import '../GeneralGrid.scss';
import AdvancedFilters from '../AdvancedFilters/AdvancedFilters';
import AppliedFilters from '../AppliedFilters/AppliedFilters';
import SavedFilters from '../SavedFilters/SavedFilters';
import ViewPart from '../ViewPart/ViewPart';
import ViewPartItem from '../ViewPart/ViewItem/ViewItem';

const viewPartItems = [
    'First View',
    'Second View',
    'Third View'
]
type GridToolsState = {
    selectedViewItem: string
}
class GridToolsLayout extends Component<{}, GridToolsState>{
    state = {
        selectedViewItem: ""
    }

    onSelectedViewHandler = (selectedItem: string): void => {
        console.log("selectedViewItem in functie", this.state.selectedViewItem);
        this.setState({selectedViewItem: selectedItem});
    }
    
    render(){
        console.log("selectedViewItem", this.state.selectedViewItem);
        return (
            <div id="grid-container">      
                <AdvancedFilters />
                <AppliedFilters /> 
                <SavedFilters/> 
                <ViewPart items={viewPartItems} onChildClick={this.onSelectedViewHandler}/>
                <ViewPartItem item={this.state.selectedViewItem}/>
            </div>
        )
    }
}

export default GridToolsLayout;