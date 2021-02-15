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
type ViewPartState = {
    selectedViewItem: string
}
class GridToolsLayout extends Component<{}, ViewPartState>{
    state = {
        selectedViewItem: ""
    }

    onSelectedViewHandler = (selectedItem: string): void => {
        this.setState({selectedViewItem: selectedItem});
    }

    render(){
        const defaultView = this.state.selectedViewItem === "" ?
                            viewPartItems[0] :
                            this.state.selectedViewItem;
        console.log("default view", defaultView);
        return (
            <div id="grid-container">      
                <AdvancedFilters />
                <AppliedFilters /> 
                <SavedFilters/>
                {viewPartItems.length > 1 && 
                <ViewPart 
                    items={viewPartItems}
                    onChildClick={this.onSelectedViewHandler}
                    selectedItem={defaultView}/>
                }
                <ViewPartItem
                     item={viewPartItems.length <= 1 ? 
                           viewPartItems[0] :
                           defaultView} /> 
                
            </div>
        )
    }
}

export default GridToolsLayout;